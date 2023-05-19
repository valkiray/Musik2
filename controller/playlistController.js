const Playlist = require('../model/Playlist');
const moment = require('moment');

exports.index = async function (req, res) {
    let playlist = await Playlist.find()
    return res.render("../views/playlist/index", {playlist, moment})
};
exports.tambah = async function (req, res) {
    return res.render("../views/playlist/tambah")
};
exports.store = function (req, res) {
    let playlist = new Playlist({
        judul_playlist: req.body.judul_playlist,
        nama_user: req.body.nama_user,
    });
    playlist.save().then(data => {
        res.redirect('/playlist')
    }).catch(err => console.log(err))
};
exports.playlist_details = async function (req, res) {
    let playlist = await Playlist.findById(req.params.id)
    return res.render("../views/playlist/edit", {playlist})
};
exports.update = function (req, res) {
    Playlist.findByIdAndUpdate(req.params.id, {$set: req.body}).then(data => res.redirect('/playlist')).catch(err => console.log(err))
};
exports.destroy = function (req, res) {
    Playlist.findByIdAndRemove(req.params.id).then(data =>  res.redirect('/playlist')).catch(err => console.log(err))
};