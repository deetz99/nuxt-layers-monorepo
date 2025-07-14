export default defineAppConfig({
  myLayer: {
    name: 'Hello from Nuxt layer NEW AGAIN x 5!!'
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
