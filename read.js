const Utilisateur = require('./chemin/vers/votre/modele');

Utilisateur.find()
  .then((utilisateurs) => {
    console.log('Liste des utilisateurs:', utilisateurs);
  })
  .catch((err) => {
    console.error('Erreur lors de la récupération des utilisateurs:', err);
  });
