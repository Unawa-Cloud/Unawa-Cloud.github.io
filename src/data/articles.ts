/**
 * The resources articles, lifted off the WordPress site at unawa.asia before it
 * is taken down. Bodies live beside this file as HTML rather than Markdown
 * because that is the shape the source was in; converting would have risked
 * losing a link or a list for no gain.
 *
 * URLs deliberately keep the paths the posts already have, so existing links
 * and search results survive the hand-over.
 */

import whyItMatters from '../articles/why-it-matters-to-notarize.html?raw';
import howToBecomeAnEnp from '../articles/how-to-become-an-enp.html?raw';
import accredited from '../articles/notarizeit-is-now-a-supreme-court-accredited-electronic-notarial-facility.html?raw';

export interface Article {
  slug: string;
  title: string;
  /** Display form, as the cards and the byline show it. */
  date: string;
  /** Machine form for <time datetime>. */
  datetime: string;
  image: { src: string; width: number; height: number };
  body: string;
}

export const ARTICLE_BASE = '/electronic-notarization';

export const articleHref = (slug: string) => `${ARTICLE_BASE}/${slug}/`;

/** First paragraph, flattened, for the meta description and the card blurb. */
export function summarise(body: string, limit = 155): string {
  const text = body
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= limit) return text;
  const cut = text.slice(0, limit);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}

export const articles: Article[] = [
  {
    slug: 'why-it-matters-to-notarize',
    title: 'Why It Matters to Notarize',
    date: 'October 7, 2025',
    datetime: '2025-10-07',
    image: { src: '/resources/notarize.jpg', width: 740, height: 416 },
    body: whyItMatters,
  },
  {
    slug: 'how-to-become-an-enp',
    title: 'How to become an Electronic Notary Public',
    date: 'August 7, 2026',
    datetime: '2026-08-07',
    image: { src: '/resources/enp.jpg', width: 740, height: 416 },
    body: howToBecomeAnEnp,
  },
  {
    slug: 'notarizeit-is-now-a-supreme-court-accredited-electronic-notarial-facility',
    title: 'NotarizeIT is now a Supreme Court-accredited Electronic Notarization Facility',
    date: 'August 6, 2026',
    datetime: '2026-08-06',
    image: { src: '/resources/accredited.jpg', width: 740, height: 416 },
    body: accredited,
  },
];
