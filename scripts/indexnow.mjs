import fs from 'fs';
import path from 'path';

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const BASE = process.env.BASE || 'https://eliteplumbingdrain.com';
const HOST = BASE.replace(/^https?:\/\//, '');

async function indexNow() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.log('Public directory not found.');
    return;
  }
  
  const files = fs.readdirSync(PUBLIC_DIR);
  const keyFile = files.find(f => f.endsWith('.txt'));
  
  if (!keyFile) {
    console.log('No IndexNow key file found in public/');
    return;
  }
  
  const key = keyFile.replace('.txt', '');
  
  const args = process.argv.slice(2);
  let urls = [];
  
  if (args.length > 0) {
    urls = args.map(p => (p.startsWith('http') ? p : `${BASE}${p.startsWith('/') ? p : '/' + p}`));
  } else {
    try {
      const res = await fetch(`${BASE}/sitemap.xml`);
      const text = await res.text();
      urls = [...text.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
    } catch (err) {
      console.log('Failed to fetch sitemap for URLs');
      return;
    }
  }
  
  if (urls.length === 0) {
    console.log('No URLs to submit.');
    return;
  }
  
  console.log(`Submitting ${urls.length} URLs to IndexNow...`);
  
  try {
    const response = await fetch('https://api.indexnow.org/IndexNow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host: HOST,
        key: key,
        keyLocation: `${BASE}/${keyFile}`,
        urlList: urls
      })
    });
    
    if (response.status === 200) {
      console.log('IndexNow submission successful.');
    } else {
      console.log(`IndexNow submission failed with status: ${response.status}`);
      const text = await response.text();
      console.log(text);
    }
  } catch (err) {
    console.error('Error submitting to IndexNow:', err);
  }
}

indexNow();
