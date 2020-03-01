const { Thing, UserThing } = require("./thingModel");

async function inspectRoom(type, limit) {
  const query = !!type ? { type } : {};
  const things = await Thing.find(query).limit(limit);
  const userThings = await UserThing.find(query);
  return [...things, ...userThings];
}

module.exports = {
  inspectRoom
};
