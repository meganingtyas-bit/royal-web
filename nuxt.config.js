
const bodyParser = require('body-parser')

module.exports = {

  mode: 'universal',
  // universal | spa
  env: {
    mainTitle: 'COFFEE ROYAL COMMUNITY',
  },

  router: {
    middleware: ['mwGlobal', 'mwContent']
  },

  /*
  ** Headers of the page
  */
  head: {
    title: process.env.mainTitle || 'COFFE ROYAL COMMUNITY',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Portal komunitas pelaku & penggiat dunia kopi Indonesia' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  // loading: {
  //   color: 'red',
  //   height: '5px'
  // },
  loading: '~/components/utils/Loading.vue',
  /*
  ** Global CSS
  */
  css: [
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  /*
  ** Plugins to load before mounting the App
   mode: 'server' |  mode: 'client'
  */
  plugins: [
    '~plugins/convert.js',
    '~/plugins/lightGallery.client.js',
    { src: '~/plugins/system' },
    { src: '~/plugins/firebase' },
    { src: '~/plugins/vue-carousel', mode: 'client', ssr: false },
    { src: '~/plugins/clientVue', mode: 'client', ssr: false },
    { src: '~/plugins/vee-validate.js', ssr: true },
    { src: '~plugins/nuxt-quill.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  moment: {
    locales: ['id']
  },
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    'cookie-universal-nuxt',
    '@nuxtjs/moment',
    '@nuxtjs/axios',


  ],
  serverMiddleware: [
    // body-parser middleware
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),

    // Api middleware
    // We add /api/login & /api/logout routes
    // '~/serverMiddleware/smAuth.js'
    '~/api/index.js'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */

  build: {
    /*
    ** You can extend webpack config here
    */
    extractCSS: true,
    extend(config, ctx) {

    }
  }
}

