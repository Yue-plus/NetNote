import { defaultTheme, defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import navbar from './navbar';
import sidebar from './sidebar';
import pwaPlugin from '@vuepress/plugin-pwa';
import pwaPopupPlugin from '@vuepress/plugin-pwa-popup';
import searchPlugin from '@vuepress/plugin-search';

// 参考：https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#基础配置
export default defineUserConfig({
  lang: 'zh-CN',
  title: 'NetNote',
  description: '只要学不死，就往死里学！',

  head: [
    ['link', { rel: 'icon', href: '/img/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/img/logo_192.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/img/logo_192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  theme: defaultTheme({
    navbar: navbar,
    sidebar: sidebar,
    repo: 'https://github.com/Yue-plus/NetNote',
    repoLabel: 'GitHub',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',
    docsRepo: 'https://github.com/Yue-plus/NetNote',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    contributors: true,
    contributorsText: '此页贡献者',
    lastUpdatedText: '上次更新'
  }),

  // plugins: [
  //   pwaPlugin(),
  //   pwaPopupPlugin({
  //     locales: {
  //       '/': {
  //         message: '发现新内容可用',
  //         buttonText: '刷新',
  //       }
  //     }
  //   }),
  //   // ['@vuepress/docsearch', {
  //   //   appId: '0YWM7BGDQI',
  //   //   apiKey: '9dc6fe12516690be51dea370e78001f6',
  //   //   indexName: 'note.yueplus.ink',
  //   //   locales: {
  //   //     '/': {
  //   //       placeholder: '在此搜索文档'
  //   //     }
  //   //   }
  //   // }],
  //   searchPlugin({
  //     locales: {
  //       '/': { placeholder: '搜索' }
  //     }
  //   }),
  // ],
})