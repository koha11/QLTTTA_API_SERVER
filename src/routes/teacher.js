const express = require('express');
const TeacherController = require('../Controller/TeacherController');

const router = express.Router();

router.post('/delete', TeacherController.delete);
router.post('/update', TeacherController.update);
router.post('/create', TeacherController.create);
router.get('/keys', TeacherController.keys);
router.get('/:slug', TeacherController.show);
router.get('/', TeacherController.index);

module.exports = router;
