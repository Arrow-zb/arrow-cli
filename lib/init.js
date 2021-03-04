const clear = require('clear');
const { Command } = require('commander');
const program = new Command();

const config = require('./config');
const welcome = require('./welcome');
const package = require('../package.json');
const { checkNodeVersion, hasDir, checkCliVersion } = require('./utils/check');
const inquire = require('./inquire');

function handleProgram () {
  // 版本 @arrow-zb/cli --version -V
  program.version(package.version)
    .usage('<command> [options]');
  
  // 脚手架命令
  program
    .command('create <app-name>')
    .description('create a new project by @arrow-zb/cli')
    .action(async (name, cmd) => {
      // 欢迎界面
      await welcome();
      // 检查 name 文件夹是否存在
      await hasDir(name);
      // 检查 @arrow-zb/cli 版本
      await checkCliVersion(config.npmVersionUrl, package.version);
      // 开始询问用户
      inquire();
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
