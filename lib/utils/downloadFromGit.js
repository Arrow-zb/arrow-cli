// 从 git 上拉取 template 到本地，这个先把功能写到这里
// 因为目前来说还是打算直接将 template 放到 cli 

const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
// 进度条
const ora = require('ora');

// 执行 shell 脚本
const { exec } = require('shelljs');
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

function shell(repo, template, desc) {
  return `
    git init ${desc} && 
    cd ${desc} &&    
    git config core.sparsecheckout true &&
    echo 'packages/${template}' >> .git/info/sparse-checkout &&
    git remote add origin ${repo} &&
    git pull origin master &&
    cp -r packages/${template}/* ./ &&
    rm -rf packages
  `
}

async function downloadFromGitSeparately (repo, template, desc) {
  exec(shell(repo, template, desc), (code, stdout, stderr) => {
    console.log('Exit code:', code);
    console.log('Program output:', stdout);
    console.log('Program stderr:', stderr);
  })
};

module.exports = {
  downloadFromGit,
  downloadFromGitSeparately
};