const mongoose = require("mongoose");

const ProjectDetailsScehma = new mongoose.Schema(
  {
    nameproject: String,
    description: String,
    dateproject : Date ,
    societe: String,
    picture : Object,
  },
  {
    collection: "ProjectInfo",
  }
);

mongoose.model("ProjectInfo", ProjectDetailsScehma);