# eslint-config-codeclimate-default-checks

This package was created to reproduce [the default check items](https://docs.codeclimate.com/docs/maintainability#checks) of CodeClimate in ESLint.

## CodeClimate default checks and alternatives

- argument-count => https://eslint.org/docs/rules/max-params

- complex-logic => https://github.com/tomyam2020/eslint-plugin-complex-logic

- file-lines => https://eslint.org/docs/rules/max-lines

- method-complexity => https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/cognitive-complexity.md

- method-count => https://github.com/mawrkus/eslint-plugin-max-methods-per-class

- method-lines => https://eslint.org/docs/rules/max-lines-per-function

- nested-control-flow => https://eslint.org/docs/rules/max-depth

- return-statements => https://github.com/tomyam2020/eslint-plugin-max-return-statements-per-function

- similar-code => none

- identical-code => none

The thresholds for each rule are based on [this page](https://docs.codeclimate.com/docs/default-analysis-configuration#default-thresholds).

## Rules with no alternatives

No alternative rules were found for similar-code and identical-code. These check for similarity or duplication of code between multiple files, but since [this comment](https://github.com/eslint/eslint/issues/3957#issuecomment-143732581) says

> ESLint rules only operate on the context of a single file. So you won’t be able to detect duplicated code across multiple files.

and there does not seem to be a rule in ESLint to replace it completely, unfortunately there are no alternatives for these two items.

## Installation

### npm

```shell
npm install --save-dev eslint-plugin-complex-logic eslint-plugin-max-methods-per-class eslint-plugin-max-return-statements-per-function eslint-plugin-sonarjs eslint-config-codeclimate-default-checks
```

### yarn

```shell
yarn add -D eslint-plugin-complex-logic eslint-plugin-max-methods-per-class eslint-plugin-max-return-statements-per-function eslint-plugin-sonarjs eslint-config-codeclimate-default-checks
```

## Usage

in `.eslintrc.js`:

```js
module.exports = {
  extends: ["codeclimate-default-checks"],
  // other options...
};
```

## License

MIT
