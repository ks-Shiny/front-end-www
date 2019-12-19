const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const mdLoader = require('frontmatter-markdown-loader');
const pagination = require('./pagination');

const blogFolder = './datas';

let config = {};
const stringify = src => JSON.stringify(src, null, 4)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
try {
    config = yaml.safeLoad(fs.readFileSync('_config.yml', 'utf8'));
} catch (e) {
    console.log(e);
}

function generate() {
    const output = {};
    const paginationDir = config.pagination_dir || [];
    function loaderFile(filePath, fileName) {
        const file = fs.readFileSync(`${filePath}/${fileName}`, 'utf-8');
        let content = null;
        try {
            // eslint-disable-next-line no-eval
            content = eval(mdLoader(file)).attributes;
        } catch (e) {
            console.log(e);
        }
        return content;
    }

    function makeData(name) {
        const filePath = path.join(blogFolder, name);
        const filesName = fs.readdirSync(filePath);
        const allFiles = filesName
            .map(item => loaderFile(filePath, item))
            .filter(item => !!item);
        let result = [];

        // 排序
        allFiles.sort((a, b) => {
            const timeA = new Date(a.date).getTime();
            const timeB = new Date(b.date).getTime();
            return timeB - timeA;
        });

        if (!allFiles.length) return;

        result = pagination(allFiles, config);
        // eslint-disable-next-line consistent-return
        return result;
    }
    output.docType = paginationDir;
    // eslint-disable-next-line no-plusplus
    for (let i = 0, len = paginationDir.length; i < len; i++) {
        const dirName = paginationDir[i];
        output[dirName] = makeData(dirName);
    }
    return `/* eslint-disable */\nexport default ${stringify(output)}`;
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
async function getDocData() {
    const later = await writeDocConfig(generate());
    return later;
}
module.exports = getDocData;
