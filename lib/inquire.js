const inquirer = require('inquirer');
const { inquirerOption } = require('./config');

function handleInquirer() {
  const prompt = inquirer.createPromptModule();
  prompt(inquirerOption).then(answers => {
    console.log(answers);
  });
};

module.exports = function inquire() {
  // 处理用户的选择
  handleInquirer();
};