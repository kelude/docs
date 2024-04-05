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
            '/reference/redis.md',
            '/reference/nodejs.md',
        ],
    },
    {
        text: 'Laravel',
        children: [
            {
                text: 'Digging Deeper',
                children: [
                    '/laravel/queues.md',
                    '/laravel/scheduling.md',
                ],
            },
            {
                text: 'Packages',
                children: [
                    '/laravel/homestead.md',
                    '/laravel/reverb.md',
                ],
            },
        ],
    },
];
