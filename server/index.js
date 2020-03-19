const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const MONGO_HOST = process.env.MONGO_HOST ? process.env.MONGO_HOST : 'localhost';
console.log('MONGO_HOST', MONGO_HOST );

// Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
 next()
})

// Connect MongoDB
mongoose.connect('mongodb+srv://mawaaw:toto@cluster0-q6ika.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// MongoDB Taches Schema
const Tache = mongoose.model('Tache', mongoose.Schema({shortDesc: String}) );

app.get('/taches', (req, res) => {
    console.log("GETTTTTT");
    Tache.find()
        .then(taches => res.status(200).json(taches))
        .catch(error => res.status(400).json({ error }));
});

app.post('/taches', (req, res, next) => {
    delete req.body._id;
    const tacheToAdd = new Tache({
        ...req.body
    });
    console.log("POSTTT " , tacheToAdd);
    tacheToAdd.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);