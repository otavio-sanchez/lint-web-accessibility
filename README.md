# ESLint Plugin Accessibility

O ESLint Plugin Accessibility é um plugin capaz de ajudar a implementar diversas regras de acessibilidade, que garante o acesso a todas as pessoas, em especial, pessoas com deficiência, que muitas vezes acabam sendo impedidas de acessar conteúdos devido a barreiras de acesso.

## Instalação

Primeiramente instale o [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Depois, instale `eslint-plugin-acessibility`:

```sh
npm install eslint-plugin-acessibility --save-dev
```

## Usar

Adicione `eslint-plugin-acessibility` nos plugins no seu arquivo `.eslintrc` de configuração.

```json
{
    "plugins": [
        "acessibility"
    ],
    "rules": {
        "acessibility/role-semantic": 1,
        "acessibility/image-alt": 1,
    }
}
```

## Sobre 

Desenvolvido por Otávio Sanchez