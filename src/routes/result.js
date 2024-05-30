const express = require('express');
const ResultController = require('../Controller/ResultController');

const router = express.Router();

router.post('/delete', ResultController.delete);
router.post('/update', ResultController.update);
router.post('/create', ResultController.create);
router.get('/keys', ResultController.keys);
router.get('/:slug', ResultController.show);
router.get('/', ResultController.index);

module.exports = router;
