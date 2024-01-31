const express = require('express')
//const favicon = require('serve-favicon')
const bodyParser = require('body-parser')
const cors = require('cors')
const sequelize = require('./src/db/sequelize')

const app = express()
const port = process.env.PORT || 3000

app
//.use(favicon(__dirname + '/favicon.ico'))
.use(bodyParser.json())
.use(cors())

sequelize.initDb()

app.get('/', (req, res) => {
  res.json('Hello, Heroku ! 👋')
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