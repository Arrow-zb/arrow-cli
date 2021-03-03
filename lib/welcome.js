const { promisify } = require('util');
const figlet = promisify(require('figlet'));
// 清空命令行
const clear = require('clear');
const { logger } = require('./utils/console');

module.exports = async () => {
  // 打印欢迎界面
  clear();
  const data = await figlet("WELCOME ARROW-CLI");
  logger(data)
};