// writeFileSync - faylga ma'lumot yozish uchun ishlatiladi.
const fs = require("node:fs");
fs.writeFileSync(
  "papka/writeFileSync.txt",
  "Bu fayl writeFileSync tomonidan yaratildi 😊",
  err => {
    if (err) throw err;
    console.log("Fayl yaratildi");
  }
);

fs.appendFile(
  "papka/writeFileSync.txt",
  " va appendFile tomonidan qo'shildi",
  err => {
    if (err) throw err;
    console.log("Faylga ma'lumot qo'shildi");
  }
);
