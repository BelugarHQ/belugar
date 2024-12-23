// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['nuxtjs-naive-ui', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt',],

  ssr:true,

  // debug: true, 

  srcDir: "src",
  css: ['~/assets/css/main.css'],


  // modules: ['nuxtjs-naive-ui'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['vueuc'],
  },

 


  // nitro: {
  //   prerender: {
  //     crawlLinks: true,
  //     routes: ['/'],
  //     failOnError: false,
  //     ignore: ['/404', '/200'], // Ignore these routes
  //   },
  // },


  


  // nitro: {
  //   prerender: {
  //     routes: ['/404', '/200'],
  //   },
  // },


  // nitro: {
  //   prerender: {
  //     ignore: ['/'], // Ignore the root route
  //   },
  // },

 
})