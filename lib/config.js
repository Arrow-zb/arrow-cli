const config = {
  npmVersionUrl: "https://registry.npmjs.org/@arrow-zb/cli/latest",
  templateRepoUrl:"https://github.com/Arrow-zb/cli-template.git",
  inquirerOption: [
    {
      name: 'basicFrameType',
      type: 'list',
      message: 'Which basic framework do you want to choose!',
      choices: [
        { name: 'Vue2.x', value: 'vue2' },
        { name: 'Vue3.x', value: 'vue3' },
        { name: 'React15.x', value: 'react15' },
        { name: 'React16.x', value: 'react16' },
        { name: 'Koa2', value: 'koa2' }
      ],
      default: 'vue2'
    }, 
    {
      name: 'JSorTS',
      type: 'list',
      message: 'JS or TS',
      choices: [
        { name: 'JS', value: 'js' },
        { name: 'TS', value: 'ts' }
      ],
      default: 'js'
    }
  ]
};

module.exports = config