import { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = {
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
    '/laravel/': [
        {
            text: 'Laravel',
            children: [
                '/laravel/queues.md',
                '/laravel/scheduling.md',
                '/laravel/homestead.md',
                '/laravel/reverb.md',
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
};
