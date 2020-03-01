const { Thing, UserThing } = require("./thingModel");

async function inspectRoom(type) {
  const query = !!type ? { type } : {};
  const things = await Thing.find(query);
  const userThings = await UserThing.find(query);
  return [...things, ...userThings];
}

module.exports = {
  inspectRoom
};
