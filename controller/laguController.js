const Lagu = require('../model/Lagu');
const moment = require('moment');

exports.index = async function (req, res) {
    let lagu = await Lagu.find()
    return res.render("../views/lagu/index", {lagu, moment})
};
exports.tambah = async function (req, res) {
    return res.render("../views/lagu/tambah")
};
exports.store = function (req, res) {
    let lagu = new Lagu({
        judul_lagu: req.body.judul_lagu,
        artis: req.body.artis,
        album: req.body.album,
        durasi: req.body.durasi,
        size: req.body.size,
        url_lagu: req.body.url_lagu,
    });
    lagu.save().then(data => {
        res.redirect('/lagu')
    }).catch(err => console.log(err))
};
exports.lagu_details = async function (req, res) {
    let lagu = await Lagu.findById(req.params.id)
    return res.render("../views/lagu/edit", {lagu})
};
exports.update = function (req, res) {
    Lagu.findByIdAndUpdate(req.params.id, {$set: req.body}).then(data => res.redirect('/lagu')).catch(err => console.log(err))
};
exports.destroy = function (req, res) {
    Lagu.findByIdAndRemove(req.params.id).then(data =>  res.redirect('/lagu')).catch(err => console.log(err))
};