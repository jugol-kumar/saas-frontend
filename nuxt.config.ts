// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['/assets/css/app.css'],
  devtools: {enabled: true},
  modules: [
      'nuxt-icon',
      'usebootstrap'
  ],
  plugins: ['~/plugins/bootstrap.js',],
  app: {
    head:{
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",

        }
        // {
        //   src:"/assets/theme.min.js",
        //   body: true,
        //   defer: true,
        //   type: 'text/javascript'
        // },
        // {
        //   src:"/assets/bootstrap/js/bootstrap.min.js",
        //   body: true,
        //   defer: true,
        //   type: 'text/javascript'
        // },
        // {
        //   src:"/assets/bootstrap/js/bootstrap.bundle.min.js",
        //   body: true,
        //   defer: true,
        //   type: 'text/javascript'
        // },
        // {
        //   src:"/assets/popperjs/js/popper.min.js",
        //   body: true,
        //   defer: true,
        //   type: 'text/javascript'
        // },
      ]
    }
  },
});
