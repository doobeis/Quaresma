const fs = require('fs');

try {
    const rawData = fs.readFileSync('src/data/parsed_recipes.json', 'utf8');
    const recipes = JSON.parse(rawData);

    const tsOutput = recipes.map((r, index) => {
        const diff = r.difficulty === 'Easy' ? 'Fácil' : (r.difficulty === 'Medium' ? 'Médio' : 'Difícil');
        let cat = 'Petiscos'; // Default fallback
        if (r.categories && r.categories.includes('snacks')) cat = 'Petiscos';
        else if (r.categories && r.categories.includes('meals')) cat = 'Refeições';
        else if (r.categories && r.categories.includes('biscuits')) cat = 'Biscoitos';
        else if (r.categories && r.categories.includes('cakes')) cat = 'Bolos';

        // Cleanse strings escaping single quotes correctly
        const escapeStr = (str) => {
            if (!str) return '';
            return str.replace(/'/g, "\\'").replace(/\r\n|\n|\r/g, ' ');
        };

        const ingredientsStr = r.ingredients.map((ing, i) => {
            return `      { id: 'ing_${index}_${i}', name: '${escapeStr(ing)}', amount: '-' }`;
        }).join(',\n');

        const instructionsStr = r.instructions.map((inst, i) => {
            return `      { step: ${i + 1}, text: '${escapeStr(inst)}' }`;
        }).join(',\n');

        return `  {
    id: '${r.id || 'r' + index}',
    title: '${escapeStr(r.title)}',
    description: '${escapeStr(r.description)}',
    category: '${cat}',
    imageUrl: '${r.image || 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80'}',
    prepTimeMinutes: ${r.prepTime || 15},
    difficulty: '${diff}',
    audience: 'Todas',
    isPremium: ${r.isPremium || false},
    toxicCheck: ${r.toxicCheck || false},
    ingredients: [
${ingredientsStr}
    ],
    instructions: [
${instructionsStr}
    ]
  }`;
    }).join(',\n');

    let p = 'src/data/mockData.ts';
    let content = fs.readFileSync(p, 'utf8');

    // Replace the entire mockRecipes array.
    const startIdx = content.indexOf('export const mockRecipes: Recipe[] = [');
    const endIdx = content.indexOf('export const mockToxicityGuide: ToxicityItem[] = [');

    if (startIdx !== -1 && endIdx !== -1) {
        let prefix = content.substring(0, startIdx);
        let suffix = content.substring(endIdx);
        let newArray = `export const mockRecipes: Recipe[] = [\n${tsOutput}\n];\n\n`;

        fs.writeFileSync(p, prefix + newArray + suffix);
        console.log('Restoration complete!');
    } else {
        console.log('Could not find injection boundaries.');
    }

} catch (e) {
    console.error(e);
}
