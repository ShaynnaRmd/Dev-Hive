# Cahier des Charges Techniques

## 1. Introduction

### 1.1 Objectif du Document

Ce document vise à définir de manière exhaustive les spécifications techniques de votre projet. Il sert de référence pour toutes les parties prenantes impliquées dans le développement, la mise en œuvre et la maintenance du projet.

### 1.2 Portée du Projet

ProDev/DevHive est un projet permettant aux développeurs junior de tester leurs connaissances sur différents langages de programmation et plus globalement sur leur connaissances en développement.
Le but est de rassembler et fédérer une communauté autour du projet afin que chacun puisse se tester, s'amuser et augmenter ses compétences et ses capacités.
Notre projet cible donc les jeunes développeurs, à terme nous souhaitons également intégrer des fonctionnalités pour mettre en relation jeunes étudiants et entreprises.

## 2. Spécifications Techniques

### 2.1 Architecture Système

- Architecture Globale :
- Utilisation d'un mono repository
- Diagrammes d'Architecture : Inclure des diagrammes pour illustrer l'architecture.
- Diagramme de base de données

#### Exemple de diagramme d'architecture (mermaid)

![Alt text](<Schéma architecture technique-1.png>)

#### Exemple de diagramme de base de données (mermaid)

![Alt text](<Schéma BDD.png>)

### 2.2 Choix Technologiques

- Langages de Programmation : JS.
- Frameworks et Bibliothèques : Stack MERN, ReactJS, NodeJS, ExpressJS.
- Base de Données : NOSQL, MongoDB.
- Outils de Développement : VsCode, Git.

Indiquer les raisons pour lesquelles ces technologies ont été choisies (ex : performance, communauté, etc.). Une manière souvent utilisée est de comparer les technologies entre elles avec un tableau.

| Technologie | Avantages                                                                                                                                    | Inconvénients                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| React       | Connue par le Groupe, Grandes communauté et ressources dispos en ligne, Fragmentation de l'application, recherché dans le monde professionel |                                                                  |
| NodeJS      | Coté serveur géré avec du javascript, Faciliter de déploiement avec render, grande communauté                                                |                                                                  |
| ExpressJs   | Création d'un serveur rapidement et facilement                                                                                               |                                                                  |
| CssModules  | Evite les conflits de css, libérté de customisation importantes                                                                              | Répétitions de codes, écriture chrnonphage car cela reste du css |

Vous pouvez également donner une note sur 5.

| Critère           | React | NodeJS | Express |
| ----------------- | ----- | ------ | ------- |
| **Documentation** | 5/5   | 3/5    | 4/5     |
| **Popularité**    | 5/5   | 4/5    | 4/5     |
| **Performance**   | 4/5   | 4/5    | 4/5     |
| **Connaissance**  | 3/5   | 3/5    | 3/5     |
| **Total**         | 17/20 | 14/20  | 15/20   |

### 2.3 Interfaces Système

- APIs Externes : Utilisation de l'API d'OpenAI afin de générés des quizzs.
- Intégration de Systèmes : Appel vers l'API depuis notre Front-End.

## 3. Développement

### 3.1 Gestion de Version

- Outils de Gestion de Version : Git, pas de Git Master chacun fais sa review de code

### 3.2 Normes de Codage

- Style de Codage : PEP 8 pour Python, Airbnb pour JavaScript, etc.
- Revue de Code : Processus et outils utilisés.

## 4. Déploiement et Maintenance

### 4.1 Environnements

- Développement, Test, Production : Description de chaque environnement.

### 4.2 CI/CD

- Intégration Continue : Outils et processus.
- Déploiement Continu : Automatisation du déploiement.

### 4.3 Plan de Maintenance

- Mises à Jour : Fréquence et processus.
- Support Technique : Niveaux de support et processus.

## 5. Documentation

### 5.1 Documentation Technique

- Code Source : Commentaires, documentation intégrée.
- Documentation Externe : Outils et format (ex : Wiki, ReadTheDocs).

### 5.2 Documentation Utilisateur

- Manuels Utilisateur : Guides, FAQ, etc.
- Formation : Matériaux et sessions de formation prévus.

