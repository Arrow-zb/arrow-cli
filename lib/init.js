const clear = require('clear');
const { Command } = require('commander');
const program = new Command();

const package = require('../package.json');
const welcome = require('./welcome');
const { checkNodeVersion, hasDir, checkCliVersion } = require('./utils/check');
const config = require('./config');

function handleProgram () {
  // 版本 paopao-cli --version -V
  program.version(package.version)
    .usage('<command> [options]');
  
  // 脚手架命令
  program
    .command('create <app-name>')
    .description('create a new project by paopao-cli')
    .action(async (name,cmd) => {
      // 检查 name 文件夹是否存在
      await hasDir(name);
      clear();

      // 检查 paopao-cli 版本
      await checkCliVersion(config.npmVersionUrl, package.version);

      // 开始询问用户
      
    })
  // 执行
  program.parse(process.argv);
};

module.exports = function initialization() {
  // 检查 node 版本是否满足
  checkNodeVersion(package.engines.node, package.name)
  // commander 配置
  handleProgram()
};
