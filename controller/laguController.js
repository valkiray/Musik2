const Lagu = require('../model/Lagu');
const moment = require('moment');
const ytdl = require('ytdl-core');

exports.index = async function (req, res) {
  let lagu = await Lagu.find();
  return res.render("../views/lagu/index", { lagu, moment });
};

exports.tambah = async function (req, res) {
  return res.render("../views/lagu/tambah");
};

exports.store = async function (req, res) {
  try {
    const urlLagu = `https://www.youtube.com/watch?v=${req.body.urlLagu}`;
    const info = await ytdl.getInfo(urlLagu);
    const duration = info.videoDetails.lengthSeconds;
    const size = info.videoDetails.lengthSeconds;

    let lagu = new Lagu({
      judul_lagu: req.body.judul_lagu,
      artis: req.body.artis,
      album: req.body.album,
      durasi: duration,
      size: size,
      urlLagu: urlLagu,
    });

    lagu = await lagu.save();
    res.redirect('/lagu');
  } catch (err) {
    console.log(err);
    res.redirect('/lagu');
  }
};

exports.lagu_details = async function (req, res) {
  let lagu = await Lagu.findById(req.params.id);
  return res.render("../views/lagu/edit", { lagu });
};

exports.update = function (req, res) {
  Lagu.findByIdAndUpdate(req.params.id, { $set: req.body })
    .then(data => res.redirect('/lagu'))
    .catch(err => console.log(err));
};

exports.destroy = function (req, res) {
  Lagu.findByIdAndRemove(req.params.id)
    .then(data => res.redirect('/lagu'))
    .catch(err => console.log(err));
};
