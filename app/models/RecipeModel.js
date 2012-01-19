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
  },
  findAll: function() {
    this.DBModel.find()
  },
  show: function(id, success, failure) {
    this.DBModel.findById(id, function(err, res) {
      console.log(id, res)
      success(res)
    })
  },
  index: function(success, failure) {
    console.log('should be counting')
    var count
    this.DBModel.count({}, function(err, docs) {
      count = docs
      console.log(err, docs, 'docs')
    })
    this.DBModel.find({}, function(err, recipes) {
      success(count, recipes)
    })
  }
})
