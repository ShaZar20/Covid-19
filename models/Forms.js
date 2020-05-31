const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FormSchema = new Schema (
    {
        childName:String,
        childId:String,
        hanaga:String,
        shevet:String,
        gil:String,
        guideName:String,
        check1:Boolean,
        check2:Boolean,
        check3:Boolean,
        parentName:String,
        parentId:String,
        validator:Boolean,
        date:String
    }
  );
  module.exports = mongoose.model("forms",FormSchema,'forms');