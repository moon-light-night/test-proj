module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/profile/main.scss"; ',
      },
    },
  },
}
