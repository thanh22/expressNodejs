var express = require('express');
var userController = require('../controllers/userController');

var router = express.Router();

router.get('/', userController.index);

router.get('/search', userController.search);

router.get('/create', userController.getCreate);

router.get('/:id', userController.detail);

router.post('/create', userController.postCreate);

module.exports = router;