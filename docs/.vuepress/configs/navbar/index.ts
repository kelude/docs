import { NavbarConfig } from "@vuepress/theme-default";

export const navbar: NavbarConfig = [
    {
        text: 'LEMP',
        children: [
            '/lemp/nginx.md',
            '/lemp/mysql.md',
            '/lemp/php.md',
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
    {
        text: 'Services',
        children: [
            '/services/redis.md',
            '/services/nodejs.md',
            '/services/certbot.md',
            '/services/minio.md',
        ],
    },
];
