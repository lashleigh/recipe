module.exports = require(app.set('controllers') + '/ApplicationController').extend()
  .methods({
    hello: function(name) {
      this.render('index', {
        title: 'The Matador Framework',
        name: name+' '+', my pretty'
      })
    }, 
    index: function () {
      this.render('index', {
        title: 'The Matador Framework',
        name: 'world'
      })
    }
  })
