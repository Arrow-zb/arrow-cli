const { promisify } = require('util');
const figlet = promisify(require('figlet'));
// 清空命令行
const clear = require('clear');
const { logger } = require('./utils/console');

function welcome() {
  return new Promise(async resolve => {
    // 打印欢迎界面
    clear();
    const data = await figlet("WELCOME", {
      font: 'Standard',
      horizontalLayout: 'full',
      verticalLayout: 'full'
    });
    logger(data);
    resolve();
  })
}

module.exports = welcome 