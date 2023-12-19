const fs = require("fs");

function logReqRes(fiename) {
  return (req, res, next) => {
    fs.appendFile(
      "fiename",
      `${Date.now()}: ${req.method}: ${req.path}\n`,
      (err, data) => {
        if (err) {
          console.error("Error apending to file: ", err);
          return res.status(500).json({ error: "Internal server error" });
        }
        next();
      }
    );
    // console.log("it's first middle ware");
    // req.myUsername = "Zine Vinaykumar";
  };
}

module.exports = logReqRes;
