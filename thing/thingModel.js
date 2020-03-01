const { Schema, model } = require("mongoose");
const { user } = require("../config");
const { TYPE_STICKY_NOTE, TYPE_CHAIR, TYPE_COMPUTER } = require("./types");

const ThingSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: [TYPE_STICKY_NOTE, TYPE_CHAIR, TYPE_COMPUTER],
      required: true
    },
    signature: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = {
  Thing: model("Thing", ThingSchema),
  UserThing: model("Thing", ThingSchema, user)
};
