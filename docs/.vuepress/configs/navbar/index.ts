import { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
    {
        text: 'Guide',
        children: [
          '/guide/introduction.md',
          '/guide/getting-started.md',
        ],
    },
    {
        text: 'Reference',
        children: [
            {
                text: 'LEMP',
                children: [
                    '/reference/lemp/nginx.md',
                    '/reference/lemp/mysql.md',
                    '/reference/lemp/php.md',
                ],
            },
            {
                text: 'Services',
                children: [
                    '/reference/redis.md',
                    '/reference/nodejs.md',
                    '/reference/certbot.md',
                    '/reference/minio.md',
                ],
            },
        ],
    },
    {
        text: 'Laravel',
        children: [
            {
                text: "Queues",
                link: '/laravel/queues.md',
            },
            {
                text: "Task Scheduling",
                link: '/laravel/scheduling.md',
            },
            {
                text: "Homestead",
                link: '/laravel/homestead.md',
            },
            {
                text: "Reverb",
                link: "/laravel/reverb.md",
            },
        ],
    },
];
