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
        "acessibility/access-key-invalid": 1, 
        "acessibility/autofocus-invalid": 1, 
        "acessibility/click-button": 1, 
        "acessibility/distracting-elements": 1, 
        "acessibility/emoji-acessible": 1, 
        "acessibility/iframe-title": 1, 
        "acessibility/image-alt": 1, 
        "acessibility/invalid-onchange": 1, 
        "acessibility/lang": 1, 
        "acessibility/list": 1, 
        "acessibility/svg-description": 1, 
        "acessibility/tabindex-invalid": 1, 
        "acessibility/table-resume": 1, 
        "acessibility/title-order": 1, 
        "acessibility/video-track": 1, 

    }
}
```

## Regras

| Rule | Description | 
|:-----|:--------:|
| access-key-invalid | Ensure that the accessKey property is not utilized on any element to prevent conflicts with keyboard commands utilized by screen readers. | 
| autofocus-invalid | Ensure that the autoFocus property is not utilized. | 
| click-button | insert a function click a button | 
| distracting-elements | Ensure that distracting elements are not used. | 
| emoji-acessible | Enforce that emojis are wrapped in span tags and provide screen reader accessibility. | 
| iframe-title | Ensure that iframe elements have a title attribute. | 
| image-alt | Insert alt into the image element | 
| invalid-onchange | Ensure that onBlur is used instead of onChange on select menus for better accessibility. | 
| lang | Make sure the lang attribute is set to a valid value. | 
| list | Insert the li element inside an ol or ul so that the reader correctly identifies the list | 
| svg-description | Add description and title into svg | 
| tabindex-invalid | Ensure that the tabIndex value is not greater than zero. | 
| table-resume | caption e o atributo summary funcionam como texto alternativo para a tabela, fornecendo mais informações ao usuário. | 
| title-order | order title | 
| video-track | Check if the video has track | 


## Sobre 

Desenvolvido por Otávio Sanchez