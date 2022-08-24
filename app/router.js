// Dans le routeur, j'aurai aussi besoin de Express ! On part donc le chercher dans le code source.

const express = require ('express');

// Je dis à mon code que je veux que Express passe sur le routeur de mon serveur

const router = express.Router();

// Je vais chercher tous les controlleurs que j'ai fait jusque à présents pour lier les concepts entre eux

const homeController = require ('./controllers/homeController');

// Je décide que mon controller de la page d'accueil arrivera sur la page d'entrée de mon site. Je précise le controlleur et la méthode ! 

router.get('/', homeController.home);

// Je dois exporter le routeur pour lier les concepts entre eux ! 

module.exports = router;

// La séparation des concepts est respectée mais on va aller encore plus loin: on va créer des controllers pour séparer la logique de la non-logique