const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ArtisSchema = new Schema({
    nama_artis: {type: String, required: true, max: 70},
    label_artis: {type: String, required: true},
    }, { timestamps: true });

module.exports = mongoose.model('Artis', ArtisSchema);