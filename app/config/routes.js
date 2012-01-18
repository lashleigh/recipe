module.exports = {
  root: [
    ['get', '/', 'Home'],
    ['get', '/hello/:name', 'Home', 'hello'],
    ['get', '/hello', 'Home'], 

    ['get', '/recipe', 'Recipe', 'index'],
    ['get', '/recipe/new', 'Recipe', 'new'],
    ['get', '/recipe/:id', 'Recipe', 'show'],
    ['post', '/recipe', 'Recipe', 'create']
  ]
}
