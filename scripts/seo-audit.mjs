import fs from 'fs';
import path from 'path';

const BASE = process.env.BASE || 'http://localhost:3000';

async function fetchHtml(url) {
  const res = await fetch(url);
  const text = await res.text();
  return { status: res.status, text };
}

async function getSitemapUrls() {
  const sitemapUrls = [];
  try {
    const res = await fetch(`${BASE}/sitemap.xml`);
    if (!res.ok) return sitemapUrls;
    const text = await res.text();
    
    if (text.includes('<sitemapindex')) {
      const sitemaps = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
      for (const sm of sitemaps) {
        const smRes = await fetch(sm);
        const smText = await smRes.text();
        sitemapUrls.push(...[...smText.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
      }
    } else {
      sitemapUrls.push(...[...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]));
    }
  } catch (e) {
    console.error('Error fetching sitemap:', e);
  }
  return sitemapUrls;
}

async function getRobotsUrls() {
  try {
    const res = await fetch(`${BASE}/robots.txt`);
    if (res.status === 200) {
      return await res.text();
    }
  } catch (e) {
    // ignore
  }
  return '';
}

function checkRobots(robotsTxt, urlPath) {
  const lines = robotsTxt.split('\n');
  let userAgentAsterisk = false;
  for (const line of lines) {
    if (line.toLowerCase().startsWith('user-agent: *')) {
      userAgentAsterisk = true;
    } else if (line.toLowerCase().startsWith('user-agent:') && !line.toLowerCase().includes('*')) {
      userAgentAsterisk = false;
    }
    if (userAgentAsterisk && line.toLowerCase().startsWith('disallow:')) {
      const path = line.split(':')[1].trim();
      if (path && urlPath.startsWith(path)) {
        return false;
      }
    }
  }
  return true;
}

async function getClickDepth() {
  const queue = [{ url: `${BASE}/`, depth: 0 }];
  const visited = new Set();
  const depths = new Map();
  
  while (queue.length > 0) {
    const { url, depth } = queue.shift();
    if (visited.has(url)) continue;
    visited.add(url);
    depths.set(url, depth);
    
    if (depth < 3) {
      try {
        const { status, text } = await fetchHtml(url);
        if (status === 200) {
          const links = [...text.matchAll(/<a\s+(?:[^>]*?\s+)?href=["'](.*?)["']/gi)].map(m => m[1]);
          for (let link of links) {
            if (link.startsWith('/')) link = `${BASE}${link}`;
            if (link.startsWith(BASE)) {
              link = link.split('#')[0];
              if (!visited.has(link)) {
                queue.push({ url: link, depth: depth + 1 });
              }
            }
          }
        }
      } catch (e) {
        // ignore
      }
    }
  }
  return depths;
}

async function runAudit() {
  console.log('Starting SEO audit...');
  let errors = [];
  
  const sitemapUrls = await getSitemapUrls();
  if (sitemapUrls.length === 0) {
    console.error('No URLs found in sitemap or sitemap fetch failed.');
    process.exit(1);
  }
  
  const robotsTxt = await getRobotsUrls();
  const depths = await getClickDepth();
  const titles = new Map();
  const descriptions = new Map();
  
  for (const url of sitemapUrls) {
    const urlPath = url.replace(BASE, '');
    try {
      const { status, text } = await fetchHtml(url);
      
      if (status !== 200) {
        errors.push(`[${url}] Status code is ${status}`);
        continue;
      }
      
      const canonicalMatch = text.match(/<link\s+rel=["']canonical["']\s+href=["'](.*?)["']/i);
      const titleMatch = text.match(/<title[^>]*>(.*?)<\/title>/i);
      const descMatch = text.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
      const h1Matches = [...text.matchAll(/<h1[^>]*>(.*?)<\/h1>/gi)];
      const robotsMatch = text.match(/<meta\s+name=["']robots["']\s+content=["'](.*?)["']/i);
      
      if (canonicalMatch && canonicalMatch[1] !== url) {
        errors.push(`[${url}] Canonical mismatch: found ${canonicalMatch[1]}`);
      }
      
      if (!titleMatch || !titleMatch[1]) {
        errors.push(`[${url}] Missing title tag`);
      } else {
        const title = titleMatch[1];
        if (title.length > 70) {
          errors.push(`[${url}] Title too long (${title.length} chars)`);
        }
        if (titles.has(title)) {
          errors.push(`[${url}] Duplicate title: same as ${titles.get(title)}`);
        } else {
          titles.set(title, url);
        }
      }
      
      if (!descMatch || !descMatch[1]) {
        errors.push(`[${url}] Missing meta description`);
      } else {
        const desc = descMatch[1];
        if (desc.length < 70 || desc.length > 160) {
          errors.push(`[${url}] Meta description length invalid (${desc.length} chars)`);
        }
        if (descriptions.has(desc)) {
          errors.push(`[${url}] Duplicate description: same as ${descriptions.get(desc)}`);
        } else {
          descriptions.set(desc, url);
        }
      }
      
      if (h1Matches.length !== 1) {
        errors.push(`[${url}] H1 count is ${h1Matches.length} (must be exactly 1)`);
      }
      
      if (robotsMatch && robotsMatch[1].toLowerCase().includes('noindex')) {
        errors.push(`[${url}] noindex page found in sitemap`);
      }
      
      if (!checkRobots(robotsTxt, urlPath)) {
        errors.push(`[${url}] URL is disallowed in robots.txt but found in sitemap`);
      }
      
      if (!depths.has(url) || depths.get(url) > 3) {
        errors.push(`[${url}] Click depth from homepage > 3 or unreachable`);
      }
      
    } catch (err) {
      errors.push(`[${url}] Error fetching: ${err.message}`);
    }
  }
  
  if (errors.length > 0) {
    console.error(`\\nSEO Audit Failed with ${errors.length} errors:`);
    errors.forEach(e => console.error(e));
    process.exit(1);
  } else {
    console.log('\\nSEO Audit Passed! All checks clean.');
    process.exit(0);
  }
}

runAudit();
