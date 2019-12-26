const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const mdLoader = require('frontmatter-markdown-loader');
const pagination = require('./pagination');

const blogFolder = './docs/blog';
const weeklyFolder = './docs/weekly';

let config = {};
const indexData = {};
const stringify = src => JSON.stringify(src, null, 4)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
try {
    config = yaml.safeLoad(fs.readFileSync('_config1.yml', 'utf8'));
} catch (e) {
    console.log(e);
}
function transDate(date) {
    const dataArr = date.split('-');
    let year = '';
    let day = '';
    let month = '';
    const monthObj = {
        '01': 'Jan.',
        '02': 'Feb.',
        '03': 'Mar.',
        '04': 'Apr.',
        '05': 'May.',
        '06': 'Jun.',
        '07': 'Jul.',
        '08': 'Aug.',
        '09': 'Sept.',
        10: 'Oct.',
        11: 'Nov.',
        12: 'Dec.',
    };
    try {
        month = monthObj[dataArr[1]];
        [year, , day] = dataArr;
    } catch (e) {
        console.log(e);
    }
    return `${month} ${year} ${day}`;
}
function loaderFile(filePath, fileName) {
    const file = fs.readFileSync(`${filePath}/${fileName}`, 'utf-8');
    let content = null;
    try {
    // eslint-disable-next-line no-eval
        content = eval(mdLoader(file)).attributes;
        if (content.date) {
            content.enDate = transDate(content.date);
        }
    } catch (e) {
        console.log(e);
    }
    return content;
}
function makeData(folder, name) {
    const filePath = path.join(folder, name);
    const filesName = fs.readdirSync(filePath);
    const allFiles = filesName
        .map(item => loaderFile(filePath, item))
        .filter(item => !!item);
    return allFiles;
}
function sortData(files) {
    // 排序
    files.sort((a, b) => {
        const timeA = new Date(a.date).getTime();
        const timeB = new Date(b.date).getTime();
        return timeB - timeA;
    });
    return files;
}
// blog
function getBlog() {
    const blogData = {};
    let allBlog = [];
    const paginationDir = config.blog_category || [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = paginationDir.length; i < len; i++) {
        const dirName = paginationDir[i];
        blogData[dirName] = makeData(blogFolder, dirName);
        allBlog = allBlog.concat(blogData[dirName]);
    }
    blogData.all = allBlog;
    return blogData;
}
function generateBlog() {
    const blogData = getBlog();
    const blogResult = {};
    const keys = Object.keys(blogData);
    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = keys.length; i < len; i++) {
        const key = keys[i];
        blogResult[key] = pagination(sortData(blogData[key]), config);
    }
    indexData.blogData = pagination(blogData.all, {
        perPage: config.index_blog_perpage,
    });
    return blogResult;
}
// weekly
function generateWeekly() {
    const weekly = {};
    let allWeekly = [];
    const paginationDir = config.weekly_category || [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = paginationDir.length; i < len; i++) {
        const dirName = paginationDir[i];
        weekly[dirName] = sortData(makeData(weeklyFolder, dirName));
        allWeekly = allWeekly.concat(weekly[dirName]);
    }
    indexData.weeklyData = sortData(allWeekly).slice(0, config.index_weekly_num);
    return weekly;
}

function writeDocConfig(content) {
    return new Promise((resolve) => {
        fs.writeFile(config.docConfigDir, content, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('write end');
                resolve();
            }
        });
    });
}

function generate() {
    const content = {
        blogCategoryData: {},
        blogCategory: [],
        weeklyData: {},
        weeklyCategory: [],
        indexData,
    };
    content.blogCategoryData = generateBlog();
    content.blogCategory = ['all', ...config.blog_category];
    content.weeklyCategory = config.weekly_category || [];
    content.weeklyData = generateWeekly();
    return `/* eslint-disable */\nexport default ${stringify(content)}`;
}
async function getDocData() {
    const later = await writeDocConfig(generate());
    return later;
}
// getDocData();
module.exports = getDocData;
