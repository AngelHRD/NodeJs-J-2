// index (liste de livres)
exports.index = (request, response) => {
  response.render("pages/books/index");
};

// create (creer un livre)
exports.create = (request, response) => {
  // console.log(request.body);// Pour voir (dans le terminal) ce qu'on récup du formulaire

  const { title, description, price } = request.body;

  if (request.method === "POST") {
    console.log(title);
  }

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
