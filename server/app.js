// Transformer l'app en serveur pour pouvoir faire des requêtes HTTP -> Importer Express
const express = require("express");
// Fonction Node pour créer un chemin d'accès
const path = require('path');
// Appel de MySQL
const mysql = require("mysql");
// Appel de CORS
const cors = require("cors");


// Initier variable 'app' dans express.js
const app = express();

// Récupérer les fichiers
require('dotenv').config({ path: path.resolve(__dirname, './.env') });


// CONNEXION À LA BDD
app.get("/", cors({ origin: ["http://localhost:8000", "http://localhost:5173"], 
					credentials: true,
					allowedHeaders: ["sessionId", "Content-Type"],
					exposedHeaders: ["sessionId"],
					methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
					preflightContinue: false,
				}), (req, res) => {
	// Connexion à une bdd
	const dbConnexion = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'root',
	    database: 'topannonces',
	    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'
	});
	dbConnexion.connect((err) => {
	    if(err){
	        console.log("Database connexion error : " + err.stack)
	        return;
	    }
	    console.log("Database connexion established.")
	});

	// Récupération des données en json sur navigateur
	dbConnexion.query("SELECT * FROM topa_listing", (err, rows, fields) => {
	    if(err) throw err;
	    res.json(rows)
	});

	module.exports = dbConnexion;
    dbConnexion.end();
});



// Accueillir des requêtes côté client (HTTP) sur le port 8000
app.listen(process.env.PORT, () => {
    console.log(`Serveur listening on port ${process.env.PORT}`);
});