var und = require('underscore')
module.exports = require(app.set('models') + '/ApplicationModel').extend(function() {
  var IngredientSchema = new this.Schema({
    amount: Number,
    name: String,
    time: Date,
    temp: Number
  })
  this.DBModel = this.mongoose.model('Recipe', new this.Schema({
    title: String,
    //comments: [ CommentSchema ],
    //notes: [ NoteSchema ],
    ingredients: [ IngredientSchema ],
    created_at: Date,
    updated_at: Date
  }))
})
.methods({
  saveit:  function (params, callback) {
    var recipe = new this.DBModel({ title: params.title})
    console.log(params)
    und.each(params.stuff, function(stuff) {
      console.log(stuff)
      recipe.ingredients.push({amount: 150, name: stuff})
    })
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
      if(err) {
        failure()
      } else {
      console.log(res)
        success(res)
      }
    })
  },
  index: function(success, failure) {
    var count
    this.DBModel.count({}, function(err, docs) {
      count = docs
    })
    this.DBModel.find({}, function(err, recipes) {
      success(count, recipes)
    })
  }
})
