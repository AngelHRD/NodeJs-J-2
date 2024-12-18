// Tips : console.log("HELLO WORLD"); // Pour verifier si Nodemon marche bien

//----------------------------Importation des librairies nécessaires-------------------------------------------------
// Importation des librairies nécessaires
const express = require("express");
const ejs = require("ejs");
const path = require("path");

const config = require("./config/config");

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

// Definition du type de fichier (vues)(pas obligatoire)
app.set("view engine", "html"); // Par defaut les views sont en ".ejs"
app.engine("html", ejs.__express); // donc on impose les vues en ".html"

// Definition de l'accés au repertoire public (avoir accés via le nav)
// -> Si le css est dans /public/styles/main.css
// --> l'accés sera :"http://site.com/styles/main.css"
app.use(express.static(path.join(__dirname, "public")));

// Acces à bootstrap
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css/")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/js/")));

// Permet de lire les données envoyées via le formulaire
app.use(express.urlencoded({ extended: true }));

//Exports de variable js (config.js vers les vues HTML)
// app.locals.app_title = config.app_title; // Pour un seul
app.locals.config = config;

// Middleware pour utiliser les routes définies dans "router.js"
app.use(require(path.join(__dirname, "./config/router")));

//-----------------------------------------------------------------------------

// Démarrage du serveur sur le port configuré
app.listen(port, () => console.log(`Serveur en écoute... htpp://localhost:${port} `));
