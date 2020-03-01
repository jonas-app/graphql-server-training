const {Schema, model} = require("mongoose");

const PersonSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = model("Person", PersonSchema)
