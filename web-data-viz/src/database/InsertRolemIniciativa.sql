USE BD_RolemIniciativa;

INSERT INTO estrutura (NomeEstrutura) VALUE
	('Linha'),
	('Arvore'),
	('Teia');
    
INSERT INTO Enredo (NomeEnredo) VALUE
	('Superar o Monstro'),
	('Da Miséria à Riqueza'),
	('A Busca'),
	('Viagem e Retorno'),
	('Comédia'),
	('Tragédia'),
	('Renascimento');
    
INSERT INTO ArcoNarrativo (NomeArco) VALUE
	('Ascensão'),
	('Declínio'),
	('Homem no Buraco'),
	('Icarus'),
	('Cinderela'),
	('Oedipus');
    
INSERT INTO Tema (NomeTema) VALUE
	('Aventura'),
	('Investigação'),
	('Misterio'),
	('Terror'),
	('Ação');
    
show tables;

truncate table campanha;

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
    WHERE idUsuario = 1;
    
SELECT 
	campanha.Nome as Titulo,
	campanha.Descricao as Descricao,
	campanha.Sistema as Sistema,
	campanha.Sessoes as Sessoes,
	estrutura.NomeEstrutura as Estrutura,
	enredo.NomeEnredo as Enredo,
	ArcoNarrativo.NomeArco as 'Arco Narrativo',
	tema.NomeTema as Tema
FROM campanha
JOIN estrutura 
	ON fkEstrutura = idEstrutura
JOIN enredo
    ON fkEnredo = idEnredo
JOIN ArcoNarrativo
    ON fkArcoNarrativo = idArcoNarrativo
JOIN tema
	ON fkTema = idTema
JOIN usuario
	ON fkUsuario = idUsuario
WHERE idUsuario = 1;

SELECT 
        campanha.idCampanhas as Id,
        campanha.Nome as Titulo,
        campanha.Descricao as Descricao,
        campanha.Sistema as Sistema,
        campanha.Sessoes as Sessoes,
        estrutura.NomeEstrutura as Estrutura,
        enredo.NomeEnredo as Enredo,
        ArcoNarrativo.NomeArco as ArcoNarrativo,
        tema.NomeTema as Tema
    FROM campanha
    JOIN estrutura 
        ON fkEstrutura = idEstrutura
    JOIN enredo
        ON fkEnredo = idEnredo
    JOIN ArcoNarrativo
        ON fkArcoNarrativo = idArcoNarrativo
    JOIN tema
        ON fkTema = idTema
    JOIN usuario
        ON fkUsuario = idUsuario
    WHERE idUsuario = 1;
    
select * from campanha;
select * from estrutura;
select * from tema;

SELECT
	(SELECT
		count(campanha.fkEstrutura) 
	FROM campanha
	WHERE fkEstrutura = 1 and fkUsuario = 1) as EstruturaLinha,

	(SELECT
		count(campanha.fkEstrutura) 
	FROM campanha
	WHERE fkEstrutura = 2 and fkUsuario = 1) as EstruturaArvore,

	(SELECT
		count(campanha.fkEstrutura) 
	FROM campanha
	WHERE fkEstrutura = 3 and fkUsuario = 1) as EstruturaTeia,
    
    (SELECT
		count(campanha.fkEnredo) 
	FROM campanha
	WHERE fkEnredo = 1 and fkUsuario = 1) as EnredoSuperarMonstro,
    
    (SELECT
		count(campanha.fkEnredo) 
	FROM campanha
	WHERE fkEnredo = 2 and fkUsuario = 1) as EnredoMiseriaRiqueza,
    
    (SELECT
		count(campanha.fkEnredo) 
	FROM campanha
	WHERE fkEnredo = 3 and fkUsuario = 3) as EnredoBusca,
    
    (SELECT
		count(campanha.fkEnredo) 
	FROM campanha
	WHERE fkEnredo = 4 and fkUsuario = 1) as EnredoViagemRetorno,
    
    (SELECT
		count(campanha.fkEnredo) 
	FROM campanha
	WHERE fkEnredo = 5 and fkUsuario = 1) as EnredoComedia,
    
    (SELECT
		count(campanha.fkEnredo) 
	FROM campanha
	WHERE fkEnredo = 6 and fkUsuario = 1) as EnredoTragedia,
    
    (SELECT
		count(campanha.fkEnredo) 
	FROM campanha
	WHERE fkEnredo = 6 and fkUsuario = 1) as EnredoRenacimento
fROM campanha LIMIT 1;

SELECT 
	tema.nomeTema, 
    count(fkTema)
FROM campanha
join tema
on fkTema = idTema
where fkUsuario = 1
group by nomeTema;

	SELECT
		(SELECT 
			nomeTema as Tema
		FROM  campanha
		JOIN tema 
		ON campanha.fkTema = tema.idTema
		WHERE campanha.fkUsuario = 1
		GROUP BY tema.nomeTema
		ORDER BY COUNT(campanha.fkTema) DESC
		LIMIT 1) as TemaUsuario,

		(SELECT 
			nomeEstrutura as Estrutura
		FROM  campanha
		JOIN estrutura 
		ON campanha.fkEstrutura = estrutura.idEstrutura
		WHERE campanha.fkUsuario = 1
		GROUP BY estrutura.nomeEstrutura
		ORDER BY COUNT(campanha.fkEstrutura) DESC 
		LIMIT 1) EstruturaUsuario,

		(SELECT 
			nomeArco as Arco
		FROM  campanha
		JOIN arcoNarrativo
		ON campanha.fkArcoNarrativo = arcoNarrativo.idArcoNarrativo
		WHERE campanha.fkUsuario = 1
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
		LIMIT 1) ArcoUsuarioFavorito;


    