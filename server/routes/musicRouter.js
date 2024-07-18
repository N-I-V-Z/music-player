const musicController = require('../controller/musicController')
const router = require("express").Router();

router.post('/addMusic', musicController.addMusic);

router.get('/getAll', musicController.getAll);

router.delete('/deleteMusic', musicController.deleteMusic);

module.exports = router;
