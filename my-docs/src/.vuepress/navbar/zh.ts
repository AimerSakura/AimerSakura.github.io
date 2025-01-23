import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  // "/zh/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "pen-to-square", link: "1" },
      //     { text: "苹果2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },
      // {
      //   text: "香蕉",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      //   children: [
      //     {
      //       text: "香蕉 1",
      //       icon: "pen-to-square",
      //       link: "1",
      //     },
      //     {
      //       text: "香蕉 2",
      //       icon: "pen-to-square",
      //       link: "2",
      //     },
      //     "3",
      //     "4",
      //   ],
      // },
      // { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      // { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      {
        text: "题解",
        icon: "pen-to-square",
        prefix: "题解/",
        children: [
          {
            text: "测试题解",
            icon: "pen-to-square",
            link: "1",
          },
          // {
          //   text: "题解 2",
          //   icon: "pen-to-square",
          //   link: "2",
          // },
          // "3",
          // "4",
        ],
      },
       {
        text: "教程",
        icon: "pen-to-square",
        prefix: "教程/",
        children: [
          {
            text: "个人博客站搭建教程",
            icon: "pen-to-square",
            link: "使用Vuepress框架搭建GitHub Page个人博客站",
          },
          // {
          //   text: "教程 2",
          //   icon: "pen-to-square",
          //   link: "2",
          // },
          // "3",
          // "4",
        ],
      },
      // "strawberry",
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
