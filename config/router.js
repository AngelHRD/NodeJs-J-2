// definition des routes de l'application
// les routes déclenchent une fonction(un controlleur) depuis l'adresse dans le navigateur(le path)

//-----------------------------------------------------------
// Importation des modules nécessaires

const express = require("express");
const router = express.Router();
const path = require("path");

// Importation du contrôleur pour la page d'accueil
const homepageController = require(path.join(__dirname, "../src/Controller/HomepageController"));
const aboutController = require(path.join(__dirname, "../src/Controller/AboutController"));
const bookController = require(path.join(__dirname, "../src/Controller/BookController"));

// definition des routes (path + method HTPP(get,post) + controlleur)
// syntaxe : router.<methodHTPP>(path, [middleware, ] controller)
router.get("/", homepageController.index); //Homepage
router.get("/about", aboutController.index);
router.get("/books", bookController.index);
// ou d'autres comme contact, jsp , etc

router.get("/book", bookController.create); // Affiche le formulaire
router.post("/book", bookController.create); // Enregistre les données du formulaire

router.get("/book/:id/edit", bookController.update); // Affiche le formulaire + les données du livre
router.post("/book/:id/edit", bookController.update); // Enregistre les données du formulaire

router.get("/book/:id/delete", bookController.delete); // Affiche un message de confirmation de suppression
router.post("/book/:id/delete", bookController.delete); // Execute la suppression

// Exportation du routeur pour l'utiliser dans l'application principale
module.exports = router;
