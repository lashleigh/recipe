module.exports = require('./ApplicationModel').extend(function () {
  this.DBModel = this.mongoose.model('User', new this.Schema({
      name: { type: String, required: true, trim: true }
    , email: { type: String, required: true, lowercase: true, trim: true }
  }))
})
  .methods({
    create: function (name, email, callback) {
      var user = new this.DBModel({
          name: name
        , email: email
      })
      user.save(callback)
    }
  , find: function (id, callback) {
      this.DBModel.findById(id, callback)
    }
  })
