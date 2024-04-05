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
    '/reference/': [
        {
            text: 'LEMP',
            collapsible: true,
            children: [
                '/reference/lemp/nginx.md',
                '/reference/lemp/mysql.md',
                '/reference/lemp/php.md',
            ],
        },
        '/reference/redis.md',
        '/reference/nodejs.md',
        {
            text: 'Laravel',
            collapsible: true,
            children: [
                {
                    text: 'Homestead',
                    link: '/reference/laravel/homestead.md',
                },
                {
                    text: 'Queues',
                    link: '/reference/laravel/queues.md',
                },
                {
                    text: 'Reverb',
                    link: '/reference/laravel/reverb.md',
                },
                {
                    text: 'Task Scheduling',
                    link: '/reference/laravel/scheduling.md',
                },
            ],
        },
    ],
};
