const express = require('express');
const router = express.Router();

const lagu_controller = require('../controller/laguController');

router.get('/', lagu_controller.index);
router.get('/tambah', lagu_controller.tambah);
router.post('/create', lagu_controller.store);
router.get('/:id', lagu_controller.lagu_details);
router.post('/:id/update', lagu_controller.update);
router.post('/:id/destroy', lagu_controller.destroy);
module.exports = router;