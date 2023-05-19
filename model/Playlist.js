const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PlaylistSchema = new Schema({
    judul_playlist: {type: String, required: true, max: 70},
    nama_user: {type: String, required: true},
    }, { timestamps: true });

module.exports = mongoose.model('Playlist', PlaylistSchema);