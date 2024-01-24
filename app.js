const express = require("express"); // Transformer l'app en serveur pour pouvoir faire des requêtes HTTP -> Importer Express
const path = require('path'); // Fonction Node pour créer un chemin d'accès
const cors = require("cors");
const sequelize = require("./src/db/sequelize");

const app = express(); // Initier variable 'app' dans express.js

// Récupérer les fichiers
//require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const port = process.env.PORT || 3000;

app.use(cors());

sequelize.initDb()

app.get('/', (req, res) => {
    res.json('Hello, Heroku ! 👊🏻')
})
// Ici, nous placerons nos futurs points de terminaison.
require("./src/routes/adds/findAllAdds")(app)
require("./src/routes/adds/findSingleAdd")(app)
require("./src/routes/adds/createAdd")(app)
require("./src/routes/adds/updateAdd")(app)
require("./src/routes/adds/deleteAdd")(app) //  // Raccourci de syntaxe
require("./src/routes/login")(app)

// Gestion des erreurs 404
app.use(({res})=> {
    const message = 'Impossible de trouver la ressource demandée ! Vous pouvez essayer une autre URL.'
    res.status(404).json({message})
})

// Accueillir des requêtes côté client (HTTP) sur le port 8000
app.listen(port, () => {
    console.log(`Serveur listening on port ${port}`);
});