module.exports = {
  root: [
    ['get', '/recipe', 'Recipe', 'index'],
    ['get', '/recipe/new', 'Recipe', 'new'],
    ['get', '/recipe/:id', 'Recipe', 'show'],
    ['post', '/recipe', 'Recipe', 'create'],
    ['post', '/recipe/:id/destroy', 'Recipe', 'destroy']

  ]
}
