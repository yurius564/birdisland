const BIRDS = {
    'Floresta': {
        normal: [
            {
                name: 'Canário',
                image: 'img/birds/Canário.png',
                speed: 25,
                description: 'Comum - Famoso por seu canto melodioso, este pequeno pássaro usa sua cor vibrante para se camuflar entre flores e frutos amarelos.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Canário Vermelho',
                image: 'img/birds/Canário belga vermelho (shiny).png',
                speed: 25,
                description: 'Comum - Sua cor vibrante é resultado de fatores genéticos e pigmentos na dieta. Na natureza, a intensidade da plumagem indica a saúde e o vigor do pássaro.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Ring Neck',
                image: 'img/birds/Ring neck (verde).png',
                speed: 25,
                description: 'Comum - Identificado pelo anel colorido no pescoço, é um periquito mestre na adaptação, vivendo bem em diversos climas.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Coruja',
                image: 'img/birds/Coruja.png',
                speed: 25,
                description: 'Comum - Uma caçadora noturna com penas especiais que tornam seu voo totalmente silencioso, permitindo ataques surpresa na escuridão.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Periquito Amarelo',
                image: 'img/birds/Periquito australiano (amarelo).png',
                speed: 25,
                description: 'Comum - Vive em bandos barulhentos e organizados. Sua cor intensa ajuda na comunicação visual com o grupo dentro da mata.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ],
        rare: [
            {
                name: 'Coruja do Nabal',
                image: 'img/birds/Coruja-do-nabal (amarela - shiny).png',
                speed: 45,
                description: 'Raro - Diferente de outras corujas, ela costuma caçar durante o dia e constrói seus ninhos diretamente no solo.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Corvo',
                image: 'img/birds/Corvo.png',
                speed: 45,
                description: 'Raro - Considerado uma das aves mais inteligentes do mundo, é capaz de usar gravetos como ferramentas para conseguir comida.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Ring Neck Violeta',
                image: 'img/birds/Ring neck (violeta - shiny).png',
                speed: 45,
                description: 'Raro - Uma mutação rara que exibe uma plumagem arroxeada deslumbrante, sendo um dos registros mais valiosos para fotógrafos.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Tucano',
                image: 'img/birds/Tucano.png',
                speed: 45,
                description: 'Raro - Seu bico enorme, além de colher frutas, ajuda a regular a temperatura do corpo, funcionando como um radiador natural.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ],
        special: [
            {
                name: 'Esquilo',
                image: 'img/birds/Esquilo.png',
                speed: 60,
                description: 'Especial - Enterra centenas de sementes pela floresta e acaba ajudando novas árvores a crescerem.<br>Talvez o maior contribuidor para atrair novos pássaros para a ilha.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Psicopato',
                image: 'img/birds/Pato (shiny).png',
                speed: 60,
                description: 'Especial - Parece estar caminhando a esmo pela ilha procurando outros patos, mas está carregando algo sinistro.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ]
    },
    'Praia': {
        normal: [
            {
                name: 'Melro Azul',
                image: 'img/birds/Melro-azul.png',
                speed: 25,
                description: 'Comum - O macho possui uma plumagem azul-metálica que brilha intensamente sob o sol, usada para atrair parceiras nos costões rochosos.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Melro Azul (Fêmea)',
                image: 'img/birds/Melro-azul (fêmea).png',
                speed: 25,
                description: 'Comum - Diferente do macho, possui tons acastanhados que servem de camuflagem perfeita entre as rochas e areia da costa.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pega-Rabuda',
                image: 'img/birds/Pega-rabuda.png',
                speed: 25,
                description: 'Comum - Famosa por sua curiosidade, é uma das poucas aves que consegue se reconhecer em um espelho.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pega-Azul',
                image: 'img/birds/Pega-azul.png',
                speed: 25,
                description: 'Comum - Uma ave social e inteligente, conhecida por sua cauda longa e por viver em grupos familiares muito unidos.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pombo',
                image: 'img/birds/Pombo.png',
                speed: 25,
                description: 'Comum - Possui um sentido de orientação extraordinário, sendo capaz de encontrar o caminho de casa mesmo a centenas de quilômetros.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Periquito Azul',
                image: 'img/birds/Periquito australiano (azul).png',
                speed: 25,
                description: 'Comum - Esta variante cromática se destaca na paisagem litorânea, preferindo as palmeiras próximas à areia para descansar e se alimentar.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ],
        rare: [
            {
                name: 'Corvo (Com um balde?)',
                image: 'img/birds/Corvo (shiny).png',
                speed: 45,
                description: 'Raro - Geralmente não vivem perto do mar, mas parece que ao buscar alguns insetos ele acabou com a cabeça presa no balde de algum pescador desavisado...<br>Pelo menos ele parece estar se divertindo.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'João de Barro',
                image: 'img/birds/Joao_de_Barro.png',
                speed: 45,
                description: 'Raro - Constrói ninhos de lama como um verdadeiro arquiteto da natureza!<br>A abertura é posicionada para proteger o interior do vento e da chuva.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ],
        special: [
            {
                name: 'Gato',
                image: 'img/birds/Gato.png',
                speed: 60,
                description: 'Especial - Eita! Um gatinho! Acho que não deveria estar aqui...<br>Não se deixe enganar pelo olhar dócil, alguns marinheiros que tentaram dar peixes levaram mordidas e arranhões!<br>Parece estar se divertindo na ilha.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pinguim',
                image: 'img/birds/Pinguim.png',
                speed: 60,
                description: 'Especial - Embora não voe no ar, "voa" sob a água com agilidade incrível para escapar de predadores e capturar peixes.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ]
    },
    'Campo': {
        normal: [
            {
                name: 'Calopsita',
                image: 'img/birds/Calopsita.png',
                speed: 25,
                description: 'Comum - Originária de regiões áridas, usa sua crista alta para comunicar estados de alerta, curiosidade ou medo para o bando.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Papagaio',
                image: 'img/birds/Papagaio.png',
                speed: 25,
                description: 'Comum - Usa os pés como mãos para comer e possui uma língua musculosa capaz de articular sons e imitar quase tudo o que ouve.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pato',
                image: 'img/birds/Pato.png',
                speed: 25,
                description: 'Comum - Caminha de forma desajeitada na grama, mas é um nadador veloz com penas impermeáveis.<br>O bico chato pode filtrar pequenos insetos e sementes diretamente da lama dos lagos.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pavão',
                image: 'img/birds/Pavão.png',
                speed: 25,
                description: 'Comum - O rabo exuberante possui "olhos" que confundem predadores e servem como uma exibição de saúde e vigor para as fêmeas.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ],
        rare: [
            {
                name: 'Calopsita Cara-Branca',
                image: 'img/birds/Calopsita cara-branca (shiny).png',
                speed: 45,
                description: 'Raro - Uma variação que não possui as manchas laranjas, destacando-se pelo contraste elegante de cinza e branco em campo aberto.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pombo Branco',
                image: 'img/birds/Pombo (shiny).png',
                speed: 45,
                description: 'Raro - Frequentemente uma variação do pombo-doméstico, destaca-se no campo verde, sendo fácil de avistar de longas distâncias.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Pavão Fêmea',
                image: 'img/birds/Pavão (fêmea - shiny).png',
                speed: 45,
                description: 'Raro - Suas cores neutras garantem proteção total enquanto choca os ovos no chão, escondida entre a vegetação baixa.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Periquito Arco-Íris',
                image: 'img/birds/Periquito australiano (arco-íris - shiny).png',
                speed: 45,
                description: 'Raro - Apresenta uma das plumagens mais coloridas da natureza, com cores que variam conforme a incidência da luz solar.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ],
        special: [
            {
                name: 'Capivara',
                image: 'img/birds/Capivara.png',
                speed: 60,
                description: 'Especial - O animal mais sociável da ilha! É comum vê-la descansando em grupos, servindo até de poleiro para alguns pássaros caroneiros.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
            {
                name: 'Dodô',
                image: 'img/birds/Dodô.png',
                speed: 60,
                description: 'Especial - Uma ave corpulenta e curiosa que caminha calmamente pelo chão.<br>Estava extinta mas aqui parece não ter predadores, ela usa seu bico grande para esmagar sementes duras com facilidade.',
                pattern: [[1, 15, 30], [2, 30, 55], [1, 55, 70]]
            },
        ]
    }
}