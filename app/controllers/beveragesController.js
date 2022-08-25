// Avant toute chose, je part chercher toutes mes données en lien avec les boissons de la boutique

const beverages = require ('./../../data/beveragesData.json');

// Ici, je vais réaliser un controller en lien avec les boissons de la boutique

const beveragesController = {

    // Je réalise une méthode qui va me permettre d'afficher tout les boissons d'un coup

    showBeverages: function (request, response) {

        response.render('beverages', {beverages}); // Je distribue la vue boissons qui contiendra les données stockées dans la fonction boissons

    },

      // Maintenant, cela se complique un petit peu, on va faire des routes paramétrées pour afficher les détails de chacun de nos produits

      beveragesDetail: function (request, response) {

        // Je récupère l'ID demandé, comme il s'agit d'un nombre il faut transformer le string en nombre

        const ID = Number(request.params.ID);

        // Je fais maintenant en sorte de récupérer la bonne valeur en paramètre

        const foundBeverages = beverages.find((testedBeverages) => {

            // Si l'ID du produit est celui qui est cherché, alors find le retournera et on le mémorisera dans la constante appropriée. Sinon, on passe !

            return testedBeverages.ID === ID

        });

        // Je réalise ensuite une vue qui va permettre d'afficher le détail de chacun des produits

        response.render('beveragesDetail', {beverages: foundBeverages});

    }

};

// Comme toujours, je n'oublie pas d'exporter le controller pour permettre la liaison des concepts

module.exports = beveragesController;