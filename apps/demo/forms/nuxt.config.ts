// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  future: {
    compatibilityVersion: 4
  },
  modules: [
    '@nuxt/eslint'
  ],
  extends: ['@dwol/forms-layer']
})
