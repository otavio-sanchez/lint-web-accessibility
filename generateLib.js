const pluginDocumentation = `# ESLint Plugin Accessibility

O ESLint Plugin Accessibility é um plugin capaz de ajudar a implementar diversas regras de acessibilidade, que garante o acesso a todas as pessoas, em especial, pessoas com deficiência, que muitas vezes acabam sendo impedidas de acessar conteúdos devido a barreiras de acesso.

## Instalação

Primeiramente instale o [ESLint](https://eslint.org/):

\`\`\`sh
npm i eslint --save-dev
\`\`\`

Depois, instale \`eslint-plugin-acessibility\`:

\`\`\`sh
npm install eslint-plugin-acessibility --save-dev
\`\`\`

## Usar

Adicione \`eslint-plugin-acessibility\` nos plugins no seu arquivo \`.eslintrc\` de configuração.

\`\`\`json
{
    "plugins": [
        "acessibility"
    ],
    "rules": {
(((rules-code)))
    }
}
\`\`\`

## Regras

| Rule | Description | 
|:-----|:--------:|
(((rules)))

## Sobre 

Desenvolvido por Otávio Sanchez`;

const fs = require('fs');

const directoryPath = 'lib/rules';

let content = ''
let rulesCode = ''

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach(file => {
    const rule = require(`./${directoryPath}/${file}`)
    
    const ruleName = file.replace(/\.js$/, '')

    rulesCode = rulesCode + `        "acessibility/${ruleName}": 1, \n`
    
    content = content + `| ${ruleName} | ${rule.meta.docs.description} | \n`
  });

  content = pluginDocumentation.replace('(((rules)))', content)

  content = content.replace('(((rules-code)))', rulesCode)

  content = content.replaceAll('<', '')
  content = content.replaceAll('>', '')

  fs.writeFile('./README.md', content, (err) => {
    if (err) {
      console.error('Ocorreu um erro ao criar o arquivo:', err);
      return;
    }
  
    console.log('Arquivo Markdown criado com sucesso!');
  });
});


