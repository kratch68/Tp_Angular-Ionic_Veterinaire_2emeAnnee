-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  Dim 25 avr. 2021 à 17:28
-- Version du serveur :  10.4.6-MariaDB
-- Version de PHP :  7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `veterinaire`
--

-- --------------------------------------------------------

--
-- Structure de la table `animal`
--

CREATE TABLE `animal` (
  `id` int(11) NOT NULL,
  `client_id` int(11) DEFAULT NULL,
  `typeAnimal_id` int(11) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `dateNaissance` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `animal`
--

INSERT INTO `animal` (`id`, `client_id`, `typeAnimal_id`, `nom`, `dateNaissance`) VALUES
(1, 1, 1, 'TOTO', '2020-10-13'),
(2, 1, 2, 'TATA', '2020-10-13'),
(3, 2, 1, 'TITI', '2020-09-12'),
(5, 1, 2, 'test', '2020-10-28'),
(6, 1, 2, 'test2', '2020-10-13');

-- --------------------------------------------------------

--
-- Structure de la table `client`
--

CREATE TABLE `client` (
  `id` int(11) NOT NULL,
  `prenom` varchar(50) DEFAULT NULL,
  `nom` varchar(50) DEFAULT NULL,
  `telephone` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `client`
--

INSERT INTO `client` (`id`, `prenom`, `nom`, `telephone`) VALUES
(1, 'gwenael', 'cabellic', '444-444-4444'),
(2, 'Guillaume', 'Pelletier', '555-555-5555'),
(3, 'Mathieu', 'Lepage', '666-666-6666');

-- --------------------------------------------------------

--
-- Structure de la table `intervention`
--

CREATE TABLE `intervention` (
  `id` int(11) NOT NULL,
  `animal_id` int(11) DEFAULT NULL,
  `typeIntervention_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `duree` time DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `typeanimal`
--

CREATE TABLE `typeanimal` (
  `id` int(11) NOT NULL,
  `type` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `typeanimal`
--

INSERT INTO `typeanimal` (`id`, `type`) VALUES
(1, 'chien'),
(2, 'chat');

-- --------------------------------------------------------

--
-- Structure de la table `typeintervention`
--

CREATE TABLE `typeintervention` (
  `id` int(11) NOT NULL,
  `intervention` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `typeintervention`
--

INSERT INTO `typeintervention` (`id`, `intervention`) VALUES
(1, 'operation'),
(2, 'soin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `animal`
--
ALTER TABLE `animal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `client_id` (`client_id`),
  ADD KEY `typeAnimal_id` (`typeAnimal_id`);

--
-- Index pour la table `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `intervention`
--
ALTER TABLE `intervention`
  ADD PRIMARY KEY (`id`),
  ADD KEY `typeIntervention_id` (`typeIntervention_id`),
  ADD KEY `animal_id` (`animal_id`);

--
-- Index pour la table `typeanimal`
--
ALTER TABLE `typeanimal`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `typeintervention`
--
ALTER TABLE `typeintervention`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `animal`
--
ALTER TABLE `animal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `client`
--
ALTER TABLE `client`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `intervention`
--
ALTER TABLE `intervention`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `typeanimal`
--
ALTER TABLE `typeanimal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `typeintervention`
--
ALTER TABLE `typeintervention`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `animal`
--
ALTER TABLE `animal`
  ADD CONSTRAINT `animal_ibfk_1` FOREIGN KEY (`client_id`) REFERENCES `client` (`id`),
  ADD CONSTRAINT `animal_ibfk_2` FOREIGN KEY (`typeAnimal_id`) REFERENCES `typeanimal` (`id`);

--
-- Contraintes pour la table `intervention`
--
ALTER TABLE `intervention`
  ADD CONSTRAINT `intervention_ibfk_1` FOREIGN KEY (`typeIntervention_id`) REFERENCES `typeintervention` (`id`),
  ADD CONSTRAINT `intervention_ibfk_2` FOREIGN KEY (`animal_id`) REFERENCES `animal` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
