# Cahier des Charges Techniques

## 1. Introduction

### 1.1 Objectif du Document

Ce document vise à définir de manière exhaustive les spécifications techniques du projet. Il sert de référence pour toutes les parties prenantes impliquées dans le développement, la mise en œuvre et la maintenance du projet.

### 1.2 Portée du Projet

ProDev/DevHive est un projet permettant aux développeurs junior de tester leurs connaissances sur différents langages de programmation et plus globalement sur leur connaissances en développement.
Le but est de rassembler et fédérer une communauté autour du projet afin que chacun puisse se tester, s'amuser et augmenter ses compétences et ses capacités.
Notre projet cible donc les jeunes développeurs, à terme nous souhaitons également intégrer des fonctionnalités pour mettre en relation jeunes étudiants et entreprises.

## Equipe

Notre équipe est composée de :

- 3 développeurs front-end
- 2 développeurs back-end

## Stack

Notre Stack technique est composée de :

- Frontend : [React]
- Backend : [NodeJS] - [Express]
- BDD : [MongoDB] ([Mongoose])
- Ops : GitHub Actions

## Bonnes pratiques

- Nous utilisons une approche clean code.

### Tests

- Approche TDD
- Jest + Cypress + Puppeteer

### Variable d'environnements

### CI/CD

### Linter

### Git

### Design Pattern

### Microservices

## Choix techniques

### Frontend

Nos possibilités étaient :

- Front end Vanilla (HTML, CSS, JavaScript)
- [React]

<!-- Tableau markdown 5 lignes, 5 colonnes -->

| Nom   | Connaissance | Envie | Documentation | Commentaires |
| ----- | ------------ | ----- | ------------- | ------------ |
| React | /5           | /5    | /5            |              |

- Nous implémentons React dans l'ensemble de l'application.

### Backend

Nos possibilités étaient :

- [PHP]
- [Node]

<!-- Tableau markdown 5 lignes, 5 colonnes -->

| Nom  | Connaissance | Envie | Documentation | Commentaires              |
| ---- | ------------ | ----- | ------------- | ------------------------- |
| PHP  | 4/5          | 3/5   | 4/5           | Connus par toute l'équipe |
| Node | 1/5          | 5/5   | 4/5           | Maitrisé par 1 personne   |

- Nous implémentons Node (Express) pour le backend pour complémenter l'implémentaion de React pour le frontend et de MongoDB pour la base de données et ainsi réaliser une MERN application.

## Schéma de l'application

![Schema Application](<Schéma architecture technique.png>)

## Schéma de la base de données

![Schema BDD](<Shema BDD.png>)

## Documentation API

## Outils gestion de projet

- Figma
- GitHub
