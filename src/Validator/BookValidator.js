// Import des librairies
const { check } = require("express-validator");

// Export des contraintes
exports.create = [
  // Validation des champs
  check("title").not().isEmpty().withMessage("Title is required"),

  check("price")
    .not()
    .isEmpty()
    .withMessage("Price is required")
    .not()
    .isFloat({ max: 100 })
    .withMessage("Price must be less than or equal to 100"),
];
