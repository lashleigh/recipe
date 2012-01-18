var schema = {
  title: String,
  body: String,
  //comments: [ CommentSchema ],
  //notes: [ NoteSchema ],
  //ingredients: [ IngredientSchema ],
  created_at: Date,
  updated_at: Date
};

module.exports = require(app.set('models') + '/ApplicationModel').extend(function() {
  this.DBModel = this.mongoose.model('Recipe', new this.Schema(schema))
})
.methods({
  saveit:  function (params, callback) {
    console.log('in the model'+params)
    var recipe = new this.DBModel(params)
    recipe.save(callback)
  }, 
  find: function (id, callback) {
    this.DBModel.findById(id, callback)
  }
})
