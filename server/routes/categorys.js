var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var Category = require('../models/category');

// Addcategory
router.post('/', (req, res) =>{
  let category = new Category ({
    catid: req.body.catid,
    name: req.body.name
  })
  category.save().then(datacategory => {
    res.json({
      data:{
        _id: datacategory._id,
        catid: datacategory.catid,
        name: datacategory.name
      }
    })
  }).catch(err => {
    res.json({
      data:{
        _id: null,
        catid: null,
        name: null
      }
    })
  })
})

// Read category
router.get('/', (req, res) => {
  Category.find().then(datacategory => {
      res.json(datacategory);
  }).catch(err => {
    json({
      error : true,
      message: `something wrong ${err.message}`
    })
  })
})

// Edit
router.put('/:id', function(req, res, next) {
  let id = req.params.id;
  Category.findByIdAndUpdate(id, {
    catid: req.body.catid,
    name: req.body.name
  }, {new: true}).then(data => {
    if(!data){
      res.json({
        success: false,
        message: `updating data has been failed id : ${id} not found`,
        data: {
          _id: null,
          catid: null,
          name: null
        }
      })
    }else{
      res.json({
        success: true,
        message: "data has been updated",
        data: {
          _id: data._id,
          catid: data.catid,
          name: data.name
        }
      })
    }
  }).catch(err => {
    res.json({
      success: false,
      message: "updating data has been failed",
      data: {
        _id: null,
        catid: null,
        name: null
      }
    })
  })
})

// Delete
router.delete('/:id', function(req, res, next) {
  let id = req.params.id;
  Category.findByIdAndRemove(id).then(data => {
    if(data){
      res.json({
        success: true,
        message: "data has been deleted",
        data:{
          _id: data._id,
          catid: data.catid,
          name: data.name
        }
      })
    }else{
      res.json({
        success: false,
        message: `daleting data has been failed id: ${id}`,
        data:{
          _id: null,
          catid: null,
          name: null
        }
      })
    }
  }).catch(err => {
    res.json({
      success: false,
      message: "daleting data has been failed id: ",
      data:{
        _id: null,
        catid: null,
        name: null
      }
    })
  })
})

// Browse
router.post('/search', (req, res)=>{
  let keysearch = {};
  if (req.body.name){
    keysearch.name = {$regex: req.body.name, $options: "$i"}
  }
  if (req.body.catid){
    keysearch.catid = req.body.catid
  }

  Category.find(keysearch).then(data1 =>{
    res.json(data1);
  }).catch(err =>{
    res.json({
      error: true,
      message: err.message
    })
  })
})

// find
router.get('/:id', function(req, res, next){
  let id = req.params.id;
  Category.findById(id).then(data => {
    if(data){
      res.json({
        success: true,
        message: "data found",
        data:{
          _id: data._id,
          catid: data.catid,
          name: data.name
        }
      })
    }else{
      res.json({
        success: false,
        message: `data with id: ${id} not found`,
        data:{
          _id: null,
          catid: null,
          name: null
        }
      })
    }
  }).catch(err =>{
    res.json({
      success: false,
      message: "data not found",
      data:{
        _id: null,
        catid: null,
        name: null
      }
    })
  })
})



module.exports = router;
