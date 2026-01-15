# AI Dataset Collector - Installation du Userscript

Ce guide explique comment installer manuellement le userscript **AI Dataset Collector** en utilisant la fonctionnalité de mise à jour automatique.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé une extension de gestion de userscripts sur votre navigateur.

## 🚀 Installation

L'installation se fait en créant un "stub" (un script vide) qui va ensuite télécharger automatiquement le code source depuis GitHub.

### Étape 1 : Créer un nouveau script
1.  Ouvrez le tableau de bord de votre gestionnaire de script.
2.  Ajoutez un nouveau script.

### Étape 2 : Configurer la source
Effacez tout le code présent par défaut dans l'éditeur et copiez-collez **uniquement** les lignes suivantes :

```javascript
// ==UserScript==
// @name         AI Dataset Collector
// @namespace    http://tampermonkey.net/
// @version      AI Dataset Collector Installer
// @downloadURL  https://github.com/Mulooooo/ai-dataset-collector/blob/main/userscript.js
// ==/UserScript==