import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "AimerSakura‘s Blog",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "AimerSakura的博客",
      description: "vuepress-theme-hope 的博客演示",
    },
  },
  pagePatterns: ["**/*.md", "!zh/demo/**/*.md"],
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
