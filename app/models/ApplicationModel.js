module.exports = require('./BaseModel').extend(function () {
  this.mongo = require('mongodb'),
  this.mongoose = require('mongoose'),
  this.Schema = this.mongoose.Schema,
  this.mongoose.connect('mongodb://localhost/myapp')
})
