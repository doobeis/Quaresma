const fs = require('fs');
const path = 'c:/Users/User/.gemini/antigravity/skills/antigravity-awesome-skills/dog-recipe-app/src/data/mockData.ts';
let content = fs.readFileSync(path, 'utf8');

const recipesStr = fs.readFileSync('c:/Users/User/.gemini/antigravity/skills/antigravity-awesome-skills/dog-recipe-app/src/data/parsed_recipes.json', 'utf8');
const parsedRecipes = JSON.parse(recipesStr);

const escapeStr = s => s.replace(/'/g, "\\'").replace(/\r\n|\n/g, ' ');

const recipesToInsertText = parsedRecipes.map(r => `  {
    id: '${r.id}',
    title: '${escapeStr(r.title)}',
    description: '${escapeStr(r.description)}',
    image: '${r.image}',
    prepTime: ${r.prepTime},
    difficulty: '${r.difficulty}',
    toxicCheck: ${r.toxicCheck},
    categories: ${JSON.stringify(r.categories)},
    isPremium: ${r.isPremium},
    ingredients: [
${r.ingredients.map(i => `      '${escapeStr(i)}'`).join(',\n')}
    ],
    instructions: [
${r.instructions.map(i => `      '${escapeStr(i)}'`).join(',\n')}
    ]
  }`).join(',\n');

content = content.replace(/export const mockRecipes: Recipe\[\] = \[/, `export const mockRecipes: Recipe[] = [\n${recipesToInsertText},`);

fs.writeFileSync(path, content, 'utf8');
console.log('Recipes added successfully!');
