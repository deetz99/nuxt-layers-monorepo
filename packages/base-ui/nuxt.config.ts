// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)
export default defineNuxtConfig({
  ssr: false,

  devtools: { enabled: false },

  modules: ['@nuxt/ui'],

  alias: {
    'BCGovFonts': resolve('./public/fonts/BCSans'),
    'BCGovLogoSmEn': resolve('./public/BCGovLogo/gov_bc_logo_vert_en.png'),
    'BCGovLogoSmFr': resolve('./public/BCGovLogo/gov_bc_logo_vert_fr.png'),
    'BCGovLogoLgEn': resolve('./public/BCGovLogo/gov_bc_logo_horiz_en.png'),
    'BCGovLogoLgFr': resolve('./public/BCGovLogo/gov_bc_logo_horiz_fr.png'),
    '#base': resolve('./')
  },

  css: [
    // resolve('./app/assets/css/core-main.css')
    // resolve('./app/assets/css/core-layout.css'),
    // resolve('./app/assets/css/core-tw.css')
  ],

  compatibilityDate: '2025-07-10'
})
