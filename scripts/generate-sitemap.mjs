import fs from 'fs';
import { blogPosts } from '../src/data/blogData.js';

const hostname = 'https://turkishspeakingclub.com';

// Sabit Sayfalar
const staticPages = [
  '',
  '/about',
  '/materials',
  '/how-it-works',
  '/private',
  '/membership',
  '/faq',
  '/terms-and-privacy',
  '/blog',
];

// Blog Yazılarını Dinamik Olarak Ekle
const blogPages = blogPosts.map(post => `/blog/${post.slug}`);

const allPages = [...staticPages, ...blogPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      return `
    <url>
      <loc>${hostname}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.includes('/blog/') ? 'weekly' : 'monthly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`;
    })
    .join('')}
</urlset>`;

fs.writeFileSync('public/sitemap.xml', sitemap);
console.log('✅ Sitemap successfully generated in /public/sitemap.xml');