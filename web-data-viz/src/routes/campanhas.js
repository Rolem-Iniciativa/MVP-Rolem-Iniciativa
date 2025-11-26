var express = require("express");
var router = express.Router();

var campanhaController = require('../controllers/campanhaController');

router.post('/cadastrar', function (req, res){

    campanhaController.cadastrar(req, res);

});

router.get('/exibir', function (req, res) {

    campanhaController.exibir(req, res);

});

module.exports = router;

