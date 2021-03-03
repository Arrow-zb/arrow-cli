const chalk = require('chalk');

/**
 * @param {*} msg 
 */
function logger(msg) {
  console.log(chalk.green(msg)) 
};

/**
 * @param {*} msg 
 */
function warning(msg) {
  console.log(chalk.red(msg)) 
};

module.exports = { 
  logger,
  warning
}