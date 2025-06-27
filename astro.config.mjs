// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com', // 請更新為您的實際網域
    integrations: [mdx(), sitemap(), react()],
    output: 'static', // 靜態網站生成
});