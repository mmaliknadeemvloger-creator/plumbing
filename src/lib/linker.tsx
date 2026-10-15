import React from 'react';
import Link from 'next/link';

const TOPIC_MAP: Record<string, string> = {
  'drain cleaning': '/plumbing-services/drain-cleaning/',
  'hydro jetting': '/plumbing-services/hydro-jetting/',
  'sewer line repair': '/plumbing-services/sewer-line-repair/',
  'water heater': '/plumbing-services/water-heater-services/',
  'emergency plumber': '/emergency-plumber/',
  'leak detection': '/plumbing-services/leak-detection/',
  'pipe repair': '/plumbing-services/pipe-repair/',
  'toilet repair': '/plumbing-services/toilet-repair/',
  'faucet repair': '/plumbing-services/faucet-repair/',
  'garbage disposal': '/plumbing-services/garbage-disposal/',
  'residential plumbing': '/plumbing-services/residential-plumbing/',
  'commercial plumbing': '/plumbing-services/commercial-plumbing/',
  'shutoff valve': '/resources/find-water-shutoff-valve/',
};

export function createLinker(currentPath: string) {
  let linkCount = 0;
  const maxLinks = 6;
  const linkedTopics = new Set<string>();

  return function link(text: string): React.ReactNode {
    if (linkCount >= maxLinks) return <>{text}</>;

    let result: React.ReactNode[] = [text];

    for (const [topic, href] of Object.entries(TOPIC_MAP)) {
      if (href === currentPath || linkedTopics.has(topic) || linkCount >= maxLinks) {
        continue;
      }

      // Simple case-insensitive regex for the topic
      const regex = new RegExp(`\\b(${topic})\\b`, 'i');
      
      const newResult: React.ReactNode[] = [];
      let replaced = false;

      for (let i = 0; i < result.length; i++) {
        const item = result[i];
        if (typeof item === 'string' && !replaced) {
          const match = regex.exec(item);
          if (match) {
            const before = item.substring(0, match.index);
            const matchText = match[0];
            const after = item.substring(match.index + matchText.length);
            
            if (before) newResult.push(before);
            newResult.push(<Link key={`${topic}-${linkCount}`} href={href} className="link">{matchText}</Link>);
            if (after) newResult.push(after);
            
            replaced = true;
            linkedTopics.add(topic);
            linkCount++;
          } else {
            newResult.push(item);
          }
        } else {
          newResult.push(item);
        }
      }
      
      result = newResult;
    }

    return <>{result.map((r, i) => React.isValidElement(r) ? r : <React.Fragment key={`text-${i}`}>{r}</React.Fragment>)}</>;
  };
}
