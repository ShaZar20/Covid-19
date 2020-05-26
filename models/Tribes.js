const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TribeSchema = new Schema (
    {
        _id:mongoose.Types.ObjectId,
        hanaga:String,
        shevet:String,
        unitType:String,
        email:String
    }
  );
  module.exports = mongoose.model("tribes",TribeSchema,'tribes');