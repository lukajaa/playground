// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: 'Lukajaa Nuxt Template'
    }
  },
  css: ['@/assets/styles/main.scss'],
  typescript: {
    strict: true
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    'nuxt-gtag',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      Inter: true
    }
  },
  colorMode: {
    classSuffix: ''
  },
  gtag: {
    id: 'G-QNLZ5NY7HH'
  }
})
