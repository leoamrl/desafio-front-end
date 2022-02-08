# mktplace

## Build

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## Technologies

Nuxt, Vue, Vuex, Bootstrap (somente grid), nuxt-vue-localstorage, v-mask, vee-validade, glide-js, Webpack, Sass, Typescript.

## Description

O projeto está seguindo a estrutura de pastas comum do Nuxt.

## Scss

Nós temos estilos globais, mixins e variáveis dentro de assets/scss.

## Components

Os componentes estão separados por pastas. Para melhor organização, os componentes que só são usados em um página ficam na pasta com o nome da página. Componentes de layout na pasta components/layout. O restante, na pasta components/util.

### Layout/Header

Este componente exibe a logo e menu da aplicação. O badge do item do carrinho é atualizado automaticamente através do getter cartLength `(store/LocalStorage.getters.cartLength)`.

### Layout/Footer

Este componente exibe a logo da aplicação.

## Pages

### 1. Index (Products)

Esta página exibe o componente de slider `(components/Slider)` que foi usado glide.js, o componente de formulário de busca `(components/SearchForm)`, que emite o termo pesquisado para o página de produto `(pages/index)` e renderiza o resultado na última seção da página: a listagem dos produtos `(pages/index::ul.products)`. Esta por sua vez recebe e lista os dados vindos da API de produtos.

A listagem percorre todos os itens da API e exibe o componente de item do produto `(components/ProductItem)`. Esse componente é responsável por exibir as informações do produto e nos dá a opção de adicionar um produto ao carrinho `(store/LocalStorage.cart)`. O método de adicionar um produto ao carrinho dispara uma ação que dispara uma mutation e adiciona o produto no carrinho.

Também temos a seção de fallback para a listagem de produtos, caso a API não retorne nenhum produto, ou a busca não retorne nenhum resultado.

### 2. Carrinho *

<small>* Foi decidido misturar português e inglês na nomenclatura do arquivo por conta do slug no roteamento do nuxt.</small>

Esta página exibe a tabela do carrinho `(pages/carrinho::table.cart-table)` -  com ótima experiência em dispositivos mobile -, as ações do carrinho e a seção de fallback para o carrinho, caso não existam produtos.

Na tabela é possível adicionar ou remover produtos e visualizar os preços conforme manipula. Todas as ações são gerenciadas pelas mutations do carrinho `(store/LocalStorage)`.

### 3. Checkout *

Esta página exibe o formulário de checkout `(pages/checkout::form.checkout-form)` e o modal de sucesso `(components/CheckoutSuccess)`. Todos os campos obrigatórios estão validados (vee-validate) e os campos que são necesários, possuem máscaras (v-mask). Os dados de endereço são preenchidos automaticamnete caso o CEP seja encontrado pela API.