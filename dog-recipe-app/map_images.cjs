const fs = require('fs');

const dataPath = 'src/data/mockData.ts';
let content = fs.readFileSync(dataPath, 'utf8');

const categoryToImageMap = {
    'Refeições': '/recipes/refeição.png',
    'Petiscos': '/recipes/petiscos.png',
    'Biscoitos': '/recipes/biscoitos.png',
    'Bolos': '/recipes/bolos.png',
    'Dietas Especiais': '/recipes/dietas especiais.png'
};

const recipeRegex = /(\{\s*id:\s*'.+?',\s*title:\s*'.+?'[\s\S]*?category:\s*')(.+?)('[\s\S]*?imageUrl:\s*').+?('[\s\S]*?\})/g;

let updatedContent = content.replace(recipeRegex, (match, prefix1, category, prefix2, suffix) => {
    const imageUrl = categoryToImageMap[category] || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80';
    return prefix1 + category + prefix2 + imageUrl + suffix;
});

fs.writeFileSync(dataPath, updatedContent);
console.log('Images successfully mapped to categories!');
