# TypeScript 是什么
> TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

TypeScript 添加了可选的静态类型和基于类的面向对象编程
JavaScript 是基于原型继承的语言

## TypeScript 与 JavaScript 的区别
|TypeScript|JavaScript|
|:---:|:---:|
|JavaScript 的超集，适用于大型复杂的项目|一种脚本语言，用于创建动态网页|
|可以在编译期间发现并纠正错误|作为一种解释型语言，只能在运行时发现错误|
|强类型，支持静态和动态类型|弱类型，没有静态类型选项|
|最终被编译成 JavaScript 代码，使浏览器可以理解|可以直接在浏览器中使用|
|支持模块、泛型和接口|不支持模块，泛型或接口|

## 获取 TypeScript
```bash
npm install -g typescript

# 验证版本
tsc -v

# 编译 ts 文件
tsc *.ts

```

## 典型 TypeScript 工作流程
1. 将不同的 ts 文件**编译**成对应的 js 文件
2. 将对应的 js 文件**打包**成入口文件 main.js
3. 将 main.js 部署到项目文件中

## TypeScript 初体验
```ts
// first.ts
function greet(name: string) {
    return `Hello, ${name}`
}

console.log(greet('lj'))
```
通过执行 `ts first.ts` 命令，生成 `first.js`
```js
// first.js
"use strict"
function greet(name) {
    return `Hello, ${name}`
}
console.log(greet('lj'))
```

## TypeScript 开发辅助工具

1. [TypeScript Playground](https://www.typescriptlang.org/play/) TypeScript 官方提供的在线 TypeScript 运行环境。

2. [TypeScript UML Playground](https://tsuml-demo.firebaseapp.com/) 一款在线 TypeScript UML 工具，利用它你可以为指定的 TypeScript 代码生成 UML 类图。

3. [JSON TO TS](http://www.jsontots.com/) 一款 TypeScript 在线工具，利用它你可以为指定的 JSON 数据生成对应的 TypeScript 接口定义。

4. [Schemats](https://github.com/SweetIQ/schemats) 利用 Schemats，你可以基于（Postgres，MySQL）SQL 数据库中的 schema 自动生成 TypeScript 接口定义。

5. [TypeScript AST Viewer](https://ts-ast-viewer.com/) 一款 TypeScript AST 在线工具，利用它你可以查看指定 TypeScript 代码对应的 AST（Abstract Syntax Tree）抽象语法树。

6. [TypeDoc](https://typedoc.org/) TypeDoc 用于将 TypeScript 源代码中的注释转换为 HTML 文档或 JSON 模型。它可灵活扩展，并支持多种配置。

7. [TypeScript ESLint](https://typescript-eslint.io/) 使用 TypeScript ESLint 可以帮助我们规范代码质量，提高团队开发效率。