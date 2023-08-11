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

const fs = require("fs");

const directoryPath = "lib/rules";

let content = "";
let rulesCode = "";

let allRules = [];

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach((file) => {
    const rule = require(`./${directoryPath}/${file}`);

    const ruleName = file.replace(/\.js$/, "");

    rulesCode = rulesCode + `        "acessibility/${ruleName}": 1, \n`;

    allRules = allRules.concat({
      file,
      description: rule.meta.docs.description,
      ruleName,
    });

    content = content + `| ${ruleName} | ${rule.meta.docs.description} | \n`;
  });

  let text

  allRules.map((item) => {
    const test = require(`./tests/lib/rules/${item.file}`);

    text = text + `
    
/subsection{${item.ruleName}}

${item.description}

Exemplo do erro:
/begin{lstlisting}[style=html]
  ${test.invalid[0].code}
/end{lstlisting}

Exemplo da sugestão de correção do Linter:
/begin{lstlisting}[style=html]
    ${test.valid[0].code}
/end{lstlisting}
 
    `
  })

  content = pluginDocumentation.replace("(((rules)))", content);

  content = content.replace("(((rules-code)))", rulesCode);

  content = content.replaceAll("<", "");
  content = content.replaceAll(">", "");

  fs.writeFile("./README.md", content, (err) => {
    if (err) {
      console.error("Ocorreu um erro ao criar o arquivo:", err);
      return;
    }

    console.log("Arquivo Markdown criado com sucesso!");
  });

  fs.writeFile("./oi.txt", text, (err) => {
    if (err) {
      console.error("Ocorreu um erro ao criar o arquivo:", err);
      return;
    }

    console.log("Arquivo Markdown criado com sucesso!");
  });
});


