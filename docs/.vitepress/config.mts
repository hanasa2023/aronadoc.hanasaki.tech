import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'A.R.O.N.A',
  description: '一个BlueArchive资源api网站',
  head: [['link', { rel: 'icon', href: '/arona.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/arona.svg',
    nav: [
      { text: '主页', link: '/' },
      { text: 'API', link: '/guide/api-overview' },
    ],
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                },
              },
            },
          },
        },
      },
    },

    sidebar: [
      {
        text: '简介',
        items: [{ text: '项目简介', link: '/guide/introduce' }],
      },
      {
        text: 'API文档',
        items: [
          { text: 'API 速览', link: '/guide/api-overview' },
          { text: '学生相关信息', link: '/guide/api-student' },
          { text: '攻略', link: '/guide/api-strategy' },
          { text: '插画（涩图）', link: '/guide/api-image' },
          { text: '总力战', link: '/guide/api-raids' },
          { text: 'TODO', link: '/guide/api-todo' },
        ],
      },
      {
        text: 'ID速览',
        items: [
          { text: '学生ID一览', link: 'guide/student-id-overview' },
          { text: 'BOSS ID一览', link: 'guide/boss-id-overview' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/hanasa2023/arona-api',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/Hanasaka2023',
      },
    ],

    footer: {
      message: 'A.R.O.N.A',
      copyright: 'Copyright © 2024-2025 hanasaki',
    },
  },
  lastUpdated: true,
})
