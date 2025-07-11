export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer USING PKG PR NEW'
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
