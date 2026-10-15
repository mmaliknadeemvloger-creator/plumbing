import React from 'react';
import Link from 'next/link';
import { pageMeta } from '@/lib/seo';
import { articles } from '@/content/articles';
import { articlesMore } from '@/content/articlesMore';
import { resourceHub, guidePage } from '@/lib/routes';
import { CtaBand } from '@/components/CtaBand';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { JsonLd } from '@/components/JsonLd';
import { pageGraph } from '@/lib/schema';

export const metadata = pageMeta({
  title: 'Plumbing Guides & Homeowner Resources | Elite Plumbing',
  description: 'Expert plumbing guides, DIY tips, and answers to common household water and pipe issues. Learn how to maintain your home\'s plumbing.',
  path: resourceHub(),
  keywords: [
    'plumbing guides',
    'plumbing advice',
    'DIY plumbing tips',
    'how to fix plumbing problems',
    'plumbing troubleshooting',
    'home plumbing maintenance',
    'plumbing tips and tricks',
  ],
});

export default function ResourcesHubPage() {
  const allArticles = [...articles, ...articlesMore].filter(a => a.status === 'PUBLISHED');
  
  // Group by category
  const categoriesMap = new Map<string, typeof allArticles>();
  allArticles.forEach(a => {
    if (!categoriesMap.has(a.category)) {
      categoriesMap.set(a.category, []);
    }
    categoriesMap.get(a.category)!.push(a);
  });

  const breadcrumbs = [
    { label: 'Resources', href: resourceHub() }
  ];

  return (
    <>
      <JsonLd
        data={pageGraph({
          type: 'CollectionPage',
          path: resourceHub(),
          name: 'Plumbing Guides & Homeowner Resources | Elite Plumbing',
          description: 'Expert plumbing advice, maintenance tips, and troubleshooting guides.',
          breadcrumbs: [
            { name: 'Home', item: '/' },
            { name: 'Resources', item: resourceHub() },
          ],
        })}
      />
      <div className="bg-paper border-b border-line">
        <div className="container-x">
          <Breadcrumbs items={breadcrumbs} hideSchema={true} />
        </div>
      </div>
      <section className="bg-ink pt-16 pb-20 text-white">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="eyebrow text-sky mb-4 block">Knowledge Base</span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Plumbing Guides & Resources
            </h1>
            <p className="text-xl text-white/80">
              Expert advice, maintenance tips, and troubleshooting guides to help you understand and care for your home's plumbing system.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-paper">
        <div className="container-x space-y-20">
          {Array.from(categoriesMap.entries()).map(([category, categoryArticles]) => (
            <div key={category}>
              <h2 className="text-3xl font-heading font-bold text-ink mb-8 border-b border-line pb-4">{category}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryArticles.map(article => (
                  <Link 
                    key={article.slug}
                    href={guidePage(article.slug)}
                    className="bg-white p-8 rounded-2xl ring-1 ring-line hover:ring-copper transition-all shadow-sm group flex flex-col"
                  >
                    <h3 className="font-bold text-xl text-ink mb-3 group-hover:text-copper transition-colors">{article.title}</h3>
                    <p className="text-ink/70 text-sm line-clamp-3 mb-6 flex-grow">{article.answer}</p>
                    <div className="text-copper font-medium text-sm flex items-center gap-1 mt-auto">
                      Read guide
                      <span aria-hidden="true">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <CtaBand />
    </>
  );
}
