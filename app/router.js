// Dans le routeur, j'aurai aussi besoin de Express ! On part donc le chercher dans le code source.

const express = require ('express');

const beveragesController = require('./controllers/beveragesController');

const contactController = require('./controllers/contactsControllers');

const dessertsController = require('./controllers/dessertsController');

// Je dis à mon code que je veux que Express passe sur le routeur de mon serveur

const router = express.Router();

// Je vais chercher tous les controlleurs que j'ai fait jusque à présents pour lier les concepts entre eux

const homeController = require ('./controllers/homeController');

const networkController = require('./controllers/networksController');

const pizzasController = require('./controllers/pizzasController');

const tapasController = require ('./controllers/tapasController');

const contactsController = require ('./controllers/contactsControllers');

// Je décide que mon controller de la page d'accueil arrivera sur la page d'entrée de mon site. Je précise le controlleur et la méthode ! 

router.get('/', homeController.home);

// Je dresse le chemin d'accès pour les liens dans le header, cela facilite grandement la navigation

router.get('/networks', networkController.socialNetworks);

router.get('/contacts', contactsController.contacts);

// Je dresse le chemin d'accès pour toutes les autres pages du site

router.get('/pizzas', pizzasController.showPizzas);

router.get('/tapas', tapasController.showTapas);

router.get('/desserts', dessertsController.showDesserts);

router.get('/beverages', beveragesController.showBeverages);

// Je dresse enfin le chemin d'accès de toutes les routes paramétrées de mon site

router.get('/tapas/:id', tapasController.tapasDetail);

router.get('/pizzas/:id', pizzasController.pizzasDetail);

router.get('/desserts/:id', dessertsController.dessertsDetail);

router.get('/beverages/:id', beveragesController.beveragesDetail);

// Je dois exporter le routeur pour lier les concepts entre eux ! 

module.exports = router;

// La séparation des concepts est respectée mais on va aller encore plus loin: on va créer des controllers pour séparer la logique de la non-logique