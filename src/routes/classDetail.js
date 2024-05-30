const express = require('express');
const ClassDetailController = require('../Controller/ClassDetailController');

const router = express.Router();

router.post('/delete', ClassDetailController.delete);
router.post('/update', ClassDetailController.update);
router.post('/create', ClassDetailController.create);
router.get('/keys', ClassDetailController.keys);
router.get('/:slug', ClassDetailController.show);
router.get('/', ClassDetailController.index);

module.exports = router;
