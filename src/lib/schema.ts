export interface JsonLdObject {
  [key: string]: unknown;
}

export interface OrganizationInput {
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
}

export interface LocalBusinessInput extends OrganizationInput {
  telephone?: string;
  areaServed?: string | string[];
  address?: {
    streetAddress?: string;
    addressLocality?: string;
    postalCode?: string;
    addressCountry?: string;
  };
}

export interface ServiceInput {
  name: string;
  description?: string;
  url: string;
  serviceType?: string;
  areaServed?: string | string[];
  providerName?: string;
}

export interface BreadcrumbSchemaItem {
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function createOrganizationSchema(input: OrganizationInput): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: input.name,
    url: input.url,
    logo: input.logo,
    description: input.description,
    sameAs: input.sameAs,
  };
}

export function createLocalBusinessSchema(input: LocalBusinessInput): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: input.name,
    url: input.url,
    logo: input.logo,
    description: input.description,
    telephone: input.telephone,
    areaServed: input.areaServed,
    address: input.address
      ? {
          '@type': 'PostalAddress',
          ...input.address,
        }
      : undefined,
  };
}

export function createServiceSchema(input: ServiceInput): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    url: input.url,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    areaServed: input.areaServed,
    provider: input.providerName
      ? {
          '@type': 'Organization',
          name: input.providerName,
        }
      : undefined,
  };
}

export function createBreadcrumbListSchema(items: BreadcrumbSchemaItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createFAQPageSchema(items: FAQItem[]): JsonLdObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

