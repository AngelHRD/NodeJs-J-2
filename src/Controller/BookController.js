//JSP PQ ON A FAIT CA

const { request } = require("express");

// index (liste de livres)
exports.index = (resquest, response) => {
  response.render("pages/books/index");
};
// create (creer un livre)
exports.create = (resquest, response) => {
  console.log(request.body);

  response.render("pages/books/create");
};
// read (lire les détails d'un livre)
exports.read = (resquest, response) => {
  response.render("pages/books/read");
};
// update (modifier les données d'un livre)
exports.update = (resquest, response) => {
  response.render("pages/books/update");
};
// delete (supprimer un livre)
exports.delete = (resquest, response) => {
  response.render("pages/books/delete");
};
