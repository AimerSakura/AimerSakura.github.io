import comp from "C:/Users/Ma/Desktop/personalWebsite/my-docs/src/.vuepress/.temp/pages/demo/index.html.vue"
const data = JSON.parse("{\"path\":\"/demo/\",\"title\":\"Features demo\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Features demo\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"Guide\"],\"gitInclude\":[],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://Aimersakura.github.io/demo/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"AimerSakura‘s Blog\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Features demo\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Features demo\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"AimerSakura\\\",\\\"url\\\":\\\"https://mister-hope.com\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":0.04,\"words\":12},\"filePathRelative\":\"demo/README.md\",\"excerpt\":\"\"}")
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
