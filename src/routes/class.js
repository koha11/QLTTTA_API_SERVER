const express = require('express');
const ClassController = require('../Controller/ClassController');

const router = express.Router();

router.post('/delete', ClassController.delete);
router.post('/update', ClassController.update);
router.post('/create', ClassController.create);
router.get('/keys', ClassController.keys);
router.get('/:slug', ClassController.show);
router.get('/', ClassController.index);

module.exports = router;
