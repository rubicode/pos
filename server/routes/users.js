var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req, res, next){
  if (req.body.password == req.body.retypepassword) {
    const user = new User({
      email: req.body.email,
      password: req.body.password,
      retypepassword: req.body.retypepassword,
      name: req.body.name,
      position: req.body.position
    });

    user.save((err, userSaved)=>{
      let token = jwt.sign({ user: user }, 'secretkey', { expiresIn: 86400 });
      res.json(
        {
          data: {
            email: userSaved.email
          },
          token: token
        });
      })
    }else {
      res.json({
        error: true,
        message: 'password and retypepassword are not match'
      })
    }
  })



  module.exports = router;
