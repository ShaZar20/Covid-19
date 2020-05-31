const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TribeSchema = new Schema (
    {
        _id:mongoose.Types.ObjectId,
        bigunit:String,
        unit:String,
        level:String,
        email:String
    }
  );
  module.exports = mongoose.model("accounts",TribeSchema,'accounts');