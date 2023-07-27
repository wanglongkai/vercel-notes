import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  
  base: '/wicv-notes/',
  title: "wanglongkai's notes",
  description: "Record some messy things",
 
  themeConfig: {
    logo: '/assets/img/test.jpg',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '示例',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'dom & css',
        items: [
          { text: 'flex布局', link: '/domcss/flex.md' },
          { text: '常用命令', link: '/domcss/常用命令.md' },
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
