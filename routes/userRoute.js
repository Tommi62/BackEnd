'use strict';
// userRoute
const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.user_list_get);

router.get('/:id', userController.user_get);

router.post('/', [
      body('name', 'Vähintään 3 merkkiä!').isLength({min: 3}).escape(),
      body('email', 'Sähköposti ei kelpaa!').isEmail(),
      body('passwd', 'Salasana: vähintään 8 merkkiä ja iso kirjain!').matches('(?=.*[A-Z]).{8,}')],
    userController.user_create_post);

router.put('/', (req, res) => {
  res.send('From this endpoint you can edit users.');
});

router.delete('/', (req, res) => {
  res.send('From this endpoint you can delete users.');
});

module.exports = router;