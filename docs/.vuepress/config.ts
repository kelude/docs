import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs/index'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  base: '/',

  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
  },

  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/hero.png',
    repo: 'kelude/docs',

    locales: {
        '/': {
            navbar: navbar,
            sidebar: sidebar,
        }
    },
    
  }),

  markdown: {
    code: {
      lineNumbers: false,
    },
  },

  plugins: [
    docsearchPlugin({

    }),
  ],

})
