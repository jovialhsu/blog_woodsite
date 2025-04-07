import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    react(), 
    mdx(),
    image(),
    sitemap(),
  ],
  markdown: {
    // 可以添加與您之前在 Gatsby 中使用的 remark 插件類似的配置
    remarkPlugins: [],
    rehypePlugins: [],
  }
}); 