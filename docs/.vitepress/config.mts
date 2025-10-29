import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/',
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },

      {
        text: 'LEMP',
        items: [
          { text: 'nginx', link: '/lemp/nginx' },
          { text: 'mysql', link: '/lemp/mysql' },
          { text: 'php', link: '/lemp/php' }
        ]
      },
      {
        text: 'Laravel',
        items: [
          { text: 'queues', link: '/laravel/queues' },
          { text: 'Task Scheduling', link: '/laravel/scheduling' },
          { text: 'Reverb', link: '/laravel/reverb' },
        ]
      },
      {
        text: 'Services',
        items: [
          { text: 'redis', link: '/services/redis' },
          { text: 'nodejs', link: '/services/nodejs' },
          { text: 'certbot', link: '/services/certbot' },
          { text: 'minio', link: '/services/minio' },
          { text: 'supervisor', link: '/services/supervisor' },
        ]
      }
    ],



    socialLinks: [
      { icon: 'github', link: 'https://github.com/kelude/docs' }
    ]
  }
})
