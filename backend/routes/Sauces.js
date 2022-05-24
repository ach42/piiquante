// Controler
const express = require('express');
const router = express.Router();
const controllerSauce = require('../controllers/Sauces');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');

router.get('/', auth, controllerSauce.displayAllSauce);
router.get('/:id', auth, controllerSauce.displaySauce);
router.post('/', auth, multer, controllerSauce.createSauce);
router.post('/:id/like', auth, controllerSauce.updateLikeSauce);
router.put('/:id', auth, multer, controllerSauce.modifySauce);
router.delete('/:id', auth, controllerSauce.deleteSauce);

module.exports = router;