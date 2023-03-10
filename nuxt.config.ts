// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL
  }
})
