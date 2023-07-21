const Utilisateur = require('./chemin/vers/votre/modele');

const nouvelUtilisateur = new Utilisateur({
  nom: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
});

nouvelUtilisateur.save()
  .then((utilisateur) => {
    console.log('Nouvel utilisateur enregistré:', utilisateur);
  })
  .catch((err) => {
    console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', err);
  });
