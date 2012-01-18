module.exports = require(app.set('controllers') + '/ApplicationController').extend(function() {
  this.viewFolder = "recipe"
})
  .methods({
    index: function() {
      this.render('index', {
        count: 12,
        recipes: [{title: 'thing', stuff: [{amount: 50, name: 'flour'}, {amount: 100, name: 'water'}, {amount: 1.2, name: 'salt'}]}, 
                  {title: 'bings', stuff: [{amount: 20, name: 'wheat'}, {amount: 72,  name: 'water'}, {amount: 0.6, name: 'salt'}]}]
      })
    },
    new: function() {
      this.render('new', {
        title: 'new recipe'
      })
    }, 
    create: function() {
      this.getModel('Recipe').saveit(this.request.body)  
      this.response.redirect('/recipe')
    },
    show: function () {
      this.render('show', {
        title: 'booger pi',
        stuff: [{amount: 50, name: 'flour'}, {amount: 100, name: 'water'}, {amount: 1.2, name: 'salt'}]
      })
    }
  })
