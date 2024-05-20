const express = require('express');
const StudentController = require('../Controller/StudentController');

const router = express.Router();

router.post('/delete', StudentController.delete);
router.post('/update', StudentController.update);
router.post('/create', StudentController.create);
router.get('/keys', StudentController.keys);
router.get('/:slug', StudentController.show);
router.get('/', StudentController.index);

module.exports = router;
