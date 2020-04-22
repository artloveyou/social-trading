import colors from 'vuetify/es5/util/colors'

export default {
  router: {
    base: '/social-trading/'
  },
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#14c9ff' },
  /*
  ** Global CSS
  */
  css: [
    '~/css/main.css',
    // '~/css/aos.css',
    'aos/dist/aos.css',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/aos.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [

    // With options
    ['fullpage-nuxt', {
    /* module options */
      animate: true
  }],
    // Simple usage
    // 'fullpage-nuxt',

    //'vue-scrollto/nuxt',
    // Or if you have custom options...
    ['vue-scrollto/nuxt', { duration: 300 }],

  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
