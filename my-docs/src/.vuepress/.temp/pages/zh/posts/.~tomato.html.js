import comp from "C:/Users/Ma/Desktop/personalWebsite/my-docs/src/.vuepress/.temp/pages/zh/posts/.~tomato.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/.~tomato.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"zh/posts/.~tomato.md\",\"excerpt\":\"\"}")
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
