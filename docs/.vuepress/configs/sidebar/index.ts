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
    ],
    '/laravel/': [
        {
            text: 'Digging Deeper',
            collapsible: true,
            children: [
                {
                    text: 'Queues',
                    link: '/laravel/queues.md',
                },
                {
                    text: 'Task Scheduling',
                    link: '/laravel/scheduling.md',
                },
            ],
        },
        {
            text: 'Packages',
            collapsible: true,
            children: [
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
    ]
};
