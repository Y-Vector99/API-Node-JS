const Utilisateur = require('./chemin/vers/votre/modele');

const utilisateurId = 'ID_DE_L_UTILISATEUR_A_SUPPRIMER';

Utilisateur.findByIdAndRemove(utilisateurId)
  .then((utilisateurSupprime) => {
    console.log('Utilisateur supprimé:', utilisateurSupprime);
  })
  .catch((err) => {
    console.error('Erreur lors de la suppression de l\'utilisateur:', err);
  });
