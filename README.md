![Logo](src/assets/images/marvel-logo-4-1.png)

Esta aplicação, desenvolvida utilizando a api da [Marvel](https://developer.marvel.com/documentation/getting_started), consiste em listar os personagens, buscar um personagem e mostrar seus detalhes ao ser selecionado. O gerenciamento dos dados foi feito com o [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html), com a criação do hook [useCharacters](src/hooks/useCharacters.tsx). Neste hook encontra-se toda a lógica para as requisições e as variáveis e funções que são utilizadas no projeto, para manipulação dos dados. A visualização desses dados é feita em páginas especifícas configuradas nas [routes](src/routes/index.tsx), onde para cada rota há uma página. A seguir encontra-se mais detalhes da aplicação.

## Tecnologias
 - [React](https://reactjs.org)
 - [styled-components](https://styled-components.com/)

## Utilizando a API da MARVEL

> Caso queira rodar a aplicação local, é necessário que tenha as seguintes variáveis em um arquivo .env: 
  - apikey (REACT_APP_PUBLIC_KEY)
  - privatekey (REACT_APP_PRIVATE_KEY)
  - ts (REACT_APP_TS)
  - [REACT_APP_API](https://gateway.marvel.com:443/v1/public)
> Com essas variáveis é preciso gerar um hash por meio do [md5](https://fiodevida.com/o-que-e-md5-algoritmo-md5-message-digest/), como mostra na [documentação](https://developer.marvel.com/documentation/authorization), e sempre passar durante as requisições.

## Demonstração

> No vídeo a seguir, mostra o funcionamento da aplicação e sua responsividade.

https://user-images.githubusercontent.com/34512572/161671489-704748f2-fe9a-4e3c-899d-d9d51e8c1c2f.mp4


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
