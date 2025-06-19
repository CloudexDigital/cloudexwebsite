import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const links = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/#Services', changefreq: 'monthly', priority: 0.9 },
  { url: '/#Portfolio', changefreq: 'monthly', priority: 0.9 },
  { url: '/#Contact', changefreq: 'monthly', priority: 0.95 }
];

const sitemap = new SitemapStream({ hostname: 'https://www.cloudexdigital.co.za' });

const writeStream = createWriteStream('./public/sitemap.xml');
sitemap.pipe(writeStream);

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() =>
  console.log('✅ Sitemap generated at /public/sitemap.xml')
);
