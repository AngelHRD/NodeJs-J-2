// Import des librairies
const mongoose = require("mongoose");

// Création du schema de données
// C'est comme un validateur pour que le client ne fasse pas n'importe quoi
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: false,
  },

  price: {
    type: Number,
    require: true,
  },

  createdAt: {
    // Enregistre sous ce format : 2024-12-18T12:34:56.789Z
    type: Date,
    default: Date.now,
  },
});

// Création du model de données
// Modéle = Schema + logique de la données
const Book = mongoose.model("Book", BookSchema);

// Export du model de donénes
module.exports = Book;
