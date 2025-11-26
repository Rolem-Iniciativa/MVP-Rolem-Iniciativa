DROP DATABASE BD_RolemIniciativa;
CREATE DATABASE BD_RolemIniciativa;
USE BD_RolemIniciativa;

-- ============================
-- TABELA USUARIO
-- ============================
CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    NickName VARCHAR(100),
    Email VARCHAR(200) UNIQUE NOT NULL,
    Senha VARCHAR(100) NOT NULL,
    Xp INT
);

-- ============================
-- TABELA ESTRUTURA
-- ============================
CREATE TABLE estrutura (
    idEstrutura INT PRIMARY KEY AUTO_INCREMENT,
    NomeEstrutura VARCHAR(100)
);

-- ============================
-- TABELA ENREDO
-- ============================
CREATE TABLE Enredo (
    idEnredo INT PRIMARY KEY AUTO_INCREMENT,
    NomeEnredo VARCHAR(100)
);

-- ============================
-- TABELA ARCO NARRATIVO
-- ============================
CREATE TABLE ArcoNarrativo (
    idArcoNarrativo INT PRIMARY KEY AUTO_INCREMENT,
    NomeArco VARCHAR(100)
);

-- ============================
-- TABELA TEMA
-- ============================
CREATE TABLE Tema (
    idTema INT PRIMARY KEY AUTO_INCREMENT,
    NomeTema VARCHAR(100)
);

-- ============================
-- TABELA CAMPANHA
-- ============================
CREATE TABLE campanha (
    idCampanhas INT PRIMARY KEY AUTO_INCREMENT,
    Nome VARCHAR(100) NOT NULL,
    Descricao TEXT,
    Sistema VARCHAR(100),
    fkUsuario INT NOT NULL,
    fkEstrutura INT,
    fkEnredo INT,
    fkArcoNarrativo INT,
    fkTema INT,
    Sessoes INT,
    CONSTRAINT fkCampanhaUsuario
		FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
	CONSTRAINT fkCampanhaEstrutura
		FOREIGN KEY (fkEstrutura) REFERENCES estrutura(idEstrutura),
    CONSTRAINT fkCampanhaEnredo
		FOREIGN KEY (fkEnredo) REFERENCES Enredo(idEnredo),
    CONSTRAINT fkCampanhaArcoNarrativo
		FOREIGN KEY (fkArcoNarrativo) REFERENCES ArcoNarrativo(idArcoNarrativo),
    CONSTRAINT fkCampanhaTema
		FOREIGN KEY (fkTema) REFERENCES Tema(idTema)
);