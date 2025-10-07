import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { navbar, sidebar } from "./configs/index";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";

export default defineUserConfig({
  base: "/docs/",

  locales: {
    "/": {
      lang: "en-US",
      title: "VuePress",
      description: "Vue-powered Static Site Generator",
    },
  },

  bundler: viteBundler(),
  theme: defaultTheme({
    logo: "/images/hero.png",
    repo: "kelude/docs",

    locales: {
      "/": {
        navbar: navbar,
        sidebar: sidebar,
      },
    },
  }),

  markdown: {},

  plugins: [
    docsearchPlugin({
      appId: "VYR1K2T971",
      apiKey: "2f4cf3aa07c2bd8e1c476dea1cda6d94",
      indexName: "kelude",
    }),
  ],
});
