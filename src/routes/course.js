const express = require('express');
const CourseController = require('../Controller/CourseController');

const router = express.Router();

router.post('/delete', CourseController.delete);
router.post('/update', CourseController.update);
router.post('/create', CourseController.create);
router.get('/keys', CourseController.keys);
router.get('/:slug', CourseController.show);
router.get('/', CourseController.index);

module.exports = router;
