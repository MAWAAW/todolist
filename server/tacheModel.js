const mongoose = require('mongoose');

const TacheSchema = mongoose.Schema({
    shortDesc: { type: String, required: true },
    longDesc: { type: String, required: true },
    dateEcheance: { type: Date, required: true },
    etat: { type: String, required: true },
});

module.exports = mongoose.model('Tache', TacheSchema);