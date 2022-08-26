// Avant toute chose, je part chercher toutes mes données en lien avec les désserts de la boutique

const desserts = require ('./../../data/dessertsData.json');

// Ici, je vais réaliser un controller en lien avec les desserts de la boutique

const dessertsController = {

    // Je réalise une méthode qui va me permettre d'afficher tout les desserts d'un coup

    showDesserts: function (request, response) {

        response.render('desserts', {desserts}); // Je distribue la vue desserts qui contiendra les données stockées dans la fonction desserts

    },

      // Maintenant, cela se complique un petit peu, on va faire des routes paramétrées pour afficher les détails de chacun de nos produits

      dessertsDetail: function (request, response) {

        // Je récupère l'ID demandé, comme il s'agit d'un nombre il faut transformer le string en nombre

        const id = Number(request.params.id);

        // Je fais maintenant en sorte de récupérer la bonne valeur en paramètre

        const foundDesserts = desserts.find((testedDesserts) => {

            // Si l'ID du produit est celui qui est cherché, alors find le retournera et on le mémorisera dans la constante appropriée. Sinon, on passe !

            return testedDesserts.id === id;

        });

        // Je réalise ensuite une vue qui va permettre d'afficher le détail de chacun des produits

        response.render('dessertsDetail', {desserts: foundDesserts});

    }

};

// Comme toujours, je n'oublie pas d'exporter le controller pour permettre la liaison des concepts

module.exports = dessertsController;