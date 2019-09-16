import articleConfig from './data/data';

const path = require('path');
// 设置分页路由
function setPageArticle(type) {
    const result = [];
    let detailResult = [];
    const { totalPage, files } = articleConfig.data[type];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPage; i++) {
        result.push(`/page/${type}/${i}`);
    }
    detailResult = files.map(name => `/detail/${type}/${name}`);
    return result.concat(detailResult);
}
const articleRoute = Object.keys(articleConfig.data).reduce(
    (acc, item) => acc.concat(setPageArticle(item)),
    [],
);
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
    less: {
        javascriptEnabled: true,
    },
    build: {
        extend(config) {
            config.module.rules.push({
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                include: path.resolve(__dirname, 'static'),
            });
        },
        loaders: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    /*
   ** Plugins to load before mounting the App
   */
    plugins: ['@/plugins/iview'],

    /*
   ** Nuxt.js modules
   */
    modules: ['@nuxtjs/pwa'],
    // modules: ['@nuxtjs/pwa', '@nuxtjs/markdownit'],
    markdownit: {
        injected: true,
    },
    generate: {
        routes: articleRoute,
    },
};
