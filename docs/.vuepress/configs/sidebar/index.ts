import { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
    '/guide/': [
        {
            text: 'Guide',
            children: [
                '/guide/introduction.md',
                '/guide/getting-started.md',
            ],
        },
    ],
    '/lemp/': [
        {
            text: 'LEMP',
            children: [
                '/lemp/nginx.md',
                '/lemp/mysql.md',
                '/lemp/php.md',
            ],
        },
    ],
    '/services/': [
        {
            text: 'Services',
            children: [
                '/services/redis.md',
                '/services/nodejs.md',
                '/services/certbot.md',
                '/services/minio.md',
            ],
        },
    ],
    '/laravel/': [
        {
            text: 'Laravel',
            children: [
                {
                    text: 'Queues',
                    link: '/laravel/queues.md',
                },
                {
                    text: 'Task Scheduling',
                    link: '/laravel/scheduling.md',
                },
                {
                    text: 'Homestead',
                    link: '/laravel/homestead.md',
                },
                {
                    text: 'Reverb',
                    link: '/laravel/reverb.md',
                },
            ],
        },
    ],
};
