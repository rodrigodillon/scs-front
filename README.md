# SCS - Sistema de controle de senhas

Front-end para controle de senhas utilizado por "Usuarios" onde tem a possibilidade de selecionar "Preferencial" ou "Normal",
sendo chamadas pelo "Gerente".

Todas as funcionalidades serão acessadas utilizando Axios para realizar as requisições utilizando o protocolo REST.

# Requisitos

* Node
* Scs - backend (https://github.com/rodrigodillon/scs)

# Start

As depedencias do projeto se encontram no package.json , por tanto um simples `'npm install'` na pasta do projeto ira realizar a instalação das mesmas.

Após concluir a instalação , utilizar `'npm start'` para subir a aplicação na URL `http://localhost:3000/`.

# Utilização

## "Usuario"

Na URL `http://localhost:3000/` aparecera dois botões para a escolha da sua senha , "PREFERECIAL" ou "NORMAL".

Após a escolha será redirecionado para `http://localhost:3000/senhas` , aonde será apresentado a "SENHA ATUAL" e a "SUA SENHA".

## "Gerente"

Na URL `http://localhost:3000/controleSenha` aparecera um marcador indicando a senha atual e dois botões.

"PROXIMO" Aonde será possível realizar a chamada da próxima senha.

"REINICIAR" Aonde será possível reiniciar a contagem de senhas após a última senha retirada.

`Exemplo de "REINICIAR":`

Foram retiradas 20 senhas , porem a senha atual ainda é a número 12

A próxima senha retirada será número 01, porem será feita a chamada das 8 senhas restantes antes das demais.


# Build

Para gerar o build basta rodar o comando `'npm run build'` aonde será gerado uma pasta com todos os arquivos prontos para deploy.


