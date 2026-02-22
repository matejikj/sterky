import type { APIRoute } from 'astro';
import { realizaceProjects } from '../data/realizace';
import { sterkyTypes } from '../data/sterky';
import { toAbsoluteUrl } from '../lib/seo';

export const prerender = true;

function xmlEscape(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = ({ site }) => {
  const urls = [
    '/',
    '/sterky/',
    '/realizace/',
    ...sterkyTypes.map((item) => `/sterky/${item.slug}/`),
    ...realizaceProjects.map((item) => `/realizace/${item.slug}/`),
  ];
  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${xmlEscape(toAbsoluteUrl(path, site))}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};

