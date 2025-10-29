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
          { text: 'Nginx', link: '/lemp/nginx' },
          { text: 'MySQL', link: '/lemp/mysql' },
          { text: 'PHP', link: '/lemp/php' }
        ]
      },
      {
        text: 'Laravel',
        items: [
          { text: 'Queues', link: '/laravel/queues' },
          { text: 'Task Scheduling', link: '/laravel/scheduling' },
          { text: 'Reverb', link: '/laravel/reverb' },
        ]
      },
      {
        text: 'Services',
        items: [
          { text: 'Redis', link: '/services/redis' },
          { text: 'Nodejs', link: '/services/nodejs' },
          { text: 'Certbot', link: '/services/certbot' },
          { text: 'Minio', link: '/services/minio' },
          { text: 'Supervisor', link: '/services/supervisor' },
        ]
      }
    ],



    socialLinks: [
      { icon: 'github', link: 'https://github.com/kelude/docs' }
    ]
  }
})
