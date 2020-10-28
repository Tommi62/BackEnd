'use strict';
// userRoute
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', userController.user_create_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit users.')
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete users.')
});

module.exports = router;