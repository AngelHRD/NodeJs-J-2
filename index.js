// Tips : console.log("HELLO WORLD"); // Pour verifier si Nodemon marche bien

//----------------------------Importation des librairies nécessaires-------------------------------------------------
// Importation des librairies nécessaires
const express = require("express");
const ejs = require("ejs");
const path = require("path");

//-----------------------------------------------------------------------------

// Création d'une instance de l'application Express
const app = express();
const port = 3000;

//-----------------------------------------------------------------------------

// Les configuration de l'application
// --> acces public
// --> gestion des templates
// --> connexion base de données
// --> server

// Définir le répertoire des templates (vues)
app.set("views", path.join(__dirname, "templates")); // Chemin absolue et de facon dynamique avec le __dirname

// Definition du type de fichier (vues)
app.set("view engine", "html"); // Par defaut les views sont en ".ejs"
app.engine("html", ejs.__express); // donc on impose les vues en ".html"

// Middleware pour utiliser les routes définies dans "router.js"
app.use(require(path.join(__dirname, "./config/router")));

//-----------------------------------------------------------------------------

// Démarrage du serveur sur le port configuré
app.listen(port, () => console.log(`Server is listening on htpp://localhost:${port} `));
