const fs = require('fs');
const path = require('path');

const blogFolder = './static/article';
const jsonPath = './data/data.js';
const pageSize = 5; // 每页分页

const jsonObj = {};

function dealType(dirName) {
    const filePath = path.join(blogFolder, dirName);
    jsonObj[dirName] = {};
    return new Promise((resolve) => {
        fs.readdir(filePath, (_err, files) => {
            jsonObj[dirName].total = files.length;
            jsonObj[dirName].files = files.map(item => path.basename(item, '.md'));
            jsonObj[dirName].pageSize = pageSize;
            jsonObj[dirName].totalPage = Math.ceil(jsonObj[dirName].total / pageSize) || 1;
            resolve();
        });
    });
}
function wirteJson() {
    const content = `export default {data : ${JSON.stringify(jsonObj)}}`;
    fs.writeFile(jsonPath, content, (err) => {
        console.log(err);
    });
}

function readStart() {
    let result = [];
    new Promise((resolve) => {
        fs.readdir(blogFolder, (_err, files) => {
            result = files.map(file => dealType(file));
            resolve();
        });
    }).then(() => {
        Promise.all(result).then(() => {
            wirteJson();
        });
    });
}
module.exports = readStart;
