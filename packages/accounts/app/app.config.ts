export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer ACCOUNTS!!'
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
