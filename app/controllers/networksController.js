// Ici, je vais réaliser un controller en lien avec les réseaux sociaux de la boutique

const networkController = {

    // Je réalise une méthode qui va me permettre d'afficher la vue affichant les réseaux sociaux

    socialNetworks: function (request, response) {

        response.render('networks');

    }

};

// Comme toujours, je n'oublie pas d'exporter le controller pour permettre la liaison des concepts

module.exports = networkController;