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

function DadosCampanha (idUsuario, idCampanha){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function DadosCampanha()");

    var instrucaoSql = `
    SELECT 
	    campanha.Nome as Titulo,
	    campanha.Descricao as Descricao,
	    campanha.Sistema as Sistema,
	    campanha.fkEstrutura as Estrutura,
	    campanha.fkEnredo as Enredo,
	    campanha.fkArcoNarrativo as ArcoNarrativo,
	    campanha.fkTema as Tema,
	    campanha.Sessoes as Sessoes
    FROM campanha
    JOIN usuario
	    ON fkUsuario = idUsuario
    WHERE idUsuario = ${idUsuario} and idCampanhas = ${idCampanha};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function listar (idUsuario){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function DadosCampanha()");

    var instrucaoSql = `
    SELECT 
        campanha.idCampanhas as Id,
        campanha.Nome as Titulo,
        campanha.Descricao as Descricao,
        campanha.Sistema as Sistema,
        campanha.Sessoes as Sessoes,
        estrutura.NomeEstrutura as Estrutura,
        enredo.NomeEnredo as Enredo,
        arcoNarrativo.NomeArco as ArcoNarrativo,
        tema.NomeTema as Tema
    FROM campanha
    JOIN estrutura 
        ON fkEstrutura = idEstrutura
    JOIN enredo
        ON fkEnredo = idEnredo
    JOIN arcoNarrativo
        ON fkArcoNarrativo = idArcoNarrativo
    JOIN tema
        ON fkTema = idTema
    JOIN usuario
        ON fkUsuario = idUsuario
    WHERE idUsuario = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function atualizar(tituloCampanha, descricaoCampanha, sistemaCampanha, idCampanha, estruturaCampanha, enredoCampanha, arcoCampanha, temaCampanha, sessoesCampanha){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function atualizar(): ", tituloCampanha, descricaoCampanha, sistemaCampanha, idCampanha, estruturaCampanha, enredoCampanha, arcoCampanha, temaCampanha, sessoesCampanha);
    var instrucaoSql = `
        UPDATE campanha SET 
            Nome = '${tituloCampanha}',
            Descricao = '${descricaoCampanha}',
            Sistema = '${sistemaCampanha}',
            fkEstrutura = '${estruturaCampanha}',
            fkEnredo = '${enredoCampanha}',
            fkArcoNarrativo = '${arcoCampanha}',
            fkTema = '${temaCampanha}',
            Sessoes = '${sessoesCampanha}'
            WHERE idCampanhas = ${idCampanha};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);


}

module.exports = {
    cadastrar,
    DadosCampanha,
    listar,
    atualizar
};