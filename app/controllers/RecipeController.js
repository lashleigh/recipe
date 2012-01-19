module.exports = require(app.set('controllers') + '/ApplicationController').extend(function() {
  this.viewFolder = "recipe"
})
  .methods({
    index: function() {
      var control = this;
      this.getModel('Recipe').index(
        function(num, recipes) {
          control.render('index', {
            title: 'balls',
            count: num,
            recipes: recipes
          })
        }, 
        function(err) {
          console.log(err)
        }
      )
    },
    new: function() {
      this.render('new', {
        title: 'new recipe'
      })
    }, 
    create: function() {
      var params = this.request.body
      this.getModel('Recipe').saveit(params, function(err) {
       console.log(err) 
      })
      this.response.redirect('/recipe')
    },
    show: function (id) {
      var control = this
      this.getModel('Recipe').show(id, 
        function(recipe) {
        control.render('show', {recipe: recipe})
        }, 
        function() {
        
        })
      }
  })
