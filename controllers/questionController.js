const Question = require("../models/question");

module.exports = {
  updateQuestion: async (req, res) => {
    await Question.updateOne(
      { _id: req.params.id },
      { ...req.body, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Objet modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  },
  allQuestion: async (req, res) => {
    let allQuestions = await Question.find().populate("reponses").exec();
    res.json(allQuestions);
  },

  createQuestion: async (req, res) => {
    let newQuestion = new Question(req.body);
    let savedQuestion = await newQuestion.save();
    res.json(savedQuestion);
  },

  deleteQuestion: async (req, res) => {
    await Question.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Objet Suprimmé" }))
      .catch((error) => res.status(400).json({ error }));
  },
};
