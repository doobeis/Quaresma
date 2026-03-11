const fs = require('fs');

const patches = {
    'Barrinha de sementes': [
        { id: 'ing_b1', name: 'Sementes de abóbora', amount: '1 xícara' },
        { id: 'ing_b2', name: 'Sementes de girassol', amount: '1 xícara' },
        { id: 'ing_b3', name: 'Ovos', amount: '2' },
        { id: 'ing_b4', name: 'Mel', amount: '1 colher de sopa' },
        { id: 'ing_b5', name: 'Canela', amount: '1 pitada' },
        { id: 'ing_b6', name: 'Óleo de coco', amount: 'para untar' }
    ],
    'Almôndegas de sardinha': [
        { id: 'ing_as1', name: 'Sardinha em lata (sem óleo)', amount: '1 lata' },
        { id: 'ing_as2', name: 'Farinha de aveia', amount: '1 xícara' },
        { id: 'ing_as3', name: 'Óvo', amount: '1' }
    ],
    'Bolo verde de caneca': [
        { id: 'ing_bv1', name: 'Farinha de aveia', amount: '3 colheres de sopa' },
        { id: 'ing_bv2', name: 'Folhas de espinafre ou couve', amount: '1 punhado' },
        { id: 'ing_bv3', name: 'Ovo', amount: '1' },
        { id: 'ing_bv4', name: 'Óleo de coco', amount: '1 colher de sopa' }
    ],
    'Pão de mandioquinha': [
        { id: 'ing_pm1', name: 'Mandioquinha cozida e amassada', amount: '2 xícaras' },
        { id: 'ing_pm2', name: 'Polvilho doce', amount: '1 xícara' },
        { id: 'ing_pm3', name: 'Polvilho azedo', amount: '1 xícara' },
        { id: 'ing_pm4', name: 'Azeite', amount: '1/3 xícara' },
        { id: 'ing_pm5', name: 'Água', amount: 'aos poucos' }
    ],
    'Cãonetone': [
        { id: 'ing_cn1', name: 'Ovos', amount: '3' },
        { id: 'ing_cn2', name: 'Batata doce cozida e amassada', amount: '1 xícara' },
        { id: 'ing_cn3', name: 'Coco ralado', amount: '1/2 xícara' },
        { id: 'ing_cn4', name: 'Leite de coco', amount: '1/2 xícara' },
        { id: 'ing_cn5', name: 'Melaço de cana', amount: '2 colheres de sopa' },
        { id: 'ing_cn6', name: 'Fécula de batata', amount: '1 xícara' },
        { id: 'ing_cn7', name: 'Frutas picadas (maçã, banana)', amount: '1 xícara' },
        { id: 'ing_cn8', name: 'Fermento', amount: '1 colher de sopa' }
    ],
    'Bolo de Fígado': [
        { id: 'ing_bf1', name: 'Fígado bovino ou de frango', amount: '500g' },
        { id: 'ing_bf2', name: 'Farinha de aveia ou trigo integral', amount: '1 xícara' },
        { id: 'ing_bf3', name: 'Ovos', amount: '2' }
    ],
    'Pasta de ervas': [
        { id: 'ing_pe1', name: 'Iogurte natural sem açúcar', amount: '1 xícara' },
        { id: 'ing_pe2', name: 'Hortelã fresca picada', amount: '1 colher de sopa' },
        { id: 'ing_pe3', name: 'Salsinha fresca picada', amount: '1 colher de sopa' }
    ],
    'Bifinhos de fígado': [
        { id: 'ing_bdf1', name: 'Fígado (bovino ou frango) cru', amount: '500g' }
    ],
    'Bifinhos de frango': [
        { id: 'ing_bfr1', name: 'Peito de frango cru', amount: '500g' }
    ],
    'Sorbet detox': [
        { id: 'ing_sd1', name: 'Melancia em cubos (sem sementes)', amount: '2 xícaras' },
        { id: 'ing_sd2', name: 'Folhas de hortelã', amount: 'algumas' },
        { id: 'ing_sd3', name: 'Água de coco', amount: '1/2 xícara' }
    ],
    'Pipoca temperada': [
        { id: 'ing_pt1', name: 'Milho de pipoca', amount: '1/2 xícara' },
        { id: 'ing_pt2', name: 'Óleo de coco', amount: '1 colher de sopa' },
        { id: 'ing_pt3', name: 'Sal integral', amount: '1 pitada' },
        { id: 'ing_pt4', name: 'Ervas frescas desidratadas', amount: '1 colher de chá' },
        { id: 'ing_pt5', name: 'Azeite de oliva', amount: 'para regar' }
    ],
    'Gelatina de frutas vermelhas': [
        { id: 'ing_gfv1', name: 'Gelatina incolor e sem sabor', amount: '1 sachê (12g)' },
        { id: 'ing_gfv2', name: 'Água morna', amount: 'para hidratar' },
        { id: 'ing_gfv3', name: 'Suco de laranja natural', amount: '1/2 xícara' },
        { id: 'ing_gfv4', name: 'Frutas vermelhas (morango, amora)', amount: '1 xícara' },
        { id: 'ing_gfv5', name: 'Mel', amount: '1 colher de chá' }
    ],
    'Algas crocantes': [
        { id: 'ing_ac1', name: 'Folhas de alga Nori', amount: '2' },
        { id: 'ing_ac2', name: 'Azeite', amount: 'fio' },
        { id: 'ing_ac3', name: 'Sal e Gergelim', amount: 'a gosto' }
    ]
};

let d = fs.readFileSync('src/data/mockData.ts', 'utf8');

for (const [title, ingredients] of Object.entries(patches)) {
    const escapedTitle = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const blockRegex = new RegExp(`(title:\\s*'${escapedTitle}'[\\s\\S]*?ingredients:\\s*\\[)\\s*\\]`);

    // Create new ingredients string
    const ingrs = ingredients.map(ing => `      { id: '${ing.id}', name: '${ing.name}', amount: '${ing.amount}' }`).join(',\n');

    d = d.replace(blockRegex, `$1\n${ingrs}\n    ]`);
}

fs.writeFileSync('src/data/mockData.ts', d);
console.log('Restored ingredients successfully.');
