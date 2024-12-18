// Affiche la page d'accueil
exports.index = (request, response) => {
  // response.send("Hello there"); // Envoie un fichier texte "brute" pour la page d'accueil

  response.render("pages/homepage/index"); // Envoie un fichier de vue pour la page d'accueil
};
