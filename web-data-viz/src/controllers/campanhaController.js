var campanhaModel = require("../models/campanhaModel");

function cadastrar (req, res) {

    var tituloCampanha = req.body.tituloServer;
    var descricaoCampanha = req.body.descricaoServer;
    var sistemaCampanha = req.body.sistemaServer;
    var idUsuario = req.body.usuarioServer;
    var temaCampanha = req.body.temaServer;
    var estruturaCampanha = req.body.estruturaServer;
    var enredoCampanha = req.body.enredoServer;
    var arcoCampanha = req.body.arcoServer;
    var sessoesCampanha = req.body.sessoesServer;

    if (tituloCampanha == undefined){

        res.status(400).send('seu titulo está undefined!');

    }else if (descricaoCampanha == undefined){
        
        res.status(400).send('sua descriçao está undefined!');

    }else if (sistemaCampanha == undefined){
        
        res.status(400).send('seu sistema está undefined!');

    }else if (temaCampanha == undefined){
        
        res.status(400).send('seu tema está undefined!');

    }else if (estruturaCampanha == undefined){
        
        res.status(400).send('sua estrutura está undefined!');

    }else if (enredoCampanha == undefined){

        res.status(400).send('seu enredo está undefined!')

    }else if (arcoCampanha == undefined){
        
        res.status(400).send('seu arco está undefined!');

    }else if (sessoesCampanha == undefined){
        
        res.status(400).send('suas sessoes estão undefined!');

    }else {

        campanhaModel.cadastrar(tituloCampanha, descricaoCampanha, sistemaCampanha, idUsuario, estruturaCampanha, enredoCampanha, arcoCampanha, temaCampanha, sessoesCampanha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao tentar criar a campanha! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);

                }
            );
    }

}

function exibir (req, res) {
    var idUsuario = req.params.idUsuario

    console.log (idUsuario)

    campanhaModel.exibir(idUsuario)
        .then(
            function (resultado) {
                if (resultado.length > 0){

                    res.status(200).json(resultado);

                }else {

                    res.status(204).send("Nenhum resultado encontrado!")

                }

            }
        )
        .catch(
            function (erro){
                console.log(erro)
                console.log(
                    "Houve um erro ao buscar os avisos: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);

            }
        );

}

module.exports = {
    cadastrar,
    exibir
}