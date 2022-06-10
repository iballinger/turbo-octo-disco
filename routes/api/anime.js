const express = require('express');
const router = express.Router();
const animeCtrl = require('../../controllers/api/anime');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/new', animeCtrl.newAnime);
router.put('/delete', animeCtrl.delAnime);
router.post('/search', animeCtrl.searchAnime);
router.post('/animeId/details', animeCtrl.animeDetail);
router.get('/top', animeCtrl.topAnime);
router.get('/seasonal', animeCtrl.seasonalAnime);

module.exports = router;