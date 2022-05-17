var franc = require("franc");
const langs = require("langs");
const langcode = franc("Alle menslike wesens word vry"); // => 'afr'
// franc("এটি একটি ভাষা একক IBM স্ক্রিপ্ট"); // => 'ben'
const language = langs.where("3", langcode);
console.log(language);
