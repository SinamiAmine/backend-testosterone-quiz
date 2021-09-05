const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
const express = require("express");

let questionSchema = new Schema({
  question: { type: String },
  reponses: [{ type: Schema.Types.ObjectId, ref: "Reponse" }],
});

module.exports = mongoose.model("Question", questionSchema);
