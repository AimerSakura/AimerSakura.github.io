export const typesMap = JSON.parse("{\"article\":{\"/\":{\"path\":\"/article/\",\"indexes\":[13,0,8,7,6,16,17,9,10,11,12,14,15,20,1,2,3,4,5]},\"/zh/\":{\"path\":\"/zh/article/\",\"indexes\":[18,19,21]}},\"star\":{\"/\":{\"path\":\"/star/\",\"indexes\":[9,13,14,0]},\"/zh/\":{\"path\":\"/zh/star/\",\"indexes\":[18,19]}},\"timeline\":{\"/\":{\"path\":\"/timeline/\",\"indexes\":[13,8,7,6,16,17,9,10,11,12,14,15,0]},\"/zh/\":{\"path\":\"/zh/timeline/\",\"indexes\":[18,19]}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

