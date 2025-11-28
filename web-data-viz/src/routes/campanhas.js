var express = require("express");
var router = express.Router();

var campanhaController = require('../controllers/campanhaController');

router.post('/cadastrar', function (req, res) {

    campanhaController.cadastrar(req, res);

});

router.post('/DadosCampanha', function (req, res) {

    campanhaController.DadosCampanha(req, res);

});

router.post('/listar', function (req, res) {

    campanhaController.listar(req, res);

});

router.put('/atualizar', function (req, res) {

    campanhaController.atualizar(req, res);

});

module.exports = router;

