import React from 'react';
import { notFound } from 'next/navigation';
import { pageMeta } from '@/lib/seo';
import { articles } from '@/content/articles';
import { articlesMore } from '@/content/articlesMore';
import { articleDepth } from '@/content/articleDepth';
import { guidePage } from '@/lib/routes';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { PhotoSlot } from '@/components/PhotoSlot';
import { FaqList } from '@/components/FaqList';
import { LeadFormBlock } from '@/components/lead/LeadFormBlock';
import { Related } from '@/components/Related';

export const dynamicParams = false;

const allArticles = [...articles, ...articlesMore];

export async function generateStaticParams() {
  const published = allArticles.filter(a => a.status === 'PUBLISHED');
  return published.map(a => ({
    guide: a.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: guideSlug } = await params;
  const article = allArticles.find(a => a.slug === guideSlug);
  
  if (!article || article.status !== 'PUBLISHED') return {};

  return pageMeta({
    title: article.seoTitle,
    description: article.metaDescription,
    path: guidePage(article.slug),
    keywords: [
      article.title.toLowerCase(),
      `${article.category.toLowerCase()} guide`,
      'plumbing repair tips',
      'DIY plumbing advice',
      'plumbing troubleshooting',
      'homeowner plumbing guide',
    ],
  });
}

export default async function GuidePage({ params }: { params: Promise<{ guide: string }> }) {
  const { guide: guideSlug } = await params;
  const article = allArticles.find(a => a.slug === guideSlug);
  
  if (!article || article.status !== 'PUBLISHED') {
    notFound();
  }

  const depth = articleDepth[article.slug];
  
  const breadcrumbs = [
    { label: 'Resources', href: '/resources/' },
    { label: article.category, href: '/resources/' },
    { label: article.title, href: guidePage(article.slug) }
  ];

  // Quick date formatter
  const formattedDate = new Date(article.updated || article.published).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });

  const combinedFaqs = [...(article.faqs || []), ...(depth?.extraFaqs || [])];

  return (
    <div className="bg-paper pb-24 pt-8">
      <div className="container-x max-w-7xl">
        <Breadcrumbs items={breadcrumbs} />
        
        <div className="grid lg:grid-cols-3 gap-12">
          <article className="lg:col-span-2 bg-white rounded-3xl p-8 md:p-12 ring-1 ring-line shadow-sm prose-sw">
            <span className="eyebrow text-copper mb-4 block">{article.category}</span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink mb-6">{article.h1}</h1>
            <div className="text-sm text-ink/60 mb-8">
              Updated on {formattedDate}
            </div>

            <div className="answer-box">
              <strong className="block mb-2 text-ink">Quick Answer:</strong>
              <p>{article.answer}</p>
            </div>

            <div className="my-10 aspect-video rounded-2xl overflow-hidden bg-paper relative">
              <div className="aspect-video bg-sky-tint rounded-2xl mb-6" />
            </div>

            {article.sections.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-bold text-ink mb-4">{section.heading}</h2>
                <p className="mb-4">{section.content}</p>
                {section.list && (
                  <ul className="list-disc pl-5 space-y-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {depth && (
              <div className="bg-paper p-8 rounded-2xl my-10 border border-line">
                <h2 className="text-2xl font-bold text-ink mb-4 mt-0">When to Call a Professional</h2>
                <p className="mb-6">{depth.whenToCall}</p>
                <h3 className="text-xl font-bold text-ink mb-3">What a Plumber Will Do</h3>
                <p className="mb-0">{depth.whatPlumberDoes}</p>
              </div>
            )}

            {combinedFaqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-3xl font-heading font-bold text-ink mb-8">Frequently Asked Questions</h2>
                <FaqList faqs={combinedFaqs} />
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-line text-sm text-ink/60 italic">
              Editorial Note: This guide is for informational purposes only. Plumbing systems can be dangerous. Always consult a licensed professional for any plumbing repairs or installations.
            </div>
          </article>

          <aside className="space-y-8">
            <div className="sticky top-24 space-y-8">
              <LeadFormBlock defaultService="Plumbing Service Inquiry" />
              
              <Related items={[...(article.services||[]), ...(article.relatedArticles||[])].map(s => ({ title: s, slug: s, type: "service" as const }))} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
