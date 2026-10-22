# THE LAST MESSAGE — dossier de conception

## Concept

À 23 h 47, Alexia Morel envoie à son amie Inès : « Si je ne réponds plus, ne viens pas à l’atelier. » Son téléphone est retrouvé éteint près de l’ancien Atelier 12. Quatre proches donnent des versions différentes de sa dernière soirée. Le visiteur compare les témoignages, les messages et les heures pour comprendre qui a menti et ce qui s’est réellement passé.

L’affaire est entièrement fictive. La révélation finale : **Maya, colocataire d’Alexia, a menti sur son alibi pour protéger son amie**. Elle a ouvert la sortie de service à 23 h 52 et aidé Alexia à partir avec un sac. Alexia a organisé sa disparition pour échapper à une situation qu’elle n’arrivait pas à raconter; elle n’a pas été enlevée. L’indice décisif est la concordance entre le badge de Maya, le journal de la porte et le message de 23 h 47.

## Direction graphique

- Ambiance : enquête numérique, terminal d’archives, messages et dossiers horodatés.
- Couleurs : encre `#0b1115`, panneaux `#121d22`, ivoire `#e9e3d6`, vert signal `#9de4bd`, ambre `#e9b66b`.
- Typographie : polices système; monospace pour les heures, codes et pièces à conviction.
- Mise en page : bandeau de dossier, navigation persistante, contenu en colonnes qui s’empilent sur mobile; aucune dépendance externe.

## Arborescence et maquette (profondeur maximale : 1 clic)

```text
Accueil (index.html)
├── L’affaire (affaire.html)
├── Les preuves (preuves.html)
└── À propos (apropos.html)
```

### Wireframe — accueil

```text
┌ Logo / THE LAST MESSAGE                  Accueil  Affaire  Preuves  À propos ┐
├ DOSSIER 014 · DISPARITION NON RÉSOLUE                                      ┤
│ 23:47  « Si je ne réponds plus… »       ┌ dernier message / horloge ┐       │
│ Une disparition. Quatre versions.       └───────────────────────────┘       │
│ [Commencer l’enquête] [Ouvrir les preuves]                                  │
├ Résumé de l’affaire / 4 suspects / 3 étapes de jeu                          ┤
└ Navigation de pied de page + note fiction                                   ┘
```

### Wireframe — pages de contenu

```text
┌ Header commun + navigation                                               ┐
├ Fil d’Ariane / numéro du dossier                                         ┤
│ Titre de page                     │ panneau latéral : statut / raccourcis │
│ Contenu principal en cartes,       │                                      │
│ tableaux ou conversation           │                                      │
├ Footer commun + À propos                                                ┤
```

## Répartition du travail (à remplacer par les noms du groupe)

| Rôle | Contribution proposée | À renseigner |
|---|---|---|
| Coordination et Git | dépôt, branches, intégration, suivi des tâches | Nom 1 |
| Contenu et cohérence | histoire, témoignages, chronologie, vérification des indices | Nom 2 |
| HTML et accessibilité | structure des quatre pages, navigation, formulaires, validation W3C | Nom 3 |
| CSS et responsive | charte, composants, mise en page mobile et finitions | Nom 4 |
| JavaScript et tests | indices, conversations, accusation, verdict, essais croisés | partagé |

Pour un groupe de deux ou trois, regrouper les rôles; pour cinq personnes ou plus, séparer la validation, les médias et la préparation de soutenance. Chaque membre doit pouvoir expliquer les pages et les scripts.

## Parcours et interactions

1. Comprendre le cas sur l’accueil, puis ouvrir l’affaire.
2. Lire les quatre témoignages et former une première hypothèse.
3. Dans Les preuves, consulter les messages, révéler des indices, comparer la chronologie et accuser un suspect.
4. Le verdict explique la contradiction et replace les indices dans l’ordre.

## Plan jusqu’au rendu (15 novembre 2026)

- 22–25 octobre : valider l’histoire, la charte, la maquette, ouvrir le dépôt Git et répartir les rôles.
- 26 octobre–1er novembre : réaliser les quatre pages, la navigation et le responsive.
- 2–8 novembre : coder et comprendre les interactions JavaScript.
- 9–13 novembre : tester les liens, les formulaires, les tailles d’écran et valider HTML/CSS.
- 14 novembre : répéter une démonstration de cinq minutes; chaque membre présente une partie.

## Structure du projet

```text
the-last-message/
├── index.html
├── affaire.html
├── preuves.html
├── apropos.html
├── css/style.css
├── js/app.js
└── README.md
```

## Technologies

HTML5, CSS3 et JavaScript natif (`defer`), sans framework ni bibliothèque. L’état de l’enquête reste dans le navigateur et n’exige aucun compte ou base de données.
