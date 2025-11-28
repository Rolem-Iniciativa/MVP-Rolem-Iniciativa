var database = require("../database/config")

function pegarDados (idUsuario){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pegarDados()");

    var instrucaoSql = `
    SELECT
        (SELECT
            count(campanha.fkEstrutura) 
        FROM campanha
        WHERE fkEstrutura = 1 and fkUsuario = ${idUsuario}) as EstruturaLinha,

        (SELECT
            count(campanha.fkEstrutura) 
        FROM campanha
        WHERE fkEstrutura = 2 and fkUsuario = ${idUsuario}) as EstruturaArvore,

        (SELECT
            count(campanha.fkEstrutura) 
        FROM campanha
        WHERE fkEstrutura = 3 and fkUsuario = ${idUsuario}) as EstruturaTeia,
        
        (SELECT
            count(campanha.fkEnredo) 
        FROM campanha
        WHERE fkEnredo = 1 and fkUsuario = ${idUsuario}) as EnredoSuperarMonstro,
        
        (SELECT
            count(campanha.fkEnredo) 
        FROM campanha
        WHERE fkEnredo = 2 and fkUsuario = ${idUsuario}) as EnredoMiseriaRiqueza,
        
        (SELECT
            count(campanha.fkEnredo) 
        FROM campanha
        WHERE fkEnredo = 3 and fkUsuario = ${idUsuario}) as EnredoBusca,
        
        (SELECT
            count(campanha.fkEnredo) 
        FROM campanha
        WHERE fkEnredo = 4 and fkUsuario = ${idUsuario}) as EnredoViagemRetorno,
        
        (SELECT
            count(campanha.fkEnredo) 
        FROM campanha
        WHERE fkEnredo = 5 and fkUsuario = ${idUsuario}) as EnredoComedia,
        
        (SELECT
            count(campanha.fkEnredo) 
        FROM campanha
        WHERE fkEnredo = 6 and fkUsuario = ${idUsuario}) as EnredoTragedia,
        
        (SELECT
            count(campanha.fkEnredo) 
        FROM campanha
        WHERE fkEnredo = 7 and fkUsuario = ${idUsuario}) as EnredoRenacimento
    fROM campanha LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

function pegarDadosKPI (idUsuario){
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pegarDadosKPI()");

    var instrucaoSql = `
    SELECT
	(SELECT 
		nomeTema as Tema
	FROM  campanha
	JOIN tema 
	ON campanha.fkTema = tema.idTema
	WHERE campanha.fkUsuario = ${idUsuario}
	GROUP BY tema.nomeTema
	ORDER BY COUNT(campanha.fkTema) DESC
	LIMIT 1) as TemaUsuario,

	(SELECT 
		nomeEstrutura as Estrutura
	FROM  campanha
	JOIN estrutura 
	ON campanha.fkEstrutura = estrutura.idEstrutura
	WHERE campanha.fkUsuario = ${idUsuario}
	GROUP BY estrutura.nomeEstrutura
	ORDER BY COUNT(campanha.fkEstrutura) DESC 
	LIMIT 1) EstruturaUsuario,

	(SELECT 
		nomeArco as Arco
	FROM  campanha
	JOIN arcoNarrativo
	ON campanha.fkArcoNarrativo = arcoNarrativo.idArcoNarrativo
	WHERE campanha.fkUsuario = ${idUsuario}
	GROUP BY arcoNarrativo.nomeArco
	ORDER BY COUNT(campanha.fkTema) DESC
	LIMIT 1) ArcoUsuario,
    
    (SELECT 
		nomeTema as Tema
	FROM  campanha
	JOIN tema 
	ON campanha.fkTema = tema.idTema
	GROUP BY tema.nomeTema
	ORDER BY COUNT(campanha.fkTema) DESC
	LIMIT 1) as TemaFavorito,

	(SELECT 
		nomeEstrutura as Estrutura
	FROM  campanha
	JOIN estrutura 
	ON campanha.fkEstrutura = estrutura.idEstrutura
	GROUP BY estrutura.nomeEstrutura
	ORDER BY COUNT(campanha.fkEstrutura) DESC 
	LIMIT 1) EstruturaFavorito,

	(SELECT 
		nomeArco as Arco
	FROM  campanha
	JOIN arcoNarrativo
	ON campanha.fkArcoNarrativo = arcoNarrativo.idArcoNarrativo
	GROUP BY arcoNarrativo.nomeArco
	ORDER BY COUNT(campanha.fkTema) DESC
	LIMIT 1) ArcoFavorito;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}

module.exports = {
    pegarDados,
    pegarDadosKPI
};