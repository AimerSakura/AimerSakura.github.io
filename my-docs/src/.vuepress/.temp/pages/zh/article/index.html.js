import comp from "C:/Users/Ma/Desktop/personalWebsite/my-docs/src/.vuepress/.temp/pages/zh/article/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/article/\",\"title\":\"文章\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"文章\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"article\"},\"layout\":\"BlogType\",\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://Aimersakura.github.io/zh/article/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AimerSakura‘s Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"文章\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"文章\\\"}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
