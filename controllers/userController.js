const User = require("../models/user");

module.exports = {
  createUser: async (req, res) => {
    let newReponse = new User(req.body);
    let savedReponse = await newReponse.save();
    res.json(savedReponse);
  },
};
