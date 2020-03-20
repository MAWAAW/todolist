const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tacheRoutes = require('./tacheRoutes');
const userRoutes = require('./userRoutes');

// Constants
const PORT = 8080;

// Express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routing
app.use('/tache', tacheRoutes);
app.use('/auth', userRoutes);

// Cross Origin middleware
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// Connect MongoDB
mongoose.connect('mongodb+srv://mawaaw:toto@cluster0-q6ika.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.listen(PORT);