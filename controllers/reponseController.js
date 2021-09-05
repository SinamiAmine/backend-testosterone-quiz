const Reponse = require("../models/reponse");

module.exports = {
  findAll: async (req, res) => {
    let found = await Reponse.find();
    res.json(found);
  },

  updateReponse: async (req, res) => {
    await Reponse.updateOne(
      { _id: req.params.id },
      { ...req.body, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  },
  createReponse: async (req, res) => {
    let newReponse = new Reponse(req.body);
    let savedReponse = await newReponse.save();
    res.json(savedReponse);
  },

  deleteReponse: async (req, res) => {
    await Reponse.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet Suprimmé" }))
      .catch((error) => res.status(400).json({ error }));
  },
};
