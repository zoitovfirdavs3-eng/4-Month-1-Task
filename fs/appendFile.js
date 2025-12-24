// appendFile - faylga ma'lumot qo'shish uchun ishlatiladi.
const fs = require("fs");

fs.writeFile("papka/appendFile.txt", "hello append file", err => {
  if (err) throw err;
  console.log("Fayl yaratildi");
});

fs.appendFile(
  "papka/appendFile.txt",
  " sen appendFiletomonidan yaratilding",
  err => {
    if (err) throw err;
    console.log("Fayl o'zgartirildi");
  }
);
