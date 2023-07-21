const mongoose = require('mongoose');

// Définir un schéma pour la collection "Utilisateurs"
const utilisateurSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
});

// Créer un modèle pour la collection "Utilisateurs" en utilisant le schéma défini
const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

// Exporter le modèle pour pouvoir l'utiliser dans d'autres parties de l'application
module.exports = Utilisateur;
