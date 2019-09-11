const fs = require('fs');
const path = require('path');

const blogFolder = './static/article';
const jsonPath = './data/data.js';

const jsonObj = {};

function dealType(dirName) {
    const filePath = path.join(blogFolder, dirName);
    jsonObj[dirName] = {};
    return new Promise((resolve) => {
        fs.readdir(filePath, (_err, files) => {
            jsonObj[dirName].total = files.length;
            jsonObj[dirName].files = files.map(item => path.basename(item, '.md'));
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
