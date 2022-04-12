# Lint Web Accessibility

O Lint Web Acessibility é um linter capaz de ajudar a implementar diversas regras de acessibilidade, que garante o acesso a todas as pessoas, em especial, pessoas com deficiência, que muitas vezes acabam sendo impedidas de acessar conteúdos devido a barreiras de acesso.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-lint-web-acessibility`:

```sh
npm install eslint-plugin-lint-web-acessibility --save-dev
```

## Usage

Add `lint-web-acessibility` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "lint-web-acessibility"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "lint-web-acessibility/rule-name": 2
    }
}
```
