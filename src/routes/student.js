const express = require('express');
const StudentController = require('../Controller/StudentController');

const router = express.Router();

//router.get('/:create', StudentController.create);
//router.get('/key', StudentController.getKey);
//router.get('/:slug', StudentController.show);
router.get('/', StudentController.index);

module.exports = router;
