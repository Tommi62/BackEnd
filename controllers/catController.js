'use strict';
// catController
const catModel = require('../models/catModel');


const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  res.json(cats);
};

const cat_get = async (req, res) => {
  const id = req.params.id;
  const cat = await catModel.getCat(id);
  res.json(cat);
};

const cat_create_post = async (req, res) => {
  console.log(req.body, req.file);
  const {name, age, weight, owner} = req.body;
  const params = [name, age, weight, owner, req.file.filename];
  const cat = await catModel.addCat(params);
  res.json({message: 'Upload ok'});
};

module.exports = {
  cat_list_get,
  cat_get,
  cat_create_post,
};