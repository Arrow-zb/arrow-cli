const inquirer = require('inquirer');
const { inquirerOption, templateRepoUrl } = require('./config');
const { downloadFromGitSeparately } = require('./utils/downloadFromGit');

function handleInquirer() {
  const prompt = inquirer.createPromptModule();
  prompt(inquirerOption).then(answers => {
    const template = `${answers.basicFrameType}-${answers.JSorTS}`
    downloadFromGitSeparately(templateRepoUrl, template, 'a')
  });
};

module.exports = function inquire() {
  // 处理用户的选择
  handleInquirer();
};