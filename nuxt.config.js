const path = require('path');
const getDocData = require('./server/docData');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

getDocData();
// 设置路由
function blogRoute(category, docConfig) {
    const config = docConfig.blogCategoryData[category];
    let detailResult = [];
    const pageResult = [];
    const totalPage = config.length > 0 ? config.length : 1;
    const docs = config.reduce((acc, item) => acc.concat(item.data.posts), []);
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= totalPage; i++) {
        pageResult.push(`/blog/${category}/${i}`);
    }
    detailResult = docs.map(item => `/blogdetail/${category}/${item.name}`);
    return pageResult.concat(detailResult);
}
function setBlogRoute(docConfig) {
    let result = [];
    const category = docConfig.blogCategory || [];
    result = category.reduce(
        (acc, item) => acc.concat(blogRoute(item, docConfig)),
        [],
    );
    return result;
}
function setWeeklyRoute(docConfig) {
    let result = [];
    const category = docConfig.weeklyCategory || [];
    result = category.reduce((acc, item) => {
        const docs = docConfig.weeklyData[item];
        let route = [];
        route = docs.map(item => `/weeklydetail/${category}/${item.name}`);
        route.push(`/weekly/${item}`);
        return route;
    }, []);
    return result;
}

async function setDocRoute() {
    const docConfig = await import('./data/testConfig.js');
    const blogRoute = setBlogRoute(docConfig.default);
    const weeklyRoute = setWeeklyRoute(docConfig.default);
    const result = blogRoute.concat(weeklyRoute);
    return result;
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
    css: ['@/assets/css/main.less'],
    less: {
        javascriptEnabled: true,
    },
    build: {
        extend(config) {
            config.module.rules.push(
                {
                    test: /\.md$/,
                    loader: 'frontmatter-markdown-loader',
                    include: path.resolve(__dirname, 'docs'),
                },
                {
                    test: /\.pdf$/,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'dist/pdf',
                        publicPath: './pdf',
                    },
                    include: path.resolve(__dirname, 'docs'),
                },
            );
            // config.plugins.push(
            //     new CopyWebpackPlugin([
            //         { from: path.resolve(__dirname, 'docs/images'), to: './static/' },
            //     ],{ignore: [],
            //         copyUnmodified: true}));
            return config;
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
        routes: setDocRoute,
    },
};
