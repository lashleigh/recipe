var schema = new this.Schema({
  title: String,
  body: String,
  //comments: [ CommentSchema ],
  //notes: [ NoteSchema ],
  //ingredients: [ IngredientSchema ],
  created_at: Date,
  updated_at: Date
});

module.exports = require(app.set('models') + '/ApplicationModel').extend(function() {
  this.DBModel = this.mongoose.model('Recipe', schema)
})
.methods({
  saveit:  function (params) {
    console.log(params)
    var recipe = new this.DBModel(params)
    console.log(recipe)
    recipe.save
  }, 
  find: function (id, callback) {
    this.DBModel.findById(id, callback)
  }
})
