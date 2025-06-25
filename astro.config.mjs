// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
// 1. 在文件顶部，手动导入 expressiveCode
import expressiveCode from 'astro-expressive-code';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [ 
		expressiveCode({
      // 在这里可以添加您的自定义配置，我们先用一个基础的
      // themes 数组让它能根据亮/暗模式自动切换主题
      themes: ['catppuccin-latte', 'catppuccin-frappe'],
    }),
    mdx(), sitemap()
	],
});
