const moment = require('moment');
const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Git 中文教程',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: '上次更新',
    smoothScroll: true, // 页面滚动
    nav: [
      // {
      //   text: 'Guide',
      //   link: '/guide/',
      // },
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      {
        text: 'GitHub',
        link: 'https://github.com/smpower/git.ruofei.site'
      }
    ],
    sidebar: {
      // '/guide/': [
      //   {
      //     title: 'Guide',
      //     collapsable: false,
      //     children: [
      //       '',
      //       'using-vue',
      //     ]
      //   }
      // ],
      '/cheat-sheets/': [
        {
          title: '创建',
          collapsable: false,
          sidebarDepth: 2,
          path: 'create/'
        },
        // {
        //   title: '配置',
        //   collapsable: false,
        //   sidebarDepth: 2,
        //   path: 'configuration/'
        // },
        // {
        //   title: '本地更改',
        //   collapsable: false,
        //   sidebarDepth: 2,
        //   path: 'local-changes/'
        // },
        // {
        //   title: '提交历史',
        //   collapsable: false,
        //   sidebarDepth: 2,
        //   path: 'commit-history/'
        // },
        // {
        //   title: '分支 & 标签',
        //   collapsable: false,
        //   sidebarDepth: 2,
        //   path: 'branches-tags/'
        // },
        // {
        //   title: '更新 & 发布',
        //   collapsable: false,
        //   sidebarDepth: 2,
        //   path: 'update-publish/'
        // }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/active-header-links',
    '@vuepress/plugin-blog',
    '@vuepress/nprogress',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-156423980-1' // UA-00000000-0
      }
    ],
  ]
}
