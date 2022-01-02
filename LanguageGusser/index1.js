const franc = require("franc");
const langs = require("langs");

const input = process.argv[2];
const langCode = franc(input);
console.log(langCode);