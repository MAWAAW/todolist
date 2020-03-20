const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

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
const TacheSchema = mongoose.Schema({
    shortDesc: { type: String, required: true },
    longDesc: { type: String, required: true },
    dateEcheance: { type: Date, required: true },
    etat: { type: String, required: true },
  });

const Tache = mongoose.model('Tache', TacheSchema);

app.get('/taches', (req, res) => {
    Tache.find()
        .then(taches => res.status(200).json(taches))
        .catch(error => res.status(400).json({ error }));
});

app.get('/taches/:id', (req, res, next) => {
    Tache.findOne({ _id: req.params.id })
      .then(tache => res.status(200).json(tache))
      .catch(error => res.status(404).json({ error }));
  });

app.post('/taches', (req, res, next) => {
    const tacheToAdd = new Tache({
        ...req.body
    });
    tacheToAdd.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.put('/taches/:id', (req, res, next) => {
    Tache.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.delete('/taches/:id', (req, res, next) => {
    Tache.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  });

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);