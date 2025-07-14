export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer ACCOUNTS!! x2'
  }
})

declare module '@nuxt/schema' {
  interface AppConfigInput {
    // myLayer?: {
    //   /** Project name */
    //   name?: string
    // }
  }
}
