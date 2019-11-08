const fs = require('fs');
const path = require('path');

const blogFolder = './datas';
const jsonPath = './data/data.js';
const pageSize = 5; // 每页分页

const jsonObj = {};

function dealType(dirName) {
    if (dirName === 'pdf') return;
    const filePath = path.join(blogFolder, dirName);
    jsonObj[dirName] = {};
    const files = fs.readdirSync(filePath);
    jsonObj[dirName].total = files.length;
    jsonObj[dirName].pageSize = pageSize;
    jsonObj[dirName].totalPage = Math.ceil(jsonObj[dirName].total / pageSize) || 1;
    jsonObj[dirName].files = files.map(item => path.basename(item, '.md'));
}

function readFile() {
    return new Promise((resolve) => {
        fs.readdir(blogFolder, (_err, files) => {
            files.map(file => dealType(file));
            resolve();
        });
    });
}

function wirteData() {
    const content = `export default {data : ${JSON.stringify(jsonObj)}}`;
    return new Promise((resolve) => {
        fs.writeFile(jsonPath, content, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('write end');
                resolve();
            }
        });
    });
}

async function start() {
    await readFile();
    const later = await wirteData();
    return later;
}

module.exports = start;
