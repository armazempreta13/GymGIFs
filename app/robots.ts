import { MetadataRoute } from 'next';
import { siteConfig } from '../site.config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${siteConfig.seo.url}/sitemap.xml`,
  };
}
