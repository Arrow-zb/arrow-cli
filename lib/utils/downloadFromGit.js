// 从 git 上拉取 template 到本地，这个先把功能写到这里
// 因为目前来说还是打算直接将 template 放到 cli 

const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
// 进度条
const ora = require('ora');

/**
 * 
 * @param {*} repo git 地址
 * @param {*} desc 下载的目录
 */
async function downloadFromGit (repo, desc) {
  const process = ora(`downloading ${repo}`);
  process.start();
  await download(repo, desc);
  process.succeed();
};

module.exports = downloadFromGit;