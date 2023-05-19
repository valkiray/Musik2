const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LaguSchema = new Schema({
    judul_lagu: { type: String, required: true, max: 70 },
    artis: { type: String, required: true },
    album: { type: String, required: true },
    durasi: { type: String },
    size: { type: String },
    urlLagu: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Lagu', LaguSchema);