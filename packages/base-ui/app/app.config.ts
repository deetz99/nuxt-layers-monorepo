export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer NEW AGAIN x 19!!'
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
