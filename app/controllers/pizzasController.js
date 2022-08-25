// Avant toute chose, je part chercher toutes mes données en lien avec les pizzas de la boutique

const pizzas = require ('./../../data/pizzasData.json');

// Ici, je vais réaliser un controller en lien avec les pizzas de la boutique

const pizzasController = {

    // Je réalise une méthode qui va me permettre d'afficher toutes les pizzas d'un coup

    showPizzas: function (request, response) {

        response.render('pizzas', {pizzas}); // Je distribue la vue pizzas qui contiendra les données stockées dans la fonction pizzas

    },

    // Maintenant, cela se complique un petit peu, on va faire des routes paramétrées pour afficher les détails de chacun de nos produits

    pizzasDetail: function (request, response) {

        // Je récupère l'ID demandé, comme il s'agit d'un nombre il faut transformer le string en nombre

        const ID = Number(request.params.ID);

        // Je fais maintenant en sorte de récupérer la bonne valeur en paramètre

        const foundPizzas = pizzas.find((testedPizzas) => {

            // Si l'ID du produit est celui qui est cherché, alors find le retournera et on le mémorisera dans la constante appropriée. Sinon, on passe !

            return testedPizzas.ID === ID

        });

        // Je réalise ensuite une vue qui va permettre d'afficher le détail de chacun des produits

        response.render('pizzasDetail', {pizzas: foundPizzas});

    }

};

// Comme toujours, je n'oublie pas d'exporter le controller pour permettre la liaison des concepts

module.exports = pizzasController;