'use strict';
// catController
const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const cat_get = (req, res) => {
  const id = req.params.id;
  const cat = cats.filter(kissa => kissa.id === id).pop();
  res.json(cat);
};

module.exports = {
  cat_list_get,
  cat_get,
};