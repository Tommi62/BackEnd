'use strict';
// catRoute
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {body} = require('express-validator');
const catController = require('../controllers/catController');

const fileFilter = (req, file, cb) => {
  if(file.mimetype.includes('image')){
    cb(null, true);
  }else{
    cb(null, false);
  }
};

const upload = multer({dest: './uploads/', fileFilter});

const injectFile = (req, res, next) => {
  if (req.file) {
    req.body.mimetype = req.file.mimetype;
  }
  next();
};

router.get('/', catController.cat_list_get);

router.get('/:id', catController.cat_get);

router.post('/', upload.single('cat'), injectFile, catController.make_thumbnail, [
  body('name', 'Vaadittu kenttä').isLength({min: 1}),
  body('age', 'Ikä numerona!').isLength({min: 1}).isNumeric(),
  body('weight', 'Paino numerona!').isLength({min: 1}).isNumeric(),
  body('owner', 'Syötä numero!').isLength({min: 1}).isNumeric(),
  body('mimetype', 'Ei ole kuva!').contains('image'),
], catController.cat_create_post);

router.put('/', [
  body('name', 'Vaadittu kenttä').isLength({min: 1}),
  body('age', 'Ikä numerona!').isLength({min: 1}).isNumeric(),
  body('weight', 'Paino numerona!').isLength({min: 1}).isNumeric(),
  body('owner', 'Syötä numero!').isLength({min: 1}).isNumeric(),
], catController.cat_update_put);

router.delete('/:id', catController.cat_delete);

module.exports = router;

