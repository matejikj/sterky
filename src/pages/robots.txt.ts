import type { APIRoute } from 'astro';
import { buildCanonicalUrl } from '../lib/seo';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = buildCanonicalUrl({
    canonicalPath: '/sitemap.xml',
    site,
  });

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};

