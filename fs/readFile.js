// readFile - fayldan ma'lumot o'qish uchun ishlatiladi.
const fs = require("fs");

fs.readFile("papka/writeFile.txt", "uft8", (err, data) => {
  if (err) throw err;
  console.log(data);
});