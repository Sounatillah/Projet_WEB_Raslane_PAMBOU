# The Last Message — Dossier n°017

**The Last Message** est un site web narratif et interactif autour de la disparition fictive d’Élise Moreau. Le visiteur suit les étapes d’une enquête, examine des pièces à conviction et formule sa propre hypothèse.

> L’affaire, les personnages et les événements présentés sur ce site sont fictifs.

## Le projet

Le site propose un parcours en cinq pages :

1. **Accueil** — présente l’univers de l’enquête.
2. **L’affaire** — raconte la disparition d’Élise Moreau et présente les suspects.
3. **Les preuves** — rassemble six pièces à examiner.
4. **Déduction** — invite le visiteur à choisir une hypothèse et à expliquer son raisonnement.
5. **À propos** — présente les membres du projet et leurs contributions.

L’objectif est de créer une expérience immersive dans laquelle les indices se recoupent et permettent au visiteur de construire sa propre déduction.

## Fonctionnalités

- Navigation entre les différentes pages de l’enquête.
- Présentation des preuves avec leurs descriptions.
- Carrousel d’images sur la page d’accueil.
- Formulaire de déduction avec validation du verdict en JavaScript.
- Mise en page adaptée aux écrans d’ordinateur et de téléphone.

## Technologies utilisées

- **HTML5** pour structurer les pages.
- **CSS3** pour la mise en forme et l’adaptation aux différentes tailles d’écran.
- **JavaScript** pour les éléments interactifs.

Le site fonctionne sans installation de dépendances.

## Lancer le site

Ouvrez le fichier `html/accueil.html` dans un navigateur.

Pour une prévisualisation pendant le développement, vous pouvez aussi ouvrir le dossier du projet dans Visual Studio Code et lancer `accueil.html` avec l’extension **Live Server**.

## Structure du projet

```text
The-Last-Message/
├── html/
│   ├── accueil.html
│   ├── affaire.html
│   ├── preuves.html
│   ├── deduction.html
│   └── apropos.html
├── css/
│   └── style.css
├── js/
│   ├── carrousel-accueil.js
│   └── deduction.js
├── img/
│   └── images du projet
└── README.md
