const Utilisateur = require('./chemin/vers/votre/modele');

const utilisateurId = 'ID_DE_L_UTILISATEUR_A_METTRE_A_JOUR';
const miseAJour = { nom: 'Nouveau nom', age: 35 };

Utilisateur.findByIdAndUpdate(utilisateurId, miseAJour, { new: true })
  .then((utilisateurMaj) => {
    console.log('Utilisateur mis à jour:', utilisateurMaj);
  })
  .catch((err) => {
    console.error('Erreur lors de la mise à jour de l\'utilisateur:', err);
  });
