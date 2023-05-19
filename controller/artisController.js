const Artis = require('../model/Artis');
const moment = require('moment');

exports.index = async function (req, res) {
    let artis = await Artis.find()
    return res.render("../views/artis/index", {artis, moment})
};
exports.tambah = async function (req, res) {
    return res.render("../views/artis/tambah")
};
exports.store = function (req, res) {
    let artis = new Artis({
        nama_artis: req.body.nama_artis,
        label_artis: req.body.label_artis,
    });
    artis.save().then(data => {
        res.redirect('/artis')
    }).catch(err => console.log(err))
};
exports.artis_details = async function (req, res) {
    let artis = await Artis.findById(req.params.id)
    return res.render("../views/artis/edit", {artis})
};
exports.update = function (req, res) {
    Artis.findByIdAndUpdate(req.params.id, {$set: req.body}).then(data => res.redirect('/artis')).catch(err => console.log(err))
};
exports.destroy = function (req, res) {
    Artis.findByIdAndRemove(req.params.id).then(data =>  res.redirect('/artis')).catch(err => console.log(err))
};