// writeFile - faylga ma'lumot yozish uchun ishlatiladi.
const fs = require("fs");

fs.writeFile("papka/write.txt", "Writefile tomonidan yozildi", err => {
  if (err) throw err;
  console.log("write fayl ishladi");
});
fs.appendFile("papka/write.txt", " va appendfile tomonidan qo'shildi", err => {
  if (err) throw err;
  console.log("append fayl qo'shildi");
});