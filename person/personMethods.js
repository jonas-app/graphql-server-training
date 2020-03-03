const Person = require("./personModel");
const translations = require("./translations");

const PROF_MAPLE_ID = "5e52911703c7670393f60891";

async function getProfMaple() {
  return Person.findById(PROF_MAPLE_ID);
}

function talkWithProfMaple(name) {
  if (!name) {
    return translations.mapleHello;
  }
  return translations.mapleProblem(name);
}

const extractName = ({ Query: { me } }) => !!me && me().name;
const isProfMaple = ({ _id }) => !!_id && _id.toString() === PROF_MAPLE_ID;

// It is not important to understand the following function.
async function talk(root, args, resolvers) {
  const name = await extractName(resolvers);
  if (isProfMaple(root)) return talkWithProfMaple(name);
  if (name === root.name) return translations.self;
  return "Hmmm..."; // FB talk
}

module.exports = {
  getProfMaple,
  talk
};
