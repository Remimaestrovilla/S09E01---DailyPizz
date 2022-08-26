// Avant toute chose, je part chercher toutes mes données en lien avec les tapas de la boutique

const tapas = require ('./../../data/tapasData.json')

// Ici, je vais réaliser un controller en lien avec les tapas de la boutique

const tapasController = {

    // Je réalise une méthode qui va me permettre d'afficher toutes les tapas d'un coup

    showTapas: function (request, response) {

        response.render('tapas', {tapas}); // Je distribue la vue tapas qui contiendra les données stockées dans la fonction tapas

    },

    // Maintenant, cela se complique un petit peu, on va faire des routes paramétrées pour afficher les détails de chacun de nos produits

    tapasDetail: function (request, response) {

        // Je récupère l'ID demandé, comme il s'agit d'un nombre il faut transformer le string en nombre

        const id = Number(request.params.id);

        // Je fais maintenant en sorte de récupérer la bonne valeur en paramètre

        const foundTapas = tapas.find((testedTapas) => {

            // Si l'ID du produit est celui qui est cherché, alors find le retournera et on le mémorisera dans la constante appropriée. Sinon, on passe !

            return testedTapas.id === id;

        });

        // Je réalise ensuite une vue qui va permettre d'afficher le détail de chacun des produits

        response.render('tapasDetail', {tapas: foundTapas});

    }

};

// Comme toujours, je n'oublie pas d'exporter le controller pour permettre la liaison des concepts

module.exports = tapasController;