const fse = require('fs-extra');

async function copyFiles(from, to) {
    try {
        await fse.copy(from, to);
        console.log('success!');
    } catch (err) {
        console.error(err);
    }
}
copyFiles('./docs/static/images', './static/images');
