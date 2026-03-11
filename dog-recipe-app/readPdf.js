const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('c:/Users/User/.gemini/antigravity/skills/antigravity-awesome-skills/dog-recipe-app/src/data/receitas.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => console.error("Error reading PDF:", err));
