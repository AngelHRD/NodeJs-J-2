//JSP PQ ON A FAIT CA

const { request } = require("express");

// index (liste de livres)
exports.index = (request, response) => {
  response.render("pages/books/index");
};
// create (creer un livre)
exports.create = (request, response) => {
  console.log(request.body);

  response.render("pages/books/create");
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
