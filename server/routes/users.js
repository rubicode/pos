var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

// Register
router.post('/register', function(req, res, next){
  // let countMail = User.find({email: req.body.email}).count();
  // console.log(countMail);
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

// Login
  router.post('/login', (req, res) =>{
    User.findOne({
      email: req.body.email,
    }).then(user =>{
      if (!user){
        res.json({error:true, message : "Email is invalid"})
      } else {
        if (req.body.password != user.password) {
          res.json({error: true, message:"Password is invalid"})
        }else {
          let token = jwt.sign({ user:user}, 'secretkey', {expiresIn: 86400});
          res.json({
            data:{
              email: user.email
            },
            token: token
          })
        }
      }
    })
  })

  // check
  router.post('/check', (req, res) => {
    var token = req.body.token || req.query.token || req.header['x-access-token'];
    jwt.verify(token, 'secretkey', (err, decoded) =>{
      if (decoded){
        res.json({valid: true})
      }else {
        res.json({valid: false, message: "Token is invalid"})
      }
    })
  })

  // destroy
  router.get('/destroy', (req, res) =>{
    res.json({
      logout: true
    })
  })



  module.exports = router;
