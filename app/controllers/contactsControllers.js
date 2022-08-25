// Ici, je vais réaliser un controller en lien avec les moyens de contacts de la boutique

const contactsController = {

    // Je réalise une méthode qui va me permettre d'afficher la vue affichant les moyens de contacter la pizzéria

    contacts: function (request, response) {

        response.render('contacts');

    }

};

// Comme toujours, je n'oublie pas d'exporter le controller pour permettre la liaison des concepts

module.exports = contactsController;