# Redux shop

## Projeto estudos Redux

Instalar as dependências
```bash
npm install
```
Instalar as pacotes Redux pro React
```bash
npm install redux react-redux
```

Execute a aplicação
```bash
npm start
```

## De onde vem os produtos da listagem?

A lista de produtos da listagem inicial vem do json de produtos:

src/json/products.json

----------------------------
## Fluxo de mudança do estado

No produto da listagem tem um botão pra adicionar ao carrinho 

Quando o usuario clicar em adicionar o produto dispara uma action "ADD_PRODUCT_TO_CART"

Essa action vai ser dispachada para o reducer que ouve a action, pega todos os produtos atuais no carrinho e adiciona um novo

O novo estado é uma lista com o produto adicionado, todos os componentes que usam esse estado são atualizados.