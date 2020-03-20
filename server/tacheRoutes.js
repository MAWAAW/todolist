const express = require('express');
const router = express.Router();

const auth = require('./middlewareAuth');

const tacheCtrl = require('./tacheController');

router.get('/', tacheCtrl.getAll);
router.post('/', auth, tacheCtrl.createTache);
router.get('/:id', auth, tacheCtrl.getOneTache);
router.put('/:id', auth, tacheCtrl.modifyTache);
router.delete('/:id', auth, tacheCtrl.deleteTache);

module.exports = router;