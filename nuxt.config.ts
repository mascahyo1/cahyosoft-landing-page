import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ["nitro-cloudflare-dev"],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },

  future: {
    compatibilityVersion: 4,
  },

  css: ['~/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.min.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  app: {
    head: {
      title: 'Cahyosoft - Jasa Development Web & Solusi ERP',
      htmlAttrs: {
        lang: 'id'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Cahyosoft menyediakan jasa konsultasi web, pengembangan web kustom, dan solusi ERP terlengkap (HRIS, Akunting, POS, Inventory, CRM) untuk bisnis Anda.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'alternate icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true
    }
  }
})