const express = require('express');
const BillController = require('../Controller/BillController');

const router = express.Router();

router.post('/delete', BillController.delete);
router.post('/update', BillController.update);
router.post('/create', BillController.create);
router.post('/check', BillController.create);
router.get('/keys', BillController.keys);
router.get('/:slug', BillController.show);
router.get('/', BillController.index);

module.exports = router;
