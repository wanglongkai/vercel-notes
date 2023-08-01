import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wicv-notes/',
  title: "wanglongkai's notes",
  description: "Record some messy things",
  
 
  themeConfig: {
    logo: '/logo.jpg',
    search: {
      provider: 'local'
    },
    outline: 'deep',
    outlineTitle: '目录',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    externalLinkIcon: true, // 是否展示外部链接的图标
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '示例',
        collapsed: false, // 是否折叠
        items: [
          { text: 'Markdown扩展', link: '/markdown-examples' },
          { text: 'Runtime API扩展', link: '/api-examples' }
        ]
      },
      {
        text: 'dom & css',
        collapsed: false,
        items: [
          { text: 'flex布局', link: '/domcss/flex.md' },
          { text: '常用命令', link: '/domcss/常用命令.md' },
        ]
      },
      {
        text: '其他',
        collapsed: false,
        items: [
          { text: 'Git常用命令', link: '/other/git.md' },
        ]
      },
      {
        text: 'bug-fix',
        link: '/bug/bug.md'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wanglongkai' }
    ]
  }
})
