const express = require('express');
const router = express.Router();

const artis_controller = require('../controller/artisController');

router.get('/', artis_controller.index);
router.get('/tambah', artis_controller.tambah);
router.post('/create', artis_controller.store);
router.get('/:id', artis_controller.artis_details);
router.post('/:id/update', artis_controller.update);
router.post('/:id/destroy', artis_controller.destroy);
module.exports = router;