export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"Guide\":{\"path\":\"/category/guide/\",\"indexes\":[0,1,2,3,4,5]},\"Cherry\":{\"path\":\"/category/cherry/\",\"indexes\":[6]},\"Dragon Fruit\":{\"path\":\"/category/dragon-fruit/\",\"indexes\":[7]},\"Fruit\":{\"path\":\"/category/fruit/\",\"indexes\":[8,7,9,10,11,12]},\"Strawberry\":{\"path\":\"/category/strawberry/\",\"indexes\":[8]},\"配置教程\":{\"path\":\"/category/%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B/\",\"indexes\":[13]},\"Apple\":{\"path\":\"/category/apple/\",\"indexes\":[11,12,14,15]},\"Banana\":{\"path\":\"/category/banana/\",\"indexes\":[16,17,9,10]}}},\"/zh/\":{\"path\":\"/zh/category/\",\"map\":{\"配置教程\":{\"path\":\"/zh/category/%E9%85%8D%E7%BD%AE%E6%95%99%E7%A8%8B/\",\"indexes\":[18]},\"题解\":{\"path\":\"/zh/category/%E9%A2%98%E8%A7%A3/\",\"indexes\":[19]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"disable\":{\"path\":\"/tag/disable/\",\"indexes\":[1]},\"encryption\":{\"path\":\"/tag/encryption/\",\"indexes\":[2]},\"Layout\":{\"path\":\"/tag/layout/\",\"indexes\":[3]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[4]},\"Page config\":{\"path\":\"/tag/page-config/\",\"indexes\":[0]},\"Guide\":{\"path\":\"/tag/guide/\",\"indexes\":[0]},\"red\":{\"path\":\"/tag/red/\",\"indexes\":[8,7,6,11,12,14,15]},\"small\":{\"path\":\"/tag/small/\",\"indexes\":[8,6]},\"round\":{\"path\":\"/tag/round/\",\"indexes\":[6,11,12,14,15]},\"big\":{\"path\":\"/tag/big/\",\"indexes\":[7,11,12,14,15]},\"教程\":{\"path\":\"/tag/%E6%95%99%E7%A8%8B/\",\"indexes\":[13]},\"yellow\":{\"path\":\"/tag/yellow/\",\"indexes\":[16,17,9,10]},\"curly\":{\"path\":\"/tag/curly/\",\"indexes\":[16,17,9,10]},\"long\":{\"path\":\"/tag/long/\",\"indexes\":[16,17,9,10]}}},\"/zh/\":{\"path\":\"/zh/tag/\",\"map\":{\"教程\":{\"path\":\"/zh/tag/%E6%95%99%E7%A8%8B/\",\"indexes\":[18]},\"题解\":{\"path\":\"/zh/tag/%E9%A2%98%E8%A7%A3/\",\"indexes\":[19]},\"测试\":{\"path\":\"/zh/tag/%E6%B5%8B%E8%AF%95/\",\"indexes\":[19]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

