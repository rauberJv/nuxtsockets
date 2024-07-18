// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  nitro: {
    experimental: {
      websocket: true
    },
  },
  devtools: { enabled: true },
  app: {
    // global transition
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  // typescripts
  typescript: {
    strict: true,
    typeCheck: true,
  },

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    "@nuxtjs/tailwindcss",
    'nuxt-headlessui',
    '@nuxtjs/eslint-module',
    '@nuxt/eslint',
    '@nuxtjs/device',
    "@nuxtjs/sitemap",
    "nuxt-simple-robots",
    // '@nuxtjs/supabase'
  ],

  // module::headlessui
  headlessui: {
    prefix: 'Headless',
  },
})