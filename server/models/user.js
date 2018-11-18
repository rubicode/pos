var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  email: String,
  password: String,
  retypepassword: String,
  name: String,
  position: String
})

module.exports = mongoose.model('User', userSchema);
