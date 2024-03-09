// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "dayjs-nuxt",
    "vuetify-nuxt-module",
    "@nuxt/image",
    "nuxt-snackbar",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
    "nuxt-api-party"
  ],
  apiParty: {
    endpoints: {
      some_name_api: {
        url: "<url-api-endpoint>"
      }
    }
  }
})
