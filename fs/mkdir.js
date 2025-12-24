const fs = require("fs");
fs.mkdir("papka2", err => {
  if (err) throw err;
  console.log("papka yaratildi");
});
