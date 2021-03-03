const { Command } = require('commander');
const program = new Command();

const package = require('../package.json');
const welcome = require('./welcome');
const { checkNodeVersion } = require('./utils/check');

function handleProgram () {
  // 版本 arrow-cli --version -V
  program.version(package.version)
    .usage('<command> [options]');
  
  
  // 执行
  program.parse(process.argv);
};

module.exports = function initialization() {
  // 检查 node 版本是否满足
  checkNodeVersion(package.engines.node, package.name)
  // commander 配置
  handleProgram()
};
