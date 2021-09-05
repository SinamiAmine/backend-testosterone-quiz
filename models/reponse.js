const mongoose = require("mongoose");
const { model, Schema } = require("mongoose");
const express = require("express");

let reponseSchema = new Schema({
  reponse: { type: String },
  value: { type: Number },
});

module.exports = mongoose.model("Reponse", reponseSchema);
