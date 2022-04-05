![Logo](src/assets/images/marvel-logo-4-1.png)

Esta aplicação, desenvolvida utilizando a api da [Marvel](https://developer.marvel.com/documentation/getting_started), consiste em listar os personagens, buscar um personagem e mostrar seus detalhes ao ser selecionado. O gerenciamento dos dados foi feito com o [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html) com a criação do hook [useCharacters](src/hooks/useCharacters.tsx). Neste hook encontra-se toda a lógica para as requisições e as variavéis e funções que são utilizadas no projeto para manipulação dos dados. A visualização desses dados é feita em páginas especifícas configuradas nas [routes](src/routes/index.tsx), onde para cada rota há uma página. A seguir encontra-se mais detalhes da aplicação.

## Tecnologias
 - [React](https://reactjs.org)
 - [styled-components](https://styled-components.com/)

## Utilizando a API da MARVEL

> Caso queira rodar a aplicação local, é necessário que tenha: 
  - apikey
  - privatekey
> Com essas variavéis é preciso gerar um hash por meio [md5](https://fiodevida.com/o-que-e-md5-algoritmo-md5-message-digest/), como mostra na documentação. 

## Instalação
```bash
yarn install
# ou
npm install
```

## Executar projeto
```bash
yarn dev
# ou
npm run dev
```
