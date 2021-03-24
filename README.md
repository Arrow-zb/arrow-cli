# @arrow-zb/cli
It was originally planned to be named arrow cli. Unfortunately, it already exists in NPM, so it can only be named @ arrow-zb/cli。

This is a scaffold for quickly creating the front end project of Arrow.
You can choose the basic template you need. It will download the corresponding template for you, making your development project more agile, simpler, and more time devoted to the business rather than the basic framework.

English | [简体中文](./docs/README.zh-CN.md)

## install 
The latest LTS version of Node.js is recommended, or at least ensure node >= 8.0

There are serverl way to install it globally.

* Install with [npm](https://www.npmjs.com/package/@arrow-zb/cli): `npm install @arrow-zb/cli -g`

* Install with [Yarn](https://yarnpkg.com/package/@arrow-zb/cli): `yarn global add @arrow-zb/cli`

But it is recommended that you install it locally.
```shell
npm install @arrow-zb/cli -D 
#or
yarn add @arrow-zb/cli -D
```

When you are going to use it to create a project, it will automatically detect whether the current version is the latest version.If not, it needs to be updated。
```shell
npm update @arrow-zb/cli -D --latest
```

## arrow init
### create project
```shell
# globally install
@arrow-zb/cli create <app-name>
# locally install
npx @arrow-zb/cli create <app-name>
```

### other options
```shell
@arrow-zb/cli -V
```