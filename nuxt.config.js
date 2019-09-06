module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#13ff8f' },
    /*
     ** Global CSS
     */
    css: ['iview/dist/styles/iview.css'],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: ['@/plugins/iview'],

    /*
     ** Nuxt.js modules
     */
    modules: ['@nuxtjs/pwa', '@nuxtjs/markdownit'],
};
