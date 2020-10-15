// import markdownIt from 'markdown-it'

// const md = markdownIt({
//   html: true,
//   linkify: true,
//   typographer: true
// })

const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Stay-At-Home-Mom to the DOM',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { property: 'og:title', content: 'Stay At Home Mom to the Dom' },
      {
        property: 'og:description',
        content: pkg.description
      },
      { property: 'og:image', content: 'https://sahmtothedom.com/home.png' },
      { property: 'og:url', content: 'https://sahmtothedom.com' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/apple-touch-icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',
        integrity:
          'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
  //  extend(config, ctx) {
  //   config.module.rules.push({
  //     test: /\.md$/,
  //     loader: 'frontmatter-markdown-loader',
  //     options: {
  //       markdown: (body) => md.render(body)
  //     }
  //   })
  // }
   
  }
}
