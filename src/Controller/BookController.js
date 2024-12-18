// Import des librairies
const { validationResult } = require("express-validator");

// index (liste de livres)
exports.index = (request, response) => {
  response.render("pages/books/index");
};

// create (creer un livre)
exports.create = (request, response) => {
  // console.log(request.body);// Pour voir (dans le terminal) ce qu'on récup du formulaire

  // Recupération des données du formulaire
  // Les données ont la valeur "undefined" si le controller est executé avec la methode GET
  const { title, description, price } = request.body;

  // Recupération du résultat du controle du formulaire (BookValidation)
  const errors = validationResult(request);

  // Procédure d'enregistrement de la données SI :
  // -> La méthode de request est POST
  // -> ET que la liste des "errors" est vide
  if (request.method === "POST" && errors.isEmpty()) {
    console.log("ENREGISTRE EN BDD");
  }

  response.render("pages/books/create", {
    errors: errors.array(),
    title: title || "",
    description: description || "",
    price: price || "",
  });
};

// read (lire les détails d'un livre)
exports.read = (request, response) => {
  response.render("pages/books/read");
};

// update (modifier les données d'un livre)
exports.update = (request, response) => {
  response.render("pages/books/update");
};

// delete (supprimer un livre)
exports.delete = (request, response) => {
  response.render("pages/books/delete");
};
