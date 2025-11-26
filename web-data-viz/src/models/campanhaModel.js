var database = require("../database/config")

function cadastrar (tituloCampanha, descricaoCampanha, sistemaCampanha, idUsuario, estruturaCampanha, enredoCampanha, arcoCampanha, temaCampanha, sessoesCampanha) {
    
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar(): ", tituloCampanha, descricaoCampanha, sistemaCampanha, estruturaCampanha, enredoCampanha, arcoCampanha, temaCampanha, sessoesCampanha)

    var instrucao = `
        INSERT INTO campanha (Nome, Descricao, Sistema, fkUsuario, fkEstrutura, fkEnredo, fkArcoNarrativo, fkTema, Sessoes) VALUE
            ('${tituloCampanha}', '${descricaoCampanha}', '${sistemaCampanha}', '${idUsuario}', '${estruturaCampanha}', '${enredoCampanha}', '${arcoCampanha}', '${temaCampanha}', '${sessoesCampanha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);

}

module.exports = {
    cadastrar
};