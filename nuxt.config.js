const path = require('path');
const getDocData = require('./server/getDocData');

getDocData();
// 设置路由
function makePageRoute(type, config) {
    const result = [];
    let detailResult = [];
    const totalPage = config[type].length;
    const docs = config[type].reduce((acc, item) => acc.concat(item.data.posts));
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPage; i++) {
        result.push(`/page/${type}/${i}`);
    }
    detailResult = docs.map(name => `/detail/${type}/${name}`);
    return result.concat(detailResult);
}
async function getDocRoute() {
    const docConfig = await import('./data/docConfig.js');
    const docRoute = docConfig.docType.reduce(
        (acc, item) => acc.concat(makePageRoute(item, docConfig)),
        [],
    );
    return docRoute;
}

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
    css: ['iview/dist/styles/iview.css', '@/assets/css/main.less'],
    less: {
        javascriptEnabled: true,
    },
    build: {
        extend(config) {
            config.module.rules.push(
                {
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    include: path.resolve(__dirname, 'datas'),
                },
                {
                    test: /\.pdf$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'dist/pdf',
                        publicPath: './pdf',
                    },
                    include: path.resolve(__dirname, 'datas'),
                },
            );
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
    modules: ['@nuxtjs/pwa', '@nuxtjs/style-resources'],
    // modules: ['@nuxtjs/pwa', '@nuxtjs/markdownit'],
    // markdownit: {
    //     injected: true,
    // },
    styleResources: {
        less: ['./assets/css/utilities/_variables.less'],
    },
    generate: {
        routes: getDocRoute,
    },
};
