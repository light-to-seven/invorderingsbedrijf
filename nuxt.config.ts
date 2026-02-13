export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxt/image'],
  icon: {
    mode: 'svg',
    cssLayer: 'components',
    customCollections: [
      {
        prefix: 'custom-icon',
        dir: './app/assets/icons',
      },
    ],
  },
  css: [
    'normalize.css/normalize.css',
    '~/assets/css/main.scss'
  ],
  fonts: {
    families: [
      {
        name: 'Roboto',
        provider: 'google',
        weights: [300, 400, 500, 700], // light, regular, medium, bold
        styles: ['italic', 'normal']
      }
    ]
  }
})