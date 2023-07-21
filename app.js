// Initialisation de express
const express = require('express');
const app = express();
const port = 3000; 
/*
// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/TP-node', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
*/

app.get('/', (req, res) => {
    res.send('Bienvenue sur notre API !');
  });





// initialisation du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
// ancer le serveur avec la commande 'node app.js'