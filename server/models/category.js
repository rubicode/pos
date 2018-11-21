var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  catid: String,
  name: String
})

module.exports = mongoose.model('Category', userSchema);
