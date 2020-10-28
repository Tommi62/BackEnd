'use strict';
// userController
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
  users.map(kayttaja => delete kayttaja.password);
  res.json(users);
};

const user_get = (req, res) => {
  const id = req.params.id;
  const user = users.filter(kayttaja => kayttaja.id === id).pop();
  delete user.password;
  res.json(user);
};

module.exports = {
  user_list_get,
  user_get,
};