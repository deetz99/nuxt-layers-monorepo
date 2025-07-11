export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer TESTING PKG PR NEW TRY PNPM'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string
    }
  }
}
