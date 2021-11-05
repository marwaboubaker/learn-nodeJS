const fs = require("fs");
const file = fs.readFileSync(process.argv[2], "utf-8");

let linenumber = 0;
for (let i = 0; i < file.length - 1; i++) {
  if (file[i] === "\n") {
    linenumber++;
  }
}
console.log(linenumber);

//const fs = require('fs')
//const contents = fs.readFileSync(process.argv[2])
//const lines = contents.toString().split('\n').length - 1
//console.log(lines)