// 语义化输出 node
const semver = require('semver');
const { warning } = require('./console');
/**
 * 
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

module.exports = {
  checkNodeVersion
}