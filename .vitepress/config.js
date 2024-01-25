import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/wicv-notes/',
  title: "wanglongkai's notes",
  description: "Record some messy things",
  ignoreDeadLinks: true,
 
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
      { text: 'Git常用命令', link: '/other/git.md' }
    ],

    sidebar: [
      {
        text: 'dom & css',
        collapsed: true,
        items: [
          { text: 'flex布局', link: '/domcss/flex.md' },
          { text: '包含块', link: '/domcss/containBlock.md' },
          { text: 'BFC', link: '/domcss/BFC.md' },
          { text: 'IFC', link: '/domcss/IFC.md' },
          { text: 'css-background', link: '/domcss/css_background.md' },
          { text: '常用css代码段', link: '/domcss/css-segment.md' },
          { text: 'css技巧', link: '/domcss/css-view.md' },
          { text: 'DOM-CRUD', link: '/domcss/DOM_crud.md' },
          { text: '原生样式操作', link: '/domcss/DOM_style.md' },
          { text: '原生节点遍历', link: '/domcss/DOM_treewalk.md' },
        ]
      },
      {
        text: 'ECMAScript',
        collapsed: true,
        items: [
          { text: '箭头函数', link: '/ECMAScript/arrowfunction.md' },
          { text: 'async await', link: '/ECMAScript/async_await.md' },
          { text: '代码段', link: '/ECMAScript/code_segment.md' },
          { text: 'cookies', link: '/ECMAScript/cookies.md' },
          { text: '防抖节流', link: '/ECMAScript/debounce_throttle.md' },
          { text: '设计模式', link: '/ECMAScript/designModule.md' },
          { text: '宽高与偏移', link: '/ECMAScript/hw_offset.md' },
          { text: 'js小技巧', link: '/ECMAScript/js_art.md' },
          { text: 'JavaScript-webRTC', link: '/ECMAScript/js_camera.md' },
          { text: 'js重要知识点', link: '/ECMAScript/js_important.md' },
          { text: '模块化', link: '/ECMAScript/module.md' },
          { text: '封装cookies', link: '/ECMAScript/myCookiejs.md' },
          { text: 'Promise', link: '/ECMAScript/promise.md' },
          { text: 'WebSocket', link: '/ECMAScript/WebSocket.md' },
        ]
      },
      {
        text: 'React',
        collapsed: true,
        items: [
          { text: 'Context', link: '/react/Context.md' },
          { text: 'Lazy&Suspense', link: '/react/Lazy&Suspense.md' },
          { text: 'redux核心语法', link: '/react/redux_core.md' },
          { text: 'setState', link: '/react/setState.md' },
        ]
      },
      {
        text: 'Vue',
        collapsed: true,
        items: [
          { text: 'Vuex', link: '/vue/vuex.md' },
          { text: 'Vue_mockjs', link: '/vue/vue_mockjs.md' },
          { text: 'Vue_router', link: '/vue/vue_router.md' },
        ]
      },
      {
        text: '其他',
        collapsed: true,
        items: [
          { text: 'Git常用命令', link: '/other/git.md' },
          { text: '命令行常用命令', link: '/other/命令行命令.md' },
          { text: 'axios', link: '/other/axios.md' },
          { text: '跨域解决', link: '/other/cross-origin.md' },
          { text: 'MD语法', link: '/other/markdown_grm.md' },
          { text: '服务器环境初始化', link: '/other/server-init.md' },
          { text: '正则表达式', link: '/other/regexp.md' },
          { text: '重装系统', link: '/other/reSystem.md' },
        ]
      },
      {
        text: '面试',
        collapsed: true,
        items: [
          { text: '手写题', link: '/daily/手写题.md' },
          { text: 'leetCode刷题', link: '/daily/leetcode.md' },
          { text: '一道面试题', link: '/daily/question1.md' },
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