### 6. Features

- Liste des fonctionnalités du projet.
- Temps estimé par taches
- Scope défini
- Priorité définie
- Date de fin
- Lien des services utilisés (jira, trello, notion, linear)
- Capture d'écran de diagramme de gantt

#### Exemple de plannification de taches

##### Liste des Fonctionnalités du Projet

1. **BDD** : Créer les utilisateurs en BDD.
2. **Auth** : Implémenter JWT.
3. **Routes** : Route et controller de Login / Signup.
4. **Frontend** : Créer frontend Login / Signup.
5. **Email** : Envoie d'email de réinitialisation.

##### Temps Estimé par Tâches

- **Tâche BDD** : 10 heures
- **Tâche Auth** : 5 heures
- **Tâche Routes** : 15 heures
- **Tâche Frontend** : 20 heures
- **Tâche Email** : 8 heures

##### Scope Défini

- **Phase 1** : Implémentation des fonctionnalités BDD et Auth.
- **Phase 2** : Développement des fonctionnalités Routes et Frontend.
- **Phase 3** : Finalisation et tests de la fonctionnalité Email.

##### Priorité Définie

1. **Haute** : BDD, Routes
2. **Moyenne** : Auth, Frontend
3. **Basse** : Email

##### Date de Fin

- **Date Prévue** : 30/12/2023

###### Exemple de diagramme de Gantt (mermaid)

[![](https://mermaid.ink/img/pako:eNptkttOwzAMhl_Fyg03nYBxEOodUCaBmIQ4CIF6ExqvWKTOlLochHigPcdeDGeFqUxYvYhs_9-fOv40VXBoclNbFikZNITEI1x5yzSjygoFhuOaNOewhUngKqXYepLlou01zgpOQmysADxojKbTUVH0NXyvfJekGm-IL8hOVX2txRUMTmyb8FAoeLnAH-pp1HMEr9pOyFOrLl1sAVVQFNqQu8CYpdYn53YzGO-M90Y7u_oNzgebZsedPCPL-u_66nkz98tFowW1vLi_hc3Ircpfk51VwNBhL4N911OuQye4fRpYYvBeSZehJt6-oZrv5gmyxiXIeADZz-DAbV51EpWkA_szj9_kJntIn-Hwgof_sv--JJw1lnzfcsavgcBtYUqBuhKTkF29QJIOjFYtQ6-jfhgmMw3qQpDT7fpM2NLo2BssTa5HhzPbeSlNyV_aqsMINx9cmVxih5np5mmjCrJ1tI3JZ9a3mkVHEuK039jV4mZmbvkxhN-er29CtOG2?type=png)](https://mermaid.live/edit#pako:eNptkttOwzAMhl_Fyg03nYBxEOodUCaBmIQ4CIF6ExqvWKTOlLochHigPcdeDGeFqUxYvYhs_9-fOv40VXBoclNbFikZNITEI1x5yzSjygoFhuOaNOewhUngKqXYepLlou01zgpOQmysADxojKbTUVH0NXyvfJekGm-IL8hOVX2txRUMTmyb8FAoeLnAH-pp1HMEr9pOyFOrLl1sAVVQFNqQu8CYpdYn53YzGO-M90Y7u_oNzgebZsedPCPL-u_66nkz98tFowW1vLi_hc3Ircpfk51VwNBhL4N911OuQye4fRpYYvBeSZehJt6-oZrv5gmyxiXIeADZz-DAbV51EpWkA_szj9_kJntIn-Hwgof_sv--JJw1lnzfcsavgcBtYUqBuhKTkF29QJIOjFYtQ6-jfhgmMw3qQpDT7fpM2NLo2BssTa5HhzPbeSlNyV_aqsMINx9cmVxih5np5mmjCrJ1tI3JZ9a3mkVHEuK039jV4mZmbvkxhN-er29CtOG2)

## 6. Glossaire

- Liste des termes et acronymes utilisés dans le document.

## 7. Annexes

- Diagrammes, captures d'écran, etc.

## 8. Conclusion

- Résumé des points clés et prochaines étapes pour le projet.
