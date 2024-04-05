import { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
    {
        text: 'Guide',
        children: [
          '/guide/introduction.md',
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
];
