'use strict';
const fs = require('fs');
const path = require('path');
const sh = require('shelljs');

module.exports = function renderAssets() {
    const sourcePath = path.resolve(path.dirname(__filename), '../src/assets');
    const destPath = path.resolve(path.dirname(__filename), '../dist/.');
    
    sh.cp('-R', sourcePath, destPath)

    const CNAMEPath = path.resolve(path.dirname(__filename), '../src/CNAME');
    const CNAMEDestPath = path.resolve(path.dirname(__filename), '../dist/.');
    
    console.log(`### INFO: cp ${CNAMEPath} to ${CNAMEDestPath}`);
    sh.cp(CNAMEPath, CNAMEDestPath)

    const indexmdPath = path.resolve(path.dirname(__filename), '../src/index.md');
    const indexmdDestPath = path.resolve(path.dirname(__filename), '../dist/.');
    
    console.log(`### INFO: cp ${indexmdPath} to ${indexmdDestPath}`);
    sh.cp(indexmdPath, indexmdDestPath)
};
