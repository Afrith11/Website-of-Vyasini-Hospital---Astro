import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const staticPages = [
    "",
    "about",
    "specialities",
    "doctors",
    "facilities",
    "gallery",
    "blog",
    "appointment",
    "contact"
  ];
  
  const blogPosts = await getCollection('blog');
  const blogSlugs = blogPosts.map(post => `blog/${post.slug}`);
  
  const allPages = [...staticPages, ...blogSlugs];
  const siteUrl = "https://vyasinihospital.com";
  const today = new Date().toISOString().split('T')[0];
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${siteUrl}/${page}${page ? '/' : ''}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page === "" ? "weekly" : "monthly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`).join('').trim()}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
};
