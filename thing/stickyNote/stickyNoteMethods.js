const { UserThing } = require("../thingModel");
const { TYPE_STICKY_NOTE } = require("../types");
const { user } = require("../../config");

async function createStickyNote(text) {
  const stickyNote = new UserThing({
    text,
    type: TYPE_STICKY_NOTE,
    signature: user
  });
  const res = await stickyNote.save();
  console.log(res);
  return { stickyNote: res };
}

module.exports = {
  createStickyNote
};
