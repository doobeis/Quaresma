export type Difficulty = 'Fácil' | 'Médio' | 'Difícil';
export type Audience = 'Filhotes' | 'Adultos' | 'Sênior' | 'Todas';

export interface Ingredient {
      id: string;
      name: string;
      amount: string;
}

export interface Instruction {
      step: number;
      text: string;
}

export interface Recipe {
      id: string;
      title: string;
      description?: string;
      category: string;
      imageUrl: string;
      prepTimeMinutes: number;
      difficulty: Difficulty;
      audience: Audience;
      isPremium: boolean;
      toxicCheck?: boolean;
      ingredients: Ingredient[];
      instructions: Instruction[];
}

export type ToxicityLevel = 'Seguro' | 'Atenção' | 'Proibido';

export interface ToxicityItem {
      id: string;
      name: string;
      level: ToxicityLevel;
      description: string;
}

export type CategoriasAceitas = 'Refeições' | 'Petiscos' | 'Biscoitos' | 'Bolos' | 'Dietas Especiais';
export const CATEGORIES: CategoriasAceitas[] = ['Refeições', 'Petiscos', 'Biscoitos', 'Bolos', 'Dietas Especiais'];

export const mockRecipes: Recipe[] = [
  {
    id: 'biscoito-de-hortel',
    title: 'Biscoito de hortelã',
    description: 'rico em fibras e ajuda a reduzir o mau hálito',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_0_0', name: '½ xícara de coco fresco ralado', amount: '-' },
      { id: 'ing_0_1', name: '1 maçã média, com casca, sem sementes', amount: '-' },
      { id: 'ing_0_2', name: '1 maço de hortelã orgânica', amount: '-' },
      { id: 'ing_0_3', name: '2 ovos caipiras orgânicos', amount: '-' },
      { id: 'ing_0_4', name: '3 colheres das de sopa de óleo de coco', amount: '-' },
      { id: 'ing_0_5', name: '2 colheres das de sopa de farinha de chia', amount: '-' },
      { id: 'ing_0_6', name: '1 colher de sopa de extrato natural de hortelã (opcional)', amount: '-' },
      { id: 'ing_0_7', name: 'aproximadamente 4 xícaras de farinha sem glúten                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       (60% fécula de batata + 40% farinha de arroz)', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 180 ̊C e prepare uma assadeira com uma  folha antiaderente ou papel manteiga' },
      { step: 2, text: 'Bata no processador de alimentos o coco, a maçã, a hortelã, os  ovos, o óleo de coco, o sal e o extrato de hortelã e a farinha de  chia, e despeje em uma tigela grande' },
      { step: 3, text: 'Vá acrescentando farinha  sem glúten a essa mistura até formar uma massa' },
      { step: 4, text: 'Continue  acrescentando farinha até essa massa começar a soltar das mãos' },
      { step: 5, text: 'Divida a massa em 3 porções de tamanhos semelhantes' },
      { step: 6, text: 'Estique  uma delas sobre uma superfície enfarinhada, com a ajuda de um  rolo de massas, até conseguir uma espessura de cerca de 1cm' },
      { step: 7, text: 'Corte com cortadores de biscoitos a massa esticada e espalhe sobre  a assadeira' },
      { step: 8, text: 'Leve ao forno por 20 minutos ou até os biscoitos ficarem leves,  firmes e dourados na face virada para baixo' },
      { step: 9, text: 'Repita o processo com  as porções de massa reservadas' },
      { step: 10, text: 'Espere esfriar e sirva' },
      { step: 11, text: 'Você pode congelar a massa pronta antes de assar por até 2  meses' }
    ]
  },
  {
    id: 'biscoito-vermelho',
    title: 'Biscoito vermelho',
    description: 'rico em manganês (suporte articular) e ácido fólico',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_1_0', name: '1 beterraba média (125g) cozida e triturada em purê', amount: '-' },
      { id: 'ing_1_1', name: '1 ovo', amount: '-' },
      { id: 'ing_1_2', name: '2 colheres das de sopa de óleo de coco', amount: '-' },
      { id: 'ing_1_3', name: '1 pitada de sal integral', amount: '-' },
      { id: 'ing_1_4', name: 'Aproximadamente 3 xícaras de farinha sem glúten                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       (60% fécula de batata + 40% farinha de arroz)', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 200 ̊C e prepare uma assadeira com uma  folha antiaderente ou papel manteiga' },
      { step: 2, text: 'Misture bem a beterraba, o ovo, o óleo de coco e o sal' },
      { step: 3, text: 'Vá  acrescentando a farinha aos poucos e misturando bem com as mãos  até a massa soltar da tigela' },
      { step: 4, text: 'Estique a massa sobre uma superfície enfarinhada, com a ajuda  de um rolo de massas, até conseguir uma espessura de cerca de  1cm' },
      { step: 5, text: 'Corte com cortadores de biscoitos e distribua sobre a assadeira' },
      { step: 6, text: 'Leve ao forno por 15 minutos ou até os biscoitos ficarem sequinhos  e começarem a dourar na face virada para baixo' },
      { step: 7, text: 'Espere esfriar e sirva' }
    ]
  },
  {
    id: 'biscoito-natalino',
    title: 'Biscoito Natalino',
    description: 'rico em antioxidantes, vitaminas do complexo B e',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_2_0', name: '1 ovo caipira', amount: '-' },
      { id: 'ing_2_1', name: '2 colheres das de sopa de melaço de cana orgânico', amount: '-' },
      { id: 'ing_2_2', name: '2 colheres das de sopa de óleo de coco derretido', amount: '-' },
      { id: 'ing_2_3', name: '½ colher das de chá de sal integral', amount: '-' },
      { id: 'ing_2_4', name: '½ colher das de chá de bicarbonato de sódio', amount: '-' },
      { id: 'ing_2_5', name: '¼ de colher das de chá de cravo em pó', amount: '-' },
      { id: 'ing_2_6', name: '1 colher das de chá de canela em pó', amount: '-' },
      { id: 'ing_2_7', name: '½ colher das de chá de gengibre em pó', amount: '-' },
      { id: 'ing_2_8', name: 'Aproximadamente 2 e ½ xícaras de farinha sem glúten                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           (60% fécula de batata + 40% farinha de arroz)', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Preaqueça o forno a 180 ̊C e prepare uma assadeira com uma  folha antiaderente ou papel manteiga' },
      { step: 2, text: 'Em uma tigela pequena misture bem o ovo, melaço e o óleo de  coco' },
      { step: 3, text: 'Adicione o sal, o bicarbonato, o cravo, a canela, o gengibre e  a farinha de chia' },
      { step: 4, text: 'Vá acrescentando a farinha aos poucos até obter  uma massa que desgrude das mãos' },
      { step: 5, text: 'Estique a massa sobre uma superfície enfarinhada, com a ajuda  de um rolo de massas, até conseguir uma espessura de cerca de  1cm' },
      { step: 6, text: 'Corte com cortadores de biscoitos a massa esticada e distribua  sobre a assadeira' },
      { step: 7, text: 'Leve ao forno e deixe assar por cerca de 10 minutos ou até os  biscoitos ficarem leves, sequinhos e dourados na face virada para  baixo' },
      { step: 8, text: 'Retire do forno, deixe esfriar antes de servir' }
    ]
  },
  {
    id: 'bolacha-de-alfarroba',
    title: 'Bolacha de alfarroba',
    description: 'rico em antioxidante, que previne o envelhecimento e',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 12,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_3_0', name: '1 xícara de farinha de arroz', amount: '-' },
      { id: 'ing_3_1', name: '½ xícara de alfarroba em pó (sem açúcar nem adoçantes)', amount: '-' },
      { id: 'ing_3_2', name: '1 colher de chá de canela em pó', amount: '-' },
      { id: 'ing_3_3', name: '1 colher de chá de extrato de baunilha natural', amount: '-' },
      { id: 'ing_3_4', name: '¾ de xícara de água', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 180 ̊C e prepare uma assadeira com folha  antiaderente ou papel manteiga' },
      { step: 2, text: 'Misture todos os ingredientes em uma tigela e amasse até formar  uma massa lisa' },
      { step: 3, text: 'Se for necessário, adicione um pouquinho mais de  água se a massa ficar muito seca' },
      { step: 4, text: 'Estique a massa sobre uma superfície enfarinhada, com a ajuda  de um rolo de massas, até conseguir uma espessura de cerca de  1cm' },
      { step: 5, text: 'Corte com cortadores de biscoitos a massa esticada e espalhe  sobre a assadeira' },
      { step: 6, text: 'Leve ao forno e deixe assar por cerca de 12 minutos' },
      { step: 7, text: 'Retire do  forno, deixe esfriar antes de servir' }
    ]
  },
  {
    id: 'mordidinhas-de-abbora',
    title: 'Mordidinhas de abóbora',
    description: 'fonte de carotenos (antioxidantes), potássio, vitamina',
    category: 'Petiscos',
    imageUrl: '/recipes/petiscos.png',
    prepTimeMinutes: 35,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_4_0', name: '¼ xícara de farinha de coco', amount: '-' },
      { id: 'ing_4_1', name: '1 ovo caipira orgânico', amount: '-' },
      { id: 'ing_4_2', name: '½ xícara de abóbora cozida amassada', amount: '-' },
      { id: 'ing_4_3', name: '1 colher de sopa de pasta de amêndoa ou de amendoim', amount: '-' },
      { id: 'ing_4_4', name: '2 colheres de sopa de óleo de coco', amount: '-' },
      { id: 'ing_4_5', name: 'Uma pitada de canela em pó', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 180 ̊C' },
      { step: 2, text: 'Prepare uma assadeira com uma  folha antiaderente ou papel manteiga' },
      { step: 3, text: 'Misture todos os ingredientes em uma tigela até obter uma massa  homogênea' },
      { step: 4, text: 'Forme bolinhas de mais ou menos 2cm e distribua-as  na assadeira' },
      { step: 5, text: 'Leve ao forno por 35 minutos' },
      { step: 6, text: 'Deixe esfriar e sirva' }
    ]
  },
  {
    id: 'crocante-anti-pulgas',
    title: 'Crocante anti-pulgas',
    description: 'fonte de antioxidantes, vitaminas do complexo B,',
    category: 'Petiscos',
    imageUrl: '/recipes/petiscos.png',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_5_0', name: '½ xícara de farinha de arroz', amount: '-' },
      { id: 'ing_5_1', name: '¾ de xícara de farinha de amêndoas', amount: '-' },
      { id: 'ing_5_2', name: '2 colheres de sopa de linhaça moída ou farinha de linhaça', amount: '-' },
      { id: 'ing_5_3', name: '1 colher de chá de levedo de cerveja', amount: '-' },
      { id: 'ing_5_4', name: '¼ de colher de chá de alho triturado (omita para gatos)', amount: '-' },
      { id: 'ing_5_5', name: '½ colher de chá de sal integral', amount: '-' },
      { id: 'ing_5_6', name: '1 colher de chá de alecrim desidratado', amount: '-' },
      { id: 'ing_5_7', name: '½ colher de chá de tomilho desidratado', amount: '-' },
      { id: 'ing_5_8', name: '¼ de colher de chá de bicarbonato de sódio', amount: '-' },
      { id: 'ing_5_9', name: '2 colheres de chá de gergelim (branco, preto, ou misturado)', amount: '-' },
      { id: 'ing_5_10', name: '¼ xícara de água', amount: '-' },
      { id: 'ing_5_11', name: '½ colher de chá de azeite de oliva extra virgem', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 180 ̊C e prepare uma assadeira com uma  folha antiaderente ou papel manteiga' },
      { step: 2, text: 'Misture todos os ingredientes secos em uma tigela grande' },
      { step: 3, text: 'Adicione o óleo e a água e misture bem usando as mãos até formar  uma massa' },
      { step: 4, text: 'Forme uma bola com massa' },
      { step: 5, text: 'Abra a massa sobre uma folha antiaderente ou de papel manteiga,  ou uma camada fina de farinha' },
      { step: 6, text: 'Abra a massa até que ela fique com  cerca de 0,5cm de altura, ou o mais fina que você conseguir esticar  sem ela rasgar' },
      { step: 7, text: 'Corte a massa aberta em quadrados usando um  cortador de pizza ou uma faca' },
      { step: 8, text: 'Leve ao forno por 15-20 minutos, ou até os biscoitos começarem  a dourar' },
      { step: 9, text: 'Tire do forno e deixe repousar por cerca de 10 minutos para que  fiquem firmes' },
      { step: 10, text: 'Espere esfriar e sirva' }
    ]
  },
  {
    id: 'mini-cookies-de-coco',
    title: 'Mini-cookies de coco',
    description: 'uma potência de fibras, favorecendo a saúde intestinal',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 8,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_6_0', name: '3 colheres das de sopa de farinha de coco', amount: '-' },
      { id: 'ing_6_1', name: '2 colheres das de sopa de manteiga gelada', amount: '-' },
      { id: 'ing_6_2', name: '1 colher de chá de mel de abelhas', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 180 ̊C e prepare uma assadeira com uma  folha antiaderente ou papel manteiga' },
      { step: 2, text: 'Bata todos os ingredientes juntos no mini processador ou pique  a manteiga em pedaços pequenos e misture tudo com as mãos' },
      { step: 3, text: 'Divida a massa em 7 ou 8 bolinhas (use uma colher de chá para  medir) e disponha as bolinhas na assadeira' },
      { step: 4, text: 'Achate as bolinhas com  os dedos para formar bolachinhas' },
      { step: 5, text: 'Leve ao forno e deixe assar até que as bordas fiquem douradas  (mais ou menos 8 minutos)' },
      { step: 6, text: 'Fique de olho para não deixar que eles  queimem' },
      { step: 7, text: 'Espere os cookies esfriarem por completo antes de tirá- los da assadeira, ou eles vão esfarelar e desmanchar' },
      { step: 8, text: 'Depois de  frios eles ficam firmes e mantêm o formato' }
    ]
  },
  {
    id: 'quadradinhos',
    title: 'quadradinhos',
    description: 'fonte de selênio, cobre, zinco, fibras, vitamina E e',
    category: 'Bolos',
    imageUrl: '/recipes/bolos.png',
    prepTimeMinutes: 30,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_7_0', name: '½ xícara de tâmaras sem caroço picadas', amount: '-' },
      { id: 'ing_7_1', name: '¾ de xícara de amendoim orgânico torrado sem casca e sem sal', amount: '-' },
      { id: 'ing_7_2', name: '1 xícara banana passa picada', amount: '-' },
      { id: 'ing_7_3', name: '1 colher das de chá de óleo de coco', amount: '-' },
      { id: 'ing_7_4', name: '1 pitada de sal integral', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Bata no processador de alimentos as tâmaras, a banana, o óleo de  coco e o sal até tudo misturar muito bem' },
      { step: 2, text: 'Acrescente o amendoim e bata mais um pouco até que o amendoim  fique quebrado em pedaços pequenos' },
      { step: 3, text: 'Espalhe a massa em uma assadeira para formar uma camada de  cerca de 1,5cm e alise apertando bem contra o fundo com as mãos  para que ela fique bem compacta' },
      { step: 4, text: 'Leve a geladeira por 30 minutos  para endurecer um pouquinho e em seguida corte em quadradinhos  de cerca de 1,5cm' }
    ]
  },
  {
    id: 'cookies-superfceis',
    title: 'Cookies Superfáceis',
    description: 'rico em beta-glucanas (fibras que fortalecem o',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_8_0', name: '1 banana nanica madura', amount: '-' },
      { id: 'ing_8_1', name: '1 xícara de aveia em flocos', amount: '-' },
      { id: 'ing_8_2', name: '½ colher de chá de canela em pó', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Bata no processador a aveia até formar uma farinha' },
      { step: 2, text: 'Despeje em  um recipiente e reserve' },
      { step: 3, text: 'Descasque a banana e bata no processador  até virar um creme' },
      { step: 4, text: 'Misture o creme de banara à aveia triturada e  adicione a canela em pó' },
      { step: 5, text: 'Usando uma colher de sorvete, distribua  colheradas da massa sobre uma assadeira forrada com folha  antiaderente ou papel manteiga e leve ao forno por 15 minutos a  180 graus ou até os cookies ficarem dourados' },
      { step: 6, text: 'Espere esfriar e sirva' }
    ]
  },
  {
    id: 'barrinha-de-sementes',
    title: 'Barrinha de sementes',
    description: 'incrivelmente rica em antioxidantes',
    category: 'Petiscos',
    imageUrl: '/recipes/petiscos.png',
    prepTimeMinutes: 18,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_b1', name: 'Sementes de abóbora', amount: '1 xícara' },
      { id: 'ing_b2', name: 'Sementes de girassol', amount: '1 xícara' },
      { id: 'ing_b3', name: 'Ovos', amount: '2' },
      { id: 'ing_b4', name: 'Mel', amount: '1 colher de sopa' },
      { id: 'ing_b5', name: 'Canela', amount: '1 pitada' },
      { id: 'ing_b6', name: 'Óleo de coco', amount: 'para untar' }
    ],
    instructions: [
      { step: 1, text: 'Unte uma assadeira quadrada de  22cm com óleo de coco e pré- aqueça o forno a  180 ̊C' },
      { step: 2, text: 'Triture grosseiramente no processador as sementes de abóbora e  de girassol, reservando um pouquinho para decorar no final' },
      { step: 3, text: 'Misture bem os ovos, o mel, o sal e a canela' },
      { step: 4, text: 'Misture todos os  ingredientes secos e em seguida misture a eles a mistura de ovos' },
      { step: 5, text: 'Despeje a massa na assadeira e espalhe bem, apertando contra  o fundo de forma que fique bem nivelada e compactada' },
      { step: 6, text: 'Decore  espalhando por cima as sementes inteiras que você reservou' },
      { step: 7, text: 'Asse por 18 minutos' },
      { step: 8, text: 'Deixe esfriar completamente e corte em  retângulos ou quadradinhos' }
    ]
  },
  {
    id: 'almndegas-de-sardinha',
    title: 'Almôndegas de sardinha',
    description: 'rico em compostos anticâncer, como licopeno,',
    category: 'Refeições',
    imageUrl: '/recipes/refeição.png',
    prepTimeMinutes: 30,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_as1', name: 'Sardinha em lata (sem óleo)', amount: '1 lata' },
      { id: 'ing_as2', name: 'Farinha de aveia', amount: '1 xícara' },
      { id: 'ing_as3', name: 'Óvo', amount: '1' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 200 ̊C e forre uma assadeira com uma folha  antiaderente ou papel manteiga' },
      { step: 2, text: 'Misture bem todos os ingredientes' },
      { step: 3, text: 'Forme bolinhas com a massa usando uma colher de sorvete' },
      { step: 4, text: 'Disponha as bolinhas na assadeira e leve ao forno por 30 minutos' },
      { step: 5, text: 'Espere esfriar e sirva' }
    ]
  },
  {
    id: 'brigadeiro-de-crcuma',
    title: 'Brigadeiro de cúrcuma',
    description: 'rico em antioxidantes anticâncer (curcumina, piperina,',
    category: 'Petiscos',
    imageUrl: '/recipes/petiscos.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_11_0', name: '½ xícara (130g) de batata doce sem casca, cozida e amassada', amount: '-' },
      { id: 'ing_11_1', name: '2 colheres de sopa de biomassa de banana verde', amount: '-' },
      { id: 'ing_11_2', name: '1 colher das de chá de açafrão-da-terra em pó', amount: '-' },
      { id: 'ing_11_3', name: '1 pitada de pimenta do reino', amount: '-' },
      { id: 'ing_11_4', name: '1 pitada de sal integral', amount: '-' },
      { id: 'ing_11_5', name: '1 colher das de chá de gengibre em pó', amount: '-' },
      { id: 'ing_11_6', name: '1 colher das de sopa de óleo de coco', amount: '-' },
      { id: 'ing_11_7', name: '⅓ xícara de gergelim torrado', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Despeje o gergelim em um prato e reserve' },
      { step: 2, text: 'Bata no processador a  batata doce, a biomassa, o açafrão, o gengibre e o óleo de coco até  obter uma massa homogênea' },
      { step: 3, text: 'Faça bolinhas com a mistura usando  as palmas das mãos (como se faz com brigadeiro) e role  as bolinhas  sobre o gergelim espalhado no prato para cobrir toda a superfície  das bolinhas com gergelim' }
    ]
  },
  {
    id: 'biscoito-de-cenoura',
    title: 'Biscoito de cenoura',
    description: 'riquíssimo em vitamina K, betacarotenos, polifenóis',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_12_0', name: '½ cenoura picada', amount: '-' },
      { id: 'ing_12_1', name: '1 xícara de água', amount: '-' },
      { id: 'ing_12_2', name: '1 ovo inteiro', amount: '-' },
      { id: 'ing_12_3', name: '1 colher de sopa de manteiga em temperatura ambiente', amount: '-' },
      { id: 'ing_12_4', name: '1 colher de chá de azeite de oliva', amount: '-' },
      { id: 'ing_12_5', name: '1 pitada de sal', amount: '-' },
      { id: 'ing_12_6', name: 'algumas folhinhas de manjericão fresco e lavado', amount: '-' },
      { id: 'ing_12_7', name: 'aproximadamente 3 xícaras de farinha sem glúten (60% fécula  de batata + 40% farinha de arroz) - o suficiente para “dar o ponto”  na massa', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Cozinhe a cenoura na água por cerca de 15 minutos' },
      { step: 2, text: 'Bata a cenoura  cozida no mixer até ela virar um purê' },
      { step: 3, text: 'Junte o ovo, a manteiga, o  azeite, o sal e o manjericão' },
      { step: 4, text: 'Bata novamente até a mistura ficar  homogênea' },
      { step: 5, text: 'Comece a acrescentar a farinha aos poucos, misturando  bem' },
      { step: 6, text: 'Quando a mistura adquirir uma consistência sólida comece  a misturar com as mãos, e continue acrescentando farinha até a  massa parar de grudar nos dedos' },
      { step: 7, text: 'Estique a massa com um rolo,  deixando-a com mais ou menos 0,5cm de altura' },
      { step: 8, text: 'Corte a massa  com cortadores de biscoito' },
      { step: 9, text: 'Posicione os biscoitos cortados em  uma assadeira forrada com folha antiaderente ou papel manteiga  ou untada com algumas gotas de óleo' },
      { step: 10, text: 'Leve ao forno pré-aquecido  para assar por mais ou menos 10 minutos ou até a face de baixo dos  biscoitos ficar dourada' }
    ]
  },
  {
    id: 'biscoito-de-banana-e-aveia',
    title: 'Biscoito de banana e aveia',
    description: 'fonte de beta-glucanas (fibras que beneficiam o',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_13_0', name: '1 banana nanica madura, sem casca', amount: '-' },
      { id: 'ing_13_1', name: '1 ovo', amount: '-' },
      { id: 'ing_13_2', name: '50g de óleo de coco', amount: '-' },
      { id: 'ing_13_3', name: '1 colher de sopa de mel', amount: '-' },
      { id: 'ing_13_4', name: '1 xícara de aveia em flocos', amount: '-' },
      { id: 'ing_13_5', name: '1 colher de chá de canela em pó', amount: '-' },
      { id: 'ing_13_6', name: 'aproximadamente 2 xícaras farinha sem glúten (60% fécula de  batata + 40% farinha de arroz) - o suficiente para “dar o ponto” na  massa', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 180graus' },
      { step: 2, text: 'Misture todos os ingredientes,  com exceção da farinha, até obter uma massa homogênea' },
      { step: 3, text: 'Vá  aos poucos adicionando farinha até a massa não grudar mais nas  mãos' },
      { step: 4, text: 'Abra a massa com um rolo, corte no formato desejado com  cortadores de biscoito e leve ao forno para assar em fogo médio ou  baixo por aproximadamente 10 minutos ou até os biscoitos ficarem  dourados e sequinhos' }
    ]
  },
  {
    id: 'cookies-de-nozes',
    title: 'Cookies de nozes',
    description: 'riquíssimo em ômegas-3 ALA, cobre e manganês,',
    category: 'Biscoitos',
    imageUrl: '/recipes/biscoitos.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_14_0', name: '200g de nozes', amount: '-' },
      { id: 'ing_14_1', name: '100g de tâmaras', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Deixe as tâmaras de molho em 1 xícara de água morna por 15  minutos' },
      { step: 2, text: '•                                                    Passe as tâmaras por uma peneira e descarte a água' },
      { step: 3, text: 'Coloque  todos os ingredientes no processador e bata até formar uma massa' },
      { step: 4, text: 'Faça bolinhas com a mistura usando as palmas das mãos (como  se faz com brigadeiro) e disponha as bolinhas lado a lado sobre  uma assadeira forrada com folha antiaderente ou papel manteiga' },
      { step: 5, text: 'Pressione as bolinhas com os dentes de um garfo para achatá-las e  decorar a superfície dos cookies' },
      { step: 6, text: 'Leve ao forno por 13 minutos a 180 graus ou até os cookies  ficarem dourados' },
      { step: 7, text: 'Espere esfriar por completo antes de remover  da assadeira ou os cookies podem desmanchar' }
    ]
  },
  {
    id: 'bolo-verde-de-caneca',
    title: 'Bolo verde de caneca',
    description: 'fonte de ômegas-9, carotenos que beneficiam o',
    category: 'Bolos',
    imageUrl: '/recipes/bolos.png',
    prepTimeMinutes: 12,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_bv1', name: 'Farinha de aveia', amount: '3 colheres de sopa' },
      { id: 'ing_bv2', name: 'Folhas de espinafre ou couve', amount: '1 punhado' },
      { id: 'ing_bv3', name: 'Ovo', amount: '1' },
      { id: 'ing_bv4', name: 'Óleo de coco', amount: '1 colher de sopa' }
    ],
    instructions: [
      { step: 1, text: 'Misture todos os ingredientes em uma caneca que possa ser  levada ao forno (de vidro temperado ou de metal, por exemplo)' },
      { step: 2, text: 'Asse por 12 minutos no forno convencional ou elétrico' },
      { step: 3, text: 'A gente  sabe que o bolo de caneca tradicional é assado no microondas,  em 3 minutos, mas a gente prefere evitar o microondas e assim  preservar todas as propriedades funcionais dos ingredientes que  selecionamos tão cuidadosamente' },
      { step: 4, text: 'Veja aqui nosso artigo sobre os  malefícios que o uso do microondas pode trazer:  http://goo.gl/ huKnMX' }
    ]
  },
  {
    id: 'po-de-mandioquinha',
    title: 'Pão de mandioquinha',
    description: 'rico em potássio, antioxidantes, ômegas-3 ALA e fibras',
    category: 'Petiscos',
    imageUrl: '/recipes/petiscos.png',
    prepTimeMinutes: 20,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_pm1', name: 'Mandioquinha cozida e amassada', amount: '2 xícaras' },
      { id: 'ing_pm2', name: 'Polvilho doce', amount: '1 xícara' },
      { id: 'ing_pm3', name: 'Polvilho azedo', amount: '1 xícara' },
      { id: 'ing_pm4', name: 'Azeite', amount: '1/3 xícara' },
      { id: 'ing_pm5', name: 'Água', amount: 'aos poucos' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 200 ̊C e prepare uma assadeira com uma  folha antiaderente ou papel manteiga' },
      { step: 2, text: 'Numa tigela misture bem todos os ingredientes, menos a água' },
      { step: 3, text: 'Vá acrescentando a água aos poucos, até formar uma massa que  desgrude das mãos' },
      { step: 4, text: 'Forme bolinhas, espalhe-as na assadeira' },
      { step: 5, text: 'Leve ao forno por 20  minutos, aguarde esfriar e sirva' }
    ]
  },
  {
    id: 'conetone',
    title: 'Cãonetone',
    description: 'rico em antioxidantes, potássio, vitaminas A e C,',
    category: 'Bolos',
    imageUrl: '/recipes/bolos.png',
    prepTimeMinutes: 35,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_cn1', name: 'Ovos', amount: '3' },
      { id: 'ing_cn2', name: 'Batata doce cozida e amassada', amount: '1 xícara' },
      { id: 'ing_cn3', name: 'Coco ralado', amount: '1/2 xícara' },
      { id: 'ing_cn4', name: 'Leite de coco', amount: '1/2 xícara' },
      { id: 'ing_cn5', name: 'Melaço de cana', amount: '2 colheres de sopa' },
      { id: 'ing_cn6', name: 'Fécula de batata', amount: '1 xícara' },
      { id: 'ing_cn7', name: 'Frutas picadas (maçã, banana)', amount: '1 xícara' },
      { id: 'ing_cn8', name: 'Fermento', amount: '1 colher de sopa' }
    ],
    instructions: [
      { step: 1, text: 'Comece preparando a essência: coloque todos os ingredientes em  uma panela pequena  e leve ao fogo baixo' },
      { step: 2, text: 'Mexa de vez em quando  e deixe a mistura no fogo até reduzir a 2 colheres de sopa' },
      { step: 3, text: 'Preaqueça o forno a 180 ̊C' },
      { step: 4, text: 'Posicione 4 forminhas de panetone de  250g em uma assadeira' },
      { step: 5, text: 'Misture as frutas com a fécula de batata para evitar que elas  fiquem no fundo do bolo' },
      { step: 6, text: 'Bata as 3 claras separadas em ponto de  neve' },
      { step: 7, text: 'Bata no liquidificador os ovos inteiros, as gemas, o coco ralado,  o leite de coco, o melaço, a essência e a batata doce' },
      { step: 8, text: 'Despeje a  mistura em uma tigela grande e acrescente as frutas e as claras em  neve' },
      { step: 9, text: 'Em seguida adicione o fermento e misture delicadamente' },
      { step: 10, text: 'Despeje a massa nas forminhas e leve ao forno por 35 minutos' }
    ]
  },
  {
    id: 'bolo-de-fgado',
    title: 'Bolo de Fígado',
    description: 'graças aos elevados teores de vitamina A e',
    category: 'Bolos',
    imageUrl: '/recipes/bolos.png',
    prepTimeMinutes: 25,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_bf1', name: 'Fígado bovino ou de frango', amount: '500g' },
      { id: 'ing_bf2', name: 'Farinha de aveia ou trigo integral', amount: '1 xícara' },
      { id: 'ing_bf3', name: 'Ovos', amount: '2' }
    ],
    instructions: [
      { step: 1, text: 'Pré aqueça o forno a 180 ̊C' },
      { step: 2, text: 'Misture todos os ingredientes no processador de alimentos e  despeje a mistura em uma assadeira untada' },
      { step: 3, text: 'Leve ao forno por 25 minutos' },
      { step: 4, text: 'Depois de assado, retire do forno, deixe esfriar e corte em  cubinhos' }
    ]
  },
  {
    id: 'pasta-de-ervas',
    title: 'Pasta de ervas',
    description: 'rico em riboflavina, cálcio, fósforo, proteína de',
    category: 'Dietas Especiais',
    imageUrl: '/recipes/dietas especiais.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_pe1', name: 'Iogurte natural sem açúcar', amount: '1 xícara' },
      { id: 'ing_pe2', name: 'Hortelã fresca picada', amount: '1 colher de sopa' },
      { id: 'ing_pe3', name: 'Salsinha fresca picada', amount: '1 colher de sopa' }
    ],
    instructions: [
      { step: 1, text: 'Misture todos os ingredientes em uma tigela pequena' },
      { step: 2, text: 'Use para rechear brinquedos, para cobrir biscoitos salgados ou  para administrar medicamentos' }
    ]
  },
  {
    id: 'bifinhos-de-fgado',
    title: 'Bifinhos de fígado',
    description: 'riquíssimo em vitamina A, proteína de excelente',
    category: 'Petiscos',
    imageUrl: '/recipes/petiscos.png',
    prepTimeMinutes: 10,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_bdf1', name: 'Fígado (bovino ou frango) cru', amount: '500g' }
    ],
    instructions: [
      { step: 1, text: 'Corte o fígado cru em pedaços de mais ou menos 6x6cm e leve ao  fogo em uma panela grande com 2 a 3L de água' },
      { step: 2, text: 'Deixe cozinhar por  cerca de 10 minutos' },
      { step: 3, text: 'Desligue o fogo, escorra toda a água e coloque os pedaços de  fígado para esfriar e secar sobre folhas de papel toalha' },
      { step: 4, text: 'Quando estiverem frios, fatie os pedaços cozidos em fatias  bem finas e espalhe-as em uma assadeira forrada com uma folha  antiaderente' },
      { step: 5, text: 'Leve ao forno pré-aquecido por cerca de 40 minutos em  temperatura média-alta, virando as fatias na metade do tempo' },
      { step: 6, text: 'Pode ser necessário mais tempo para completar a secagem, vai  depender do tamanho das fatias que você conseguiu obter e da  capacidade de desidratação do seu forno' },
      { step: 7, text: 'Experimente o mesmo  procedimento com outras carnes como coração, língua ou músculo  bovino, ou mesmo com peito de frango' }
    ]
  },
  {
    id: 'bifinhos-de-frango',
    title: 'Bifinhos de frango',
    description: 'proteína de altíssima qualidade, niacina, selênio,',
    category: 'Refeições',
    imageUrl: '/recipes/refeição.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_bfr1', name: 'Peito de frango cru', amount: '500g' }
    ],
    instructions: [
      { step: 1, text: 'Corte o frango cru em bifes o mais fino que conseguir e enxugue- os com papel toalha' },
      { step: 2, text: 'Corte os bifes em tiras e disponha as tiras de  frango sobre uma grade de metal (recomendamos uma grade de  esfriar biscoitos)' },
      { step: 3, text: 'Posicione a grade sobre uma assadeira que seja  maior do que ela' },
      { step: 4, text: 'Leve a assadeira com a grade ao forno pré-aquecido por cerca de  1 hora e meia em temperatura baixa, virando as fatias na metade do  tempo' },
      { step: 5, text: 'Pode ser necessário mais ou menos tempo para completar  a secagem, vai depender do tamanho das fatias e da capacidade de  desidratação do seu forno' },
      { step: 6, text: 'Siga o mesmo procedimento para fazer  bifinhos de carne bovina ou suína (escolha um corte sem gordura),  de cabrito, de peixe etc' }
    ]
  },
  {
    id: 'sorbet-detox',
    title: 'Sorbet detox',
    description: 'propriedades destoxificantes, antiinflamatórias,',
    category: 'Dietas Especiais',
    imageUrl: '/recipes/dietas especiais.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_sd1', name: 'Melancia em cubos (sem sementes)', amount: '2 xícaras' },
      { id: 'ing_sd2', name: 'Folhas de hortelã', amount: 'algumas' },
      { id: 'ing_sd3', name: 'Água de coco', amount: '1/2 xícara' }
    ],
    instructions: [
      { step: 1, text: 'Bata todos os ingredientes no liquidificador e despeje em uma  forminha de gelo' },
      { step: 2, text: 'Leve ao freezer até endurecer' },
      { step: 3, text: 'Sirva congelado  ou deixe descongelar na tigela de água do peludo' }
    ]
  },
  {
    id: 'pipoca-temperada',
    title: 'Pipoca temperada',
    description: 'rica em fibras que aumentam a sensação de saciedade',
    category: 'Refeições',
    imageUrl: '/recipes/refeição.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_pt1', name: 'Milho de pipoca', amount: '1/2 xícara' },
      { id: 'ing_pt2', name: 'Óleo de coco', amount: '1 colher de sopa' },
      { id: 'ing_pt3', name: 'Sal integral', amount: '1 pitada' },
      { id: 'ing_pt4', name: 'Ervas frescas desidratadas', amount: '1 colher de chá' },
      { id: 'ing_pt5', name: 'Azeite de oliva', amount: 'para regar' }
    ],
    instructions: [
      { step: 1, text: 'Coloque numa pipoqueira ou numa panela com tampa o óleo de  coco e o milho de pipoca, tampe e leve ao fogo médio' },
      { step: 2, text: 'Quando os milhos começarem a estourar, agite a panela para  misturar e evitar que as pipocas queimem' },
      { step: 3, text: 'Retire do fogo quando  os estouros pararem ou ficarem bem espassados' },
      { step: 4, text: 'Despeje numa tigela grande e salpique com o sal, as ervas e o  azeite' },
      { step: 5, text: 'Espere esfriar e sirva' },
      { step: 6, text: 'Pode ser utilizada como recompensa  em adestramento' }
    ]
  },
  {
    id: 'gelatina-de-frutas-vermelhas',
    title: 'Gelatina de frutas vermelhas',
    description: 'o colágeno natural favorece a saúde do cérebro, da',
    category: 'Refeições',
    imageUrl: '/recipes/refeição.png',
    prepTimeMinutes: 15,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_gfv1', name: 'Gelatina incolor e sem sabor', amount: '1 sachê (12g)' },
      { id: 'ing_gfv2', name: 'Água morna', amount: 'para hidratar' },
      { id: 'ing_gfv3', name: 'Suco de laranja natural', amount: '1/2 xícara' },
      { id: 'ing_gfv4', name: 'Frutas vermelhas (morango, amora)', amount: '1 xícara' },
      { id: 'ing_gfv5', name: 'Mel', amount: '1 colher de chá' }
    ],
    instructions: [
      { step: 1, text: 'Hidrate a gelatina com a água morna e reserve' },
      { step: 2, text: 'Misture o suco de laranja e as frutas vermelhas em uma panela e  leve ao fogo, mexendo de vez em quando, até que as frutas fiquem  macias' },
      { step: 3, text: 'Adicione o mel e misture até dissolvê-lo bem' },
      { step: 4, text: 'Bata a mistura com um mixer, formando um purê' },
      { step: 5, text: 'Acrescente a  gelatina e misture bem' },
      { step: 6, text: 'Despeje a mistura em uma forma de vidro ou em forminhas de  silicone para chocolate e refrigere por um hora ou até que fique  firme' },
      { step: 7, text: 'Se tiver usado uma travessa de vidro, corte a gelatina em  cubinhos' },
      { step: 8, text: 'Se tiver usado forminhas de silicone, desenforme e  ofereça' },
      { step: 9, text: 'Mantenha refrigerado' }
    ]
  },
  {
    id: 'algas-crocantes',
    title: 'Algas crocantes',
    description: 'fonte de ferro, vitamina C, o raro mineral iodo,',
    category: 'Dietas Especiais',
    imageUrl: '/recipes/dietas especiais.png',
    prepTimeMinutes: 5,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_ac1', name: 'Folhas de alga Nori', amount: '2' },
      { id: 'ing_ac2', name: 'Azeite', amount: 'fio' },
      { id: 'ing_ac3', name: 'Sal e Gergelim', amount: 'a gosto' }
    ],
    instructions: [
      { step: 1, text: 'Pré-aqueça o forno a 170 ̊C' },
      { step: 2, text: 'Corte as folhas ao meio nos sentidos,  horizontal e vertical, para obter 4 pedaços menores' },
      { step: 3, text: 'Disponha os  pedaços sobre uma assadeira, sem deixa-los sobrepostos' },
      { step: 4, text: 'Pincele  as folhas com o azeite usando um pincel ou os dedos e polvilhe  o sal e o gergelim' },
      { step: 5, text: 'Asse por 5 minutos ou até as folhas ficarem  crocantes ou levemente franzidas' },
      { step: 6, text: 'Deixe esfriar e sirva' }
    ]
  },
  {
    id: 'panquecanina',
    title: 'Panquecanina',
    description: 'a banana entra com potássio e fibras solúveis e os',
    category: 'Refeições',
    imageUrl: '/recipes/refeição.png',
    prepTimeMinutes: 1,
    difficulty: 'Fácil',
    audience: 'Todas',
    isPremium: false,
    toxicCheck: true,
    ingredients: [
      { id: 'ing_26_0', name: '1 banana nanica madura', amount: '-' },
      { id: 'ing_26_1', name: '2 ovos', amount: '-' },
      { id: 'ing_26_2', name: 'Óleo de coco para untar a frigideira', amount: '-' }
    ],
    instructions: [
      { step: 1, text: 'Descasque e amasse a banana até que ela fique numa consistência  de purê' },
      { step: 2, text: 'Você deve obter uma quantidade equivalente a 1⁄3 a 1⁄2  xícara de banana amassada' },
      { step: 3, text: 'Numa tigelinha separada, bata os ovos até que as claras e gemas  fiquem completamente misturadas' },
      { step: 4, text: 'Misture os ovos com a banana amassada' },
      { step: 5, text: 'A massa vai ficar bem  líquida, parecendo mais ovos batidos do que massa de panqueca,  mas é assim mesmo' },
      { step: 6, text: 'Aqueça uma frigideira ou chapa antiaderente e mantenha o fogo  médio - se ficar alto demais, as panquecas vão queimar, se ficar  baixo demais elas ficarão muito finas' },
      { step: 7, text: 'Se preferir, unte a frigideira  com algumas gotinhas de óleo de coco' },
      { step: 8, text: 'Despeje sobre a frigideira o equivalente a 2 colheres de sopa  da massa, com cuidado para que, ao despejar, a massa se espalhe  uniformemente, formando um círculo' },
      { step: 9, text: 'A massa deve começar a  borbulhar imediatamente' },
      { step: 10, text: 'Deixe fritar por cerca de 1 minuto, sem  mexer' },
      { step: 11, text: 'Verifique, levantando levemente a borda, se a face de baixo  está ficando dourada e observe se o centro já está com aparência  firme - se você tentar virar a panqueca quando ele ainda estiver  totalmente líquido e cru, ela vai quebrar' },
      { step: 12, text: 'Quando chegar a hora de virar, insira uma espátula bem fina sob  a panqueca, e vire-a bem cuidadosamente para que a face crua  fique em contato com a frigideira, para cozinhar o outro lado' },
      { step: 13, text: 'Não se preocupe se um pouco da massa ainda crua espirrar pela  frigideira' },
      { step: 14, text: 'Se isso acontecer, tente posicionar a panqueca virada  sobre a porção espirrada, assim os pingos serão reincorporados à  panqueca' },
      { step: 15, text: 'Deixe fritar por mais 1 minuto, mais ou menos' },
      { step: 16, text: 'Você pode virar  novamente mais algumas vezes, para que os dois lados fiquem  dourados na mesma medida' },
      { step: 17, text: 'Transfira a panqueca pronta para um prato e repita todo o  processo até a massa acabar' },
      { step: 18, text: 'Na hora de servir você pode cortar a massa já frita com cortadores  de biscoito em formato de ossinhos e decorar com canela em  pó, coco ralado e/ou frutas como morango fatiado, blueberries,  cubinhos de manga, fatias de maçã, etc' }
    ]
  }
];

export const mockToxicityGuide: ToxicityItem[] = [
      {
            id: 't1',
            name: 'Chocolate',
            level: 'Proibido',
            description: 'Extremamente tóxico.'
      }
];