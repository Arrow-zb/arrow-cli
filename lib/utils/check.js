const fs = require('fs');
const path = require('path');
const request = require('request');
const Ora = require('ora');
const spinner = new Ora();

// 语义化输出 node
const semver = require('semver');
const { warning } = require('./console');
/**
 * 检查 node 版本是否满足需求
 * @param {*} need 需要的 node 版本
 * @param {*} projectName 项目名称
 */
function checkNodeVersion (need, projectName) {
  const nowNodeVersion = process.version;
  if(!semver.satisfies(nowNodeVersion, need)) {
    warning(`You are using Node:${nowNodeVersion}, but the minimum version of Node required for ${projectName} is ${need}\n`);
    process.exit(1);
  }
};

/**
 * 检查目录是否存在
 * @param {*} dir 
 */
function hasDir(dir) {
  return new Promise((resolve, reject) => {
    fs.stat(path.resolve(dir), (err, stats) => {
      if(err) {
        resolve();
      }else{
        // todo 这里询问用户是否仍然使用此文件名
        if(stats.isDirectory()) {
          warning(`The ${dir} folder already exists in the current directory. Please try another project name!`);
          process.exit(1);
        }else {
          resolve();
        }
      }
    })
  })
};

/**
 * 检查脚手架是否为最新版本，这里为什么要检查，有以下两个原因
 * 1. 目前 template 放置于 cli 中，因此 tem 中会有更新    其实这样做很不好
 * 2. 脚手架更新
 * @param {*} url 
 * @param nowVersion 当前 cli 版本 
 */
function checkCliVersion(url, nowVersion) {
  return new Promise((resolve, reject) => {
    spinner.start('Checking paopao-cli version');
    request(url, function(err, res, body) {
      if(!err && res.statusCode === 200) {
        const version = JSON.parse(body).version;
        if(semver.lte(version, nowVersion)) {
          spinner.stop();
          resolve();
        }else {
          spinner.stop();
          warning(`You are creating a new project by paopao-cli, but the latest version is v${version}. \nPlease urgade your paopao-cli version.\n\n>> npm update paopao-cli -g`);
          process.exit(1);
        }
      }else {
        spinner.clear();
        warning('Failed to obtain the paopao-cli version from NPM. Please check and try again!');
        reject(err);
        process.exit(1);
      }
    })
  })
}

module.exports = {
  checkNodeVersion,
  hasDir,
  checkCliVersion
}