var express = require("express");
var router = express.Router();

var campanhaController = require('../controllers/graficocontroller');

router.post('/pegarDados', function (req, res) {

    campanhaController.pegarDados(req, res);

});

router.post('/pegarDadosKPI', function (req, res) {

    campanhaController.pegarDadosKPI(req, res);

});

module.exports = router;