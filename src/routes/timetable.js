const express = require('express');
const TimetableController = require('../Controller/TimetableController');

const router = express.Router();

router.post('/delete', TimetableController.delete);
router.post('/update', TimetableController.update);
router.post('/create', TimetableController.create);
router.get('/keys', TimetableController.keys);
router.get('/:slug', TimetableController.show);
router.get('/', TimetableController.index);

module.exports = router;
