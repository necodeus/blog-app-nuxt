export default defineNuxtConfig({
  css: [
      '@/assets/css/main.css',
  ],

  components: [
      {
          path: '~/components',
          pathPrefix: false,
      },
      {
          path: '~/views',
          pathPrefix: false,
      },
  ],

  plugins: [
      '~/plugins/observe-visibility.ts',
  ],

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/partytown', '@pinia/nuxt'],
  pages: true,

  vite: {
      ssr: {
          noExternal: ["moment"],
      },
  },

  runtimeConfig: {
      public: {
          'BLOG_API_URL': 'https://blog-api.necodeo.com/api',
          'IMAGES_URL': 'http://images.localhost',
          'WEBSOCKET_SESSION_HOST': 'localhost', // necodeo.com
          'WEBSOCKET_ADDRESS': 'ws://localhost:8090', // wss://www.necodeo.com:8090
      }
  },

  experimental: {
      watcher: 'parcel',
  },

  app: {
      head: {
          htmlAttrs: {
              lang: 'pl',
          },
          viewport: 'width=device-width, initial-scale=1',
          charset: 'utf-8',
          script: [
              {
                  hid: 'adsbygoogle-script',
                  src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-google6',
                  async: true,
                  'data-ad-client': 'ca-google',
              },
              {
                  hid: 'gtag-script',
                  type: 'text/partytown',
                  src: 'https://www.googletagmanager.com/gtag/js?id=G-3YWVF3BMB',
                  async: true,
              },
              {
                  hid: 'gtag-inner-script',
                  innerHTML: `
                      window.dataLayer = window.dataLayer || []

                      function gtag() {
                          dataLayer.push(arguments)
                      }

                      gtag('js', new Date())
                      gtag('config', 'G-3YWVF3BMBM')
                  `,
              },
          ],
          link: [
              {
                  href: '/icons/apple-touch-icon.png',
                  rel: 'apple-touch-icon',
              },
              {
                  href: '/manifest.json',
                  rel: 'manifest',
              },
              {
                  href: '//fonts.googleapis.com',
                  rel: 'preconnect',
              },
              {
                  href: '//fonts.googleapis.com',
                  rel: 'dns-prefetch',
              },
          ],
      },
  },

  compatibilityDate: '2025-01-18',
})