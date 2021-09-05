const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const User = require("./models/user");
var jwt = require("jsonwebtoken");
require("dotenv").config();
require("./config/database").connect();
const auth = require("./middleware/auth");
app.use(cors());
app.use(express.json({ limit: "50mb" }));

const {
  updateQuestion,
  allQuestion,
  createQuestion,
  deleteQuestion,
} = require("./controllers/questionController");
const {
  findAll,
  updateReponse,
  createReponse,
  deleteReponse,
} = require("./controllers/reponseController");

const { createUser } = require("./controllers/userController");

app.get("/questions", allQuestion);

app.get("/reponses", findAll);

app.post("/users/newuser", createUser);

app.post("/questions/newquestion", createQuestion);

app.post("/r/newreponse", createReponse);

// This should be the last route else any after it won't work
app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});

module.exports = app;
