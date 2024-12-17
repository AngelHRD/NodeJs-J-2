// definition des routes de l'application
// les routes déclenchent une fonction(un controlleur) depuis l'adresse dans le navigateur(le path)

//-----------------------------------------------------------
// Importation des modules nécessaires

const express = require("express");
const router = express.Router();
const path = require("path");

// Importation du contrôleur pour la page d'accueil
const homepageController = require(path.join(__dirname, "../src/Controller/HomepageController"));

// 2. definition des routes (path + method HTPP(get,post) + controlleur)
// syntaxe : router.<methodHTPP>(path, [middleware, ] controller)

// Homepage
router.get("/", homepageController.index);
// ou d'autres comme about, contact , etc

// Exportation du routeur pour l'utiliser dans l'application principale
module.exports = router;
