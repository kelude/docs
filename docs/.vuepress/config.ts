import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { navbar, sidebar } from './configs/index'

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
    locales: {
        '/': {
            navbar: navbar,
            sidebar: sidebar,
        }
    }
  }),
})
