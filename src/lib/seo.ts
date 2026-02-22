export const DEFAULT_SITE_URL = 'https://sterky.example';
export const DEFAULT_SITE_NAME = 'Sterky Atelier';
export const DEFAULT_LOCALE = 'cs_CZ';
export const DEFAULT_LANGUAGE = 'cs';

export interface SeoImage {
  url: string;
  alt?: string;
}

export interface BuildSeoMetaInput {
  title: string;
  description: string;
  pathname?: string;
  canonicalPath?: string;
  site?: URL | string | null;
  type?: 'website' | 'article';
  image?: SeoImage | null;
  noindex?: boolean;
  siteName?: string;
  locale?: string;
}

function isAbsoluteUrl(value: string) {
  return /^https?:\/\//i.test(value);
}

export function resolveSiteUrl(site?: URL | string | null) {
  const candidate = site ? String(site) : DEFAULT_SITE_URL;
  return new URL(candidate);
}

export function normalizePathname(pathname = '/') {
  if (!pathname) return '/';
  if (isAbsoluteUrl(pathname)) {
    return new URL(pathname).pathname;
  }

  let normalized = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (normalized !== '/' && normalized.endsWith('/index.html')) {
    normalized = normalized.replace(/\/index\.html$/, '/');
  }
  return normalized;
}

export function toAbsoluteUrl(pathOrUrl: string, site?: URL | string | null) {
  if (isAbsoluteUrl(pathOrUrl)) return pathOrUrl;
  return new URL(normalizePathname(pathOrUrl), resolveSiteUrl(site)).toString();
}

export function buildCanonicalUrl(input: {
  pathname?: string;
  canonicalPath?: string;
  site?: URL | string | null;
}) {
  const path = input.canonicalPath ?? input.pathname ?? '/';
  return toAbsoluteUrl(path, input.site);
}

export function buildSeoMeta(input: BuildSeoMetaInput) {
  const canonical = buildCanonicalUrl({
    pathname: input.pathname,
    canonicalPath: input.canonicalPath,
    site: input.site,
  });

  const imageUrl = input.image?.url ? toAbsoluteUrl(input.image.url, input.site) : undefined;
  const siteName = input.siteName ?? DEFAULT_SITE_NAME;
  const locale = input.locale ?? DEFAULT_LOCALE;
  const type = input.type ?? 'website';

  return {
    title: input.title,
    description: input.description,
    canonical,
    noindex: Boolean(input.noindex),
    og: {
      title: input.title,
      description: input.description,
      type,
      url: canonical,
      siteName,
      locale,
      image: imageUrl,
      imageAlt: input.image?.alt,
    },
    twitter: {
      card: imageUrl ? 'summary_large_image' : 'summary',
      title: input.title,
      description: input.description,
      image: imageUrl,
    },
  };
}

