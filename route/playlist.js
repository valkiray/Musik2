const express = require('express');
const router = express.Router();

const playlist_controller = require('../controller/playlistController');

router.get('/', playlist_controller.index);
router.get('/tambah', playlist_controller.tambah);
router.post('/create', playlist_controller.store);
router.get('/:id', playlist_controller.playlist_details);
router.post('/:id/update', playlist_controller.update);
router.post('/:id/destroy', playlist_controller.destroy);
module.exports = router;