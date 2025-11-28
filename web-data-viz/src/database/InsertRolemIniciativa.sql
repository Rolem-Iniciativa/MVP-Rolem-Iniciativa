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


    
    desc tema;
    