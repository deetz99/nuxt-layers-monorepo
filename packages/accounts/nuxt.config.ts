// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from 'nuxt/kit'
const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  compatibilityDate: '2025-06-10',

  extends: ['@dwol/base-layer'],

  css: [
    resolve('./app/assets/css/tw-accounts.css')
  ]
})
