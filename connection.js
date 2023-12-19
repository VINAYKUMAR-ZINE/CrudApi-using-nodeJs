// const mongoose = require("mongoose");

// mongoose.set("stringQuery", true);
// async function connectMongoDb(url) {
//     return mongoose.connect(url, { useUnifiedTopology: true });
// }

// module.exports = {
//     connectMongoDb,
// };
const mongoose = require("mongoose");

// mongoose.set("stringQuery", true); // Corrected line

async function connectMongoDb(url) {
  return mongoose.connect(url, { useUnifiedTopology: true });
}

module.exports = {
  // Corrected line
  connectMongoDb,
};
