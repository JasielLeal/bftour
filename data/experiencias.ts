export type ExperienciaTipo = "Quadriciclo" | "Buggy" | "Barco" | "Canoa" | "Surf" | "Experiência Gastronômica" | "Trilha" | "Pousadas";

export type Experiencia = {
    slug: string;
    titulo: string;
    tipo: ExperienciaTipo;
    duracao?: string;
    preco: number;
    type?: string;
    vagas?: boolean;
    oldPreco?: number;
    descricao: string;
    imagens: string[];
    localizacao?: string;
    opcoes?: string[];
    open?: string;
    incluso?: string[];
    valorPor?: string;
    intensidade?: string;
    onsale?: boolean;
    roteiro?: {
        titulo: string;
        texto: string;
    }[];
    extras?: {
        name: string;
    }[];
};

export const experiencias: Experiencia[] = [
    {
        slug: "quadriciclo-roteiro-completo",
        titulo: "Aventura de Quadriciclo",
        tipo: "Quadriciclo",
        duracao: "3h 30m",
        oldPreco: 659.99,
        preco: 379.99,
        descricao:
            "Aventure-se por trilhas e mirantes com segurança e emoção em um tour guiado de quadriciclo.",
        imagens: ["/quadriciculo/01.webp", "/quadriciculo/02.webp", "/quadriciculo/03.webp",
            "/quadriciculo/04.webp", "/quadriciculo/05.webp", "/quadriciculo/06.webp",
            "/quadriciculo/07.webp", "/quadriciculo/08.webp", "/quadriciculo/09.webp",
            "/quadriciculo/10.webp",
        ],
        incluso: ["Guia Credenciado", "Fotos / Vídeos", "37Km de praia desertas", "Paradas estratégicas"],
        valorPor: "Quadriciclo",
        roteiro: [
            {
                titulo: "Praias Desertas + Santuário das Tartarugas",
                texto: "Seguimos pelas praias praticamente intocadas até chegar ao Santuário das Tartarugas, com conexão direta com a natureza.",
            },
            {
                titulo: "Mirante do Cotia",
                texto: "Aqui temos uma vista panorâmica para fotos com o mar e os coqueiros de fundo",
            },
            {
                titulo: "Travessia do Rio Sagi",
                texto: "Adrenalina garantida na travessia do rio, com boas risadas e emoção.",
            },
            {
                titulo: "Parada em Sagi (opcional)",
                texto: "Almoço em Sagi (almoço não incluso).",
            },
            {
                titulo: "Rio Guajú (Divisa RN/PB)",
                texto: "Seguimos beira-mar até o Rio Guaju, com tempo para banho e relaxamento.",
            },
            {
                titulo: "Morro do Carequinha (Alto da Duna)",
                texto: "Finalização em um dos pontos mais bonitos da região, perfeito para fotos.",
            }
        ],
        extras: [
            { name: "Adicional de trilha na mata + lagoa da Coca-Cola" },
            { name: "Passeio ecológico pelo manguezal" },
            { name: "Espetinhos de lagosta, camarão, polvo, entre outros." },
            { name: "Tirolesa" },
            { name: "Stand Up" },
        ],
        onsale: true,
    },
    {
        slug: "buggy-roteiro-completo",
        titulo: "Passeio de Buggy",
        tipo: "Buggy",
        duracao: "3h",
        oldPreco: 749.99,
        preco: 449.99,
        descricao:
            "Viva a emoção de um tour guiado de buggy, explorando trilhas e praias com total segurança.",
        imagens: ["/buggy/01.webp", "/buggy/02.webp", "/buggy/03.webp",
            "/buggy/04.webp", "/buggy/05.webp", "/buggy/06.webp",
            "/buggy/07.webp", "/buggy/08.webp", "/buggy/09.webp",
            "/buggy/10.webp", "/buggy/11.webp", "/buggy/12.webp", "/buggy/13.webp",
        ],
        incluso: ["Bugueiro Credenciado", "Fotos/Vídeos", "42Km de praias / Mata Estrela",],
        roteiro: [
            {
                titulo: "Praias Desertas + Santuário das Tartarugas",
                texto: "Seguimos pelas praias praticamente intocadas até chegar ao Santuário das Tartarugas, com conexão direta com a natureza.",
            },
            {
                titulo: "Mirante do Cotia",
                texto: "Aqui temos uma vista panorâmica para fotos com o mar e os coqueiros de fundo.",
            },
            {
                titulo: "Trilha da Mata Estrela",
                texto: "Percurso pela maior reserva de Mata Atlântica sobre dunas do Brasil, com natureza preservada, ar puro e um trecho exclusivo longe da cidade.",
            },
            {
                titulo: "Lagoa da Araraquara (Lagoa da Coca-Cola)",
                texto: "Uma das paradas mais aguardadas do passeio, com água avermelhada, refrescante e perfeita para um banho.",
            },
            {
                titulo: "Parada em Sagi (opcional)",
                texto: "Almoço em Sagi (almoço não incluso).",
            },
            {
                titulo: "Rio Guajú (Divisa RN/PB)",
                texto: "Seguimos beira-mar até o Rio Guaju, com tempo para banho e relaxamento.",
            }
        ],
        extras: [
            { name: "Passeio ecológico de manguezal em canoa" },
            { name: "Tirolesa" },
            { name: "Espetinhos de lagosta, camarão, polvo, entre outros." },
            { name: "Stand-up" },
        ],
        valorPor: "Buggy",
    },
    {
        slug: "barco-roteiro-completo",
        titulo: "Passeio de Barco",
        tipo: "Barco",
        duracao: "1h e 30m",
        oldPreco: 99.99,
        preco: 69.99,
        descricao:
            "Durante o passeio você vai se encantar com as piscinas naturais, fazer uma parada pra banho e ainda avistar os gofinhos em seu habitate natural",
        imagens: ["/barco/01.webp", "/barco/02.webp", "/barco/03.webp",
            "/barco/04.webp", "/barco/05.webp", "/barco/06.webp",
            "/barco/07.webp", "/barco/08.webp", "/barco/09.webp",
            "/barco/10.webp", "/barco/11.webp",
        ],
        incluso: ["Avistamento de golfinhos", "Parada estratégica para banho"],
        valorPor: "Pessoa",
        roteiro: [
            {
                titulo: "Saída pela Praia do Porto",
                texto: "Damos início ao passeio na charmosa Praia do Porto, ponto de partida ideal para apreciar o mar tranquilo, a brisa leve e o clima perfeito de aventura.",
            },
            {
                titulo: "Caminho Litorâneo",
                texto: "Seguimos pela orla em um trajeto panorâmico, com vistas paradisíacas, falésias, coqueirais e aquele visual que rende fotos incríveis.",
            },
            {
                titulo: "Chegada à Praia do Farol",
                texto: "Chegamos à deslumbrante Praia do Farol, um dos cenários mais bonitos da região, ideal para contemplação, descanso e registros inesquecíveis.",
            },
        ]
    },
    {
        slug: "canoa-roteiro-completo",
        titulo: "Roteiro Completo",
        tipo: "Canoa",
        duracao: "25 minutos",
        oldPreco: 59.99,
        preco: 29.99,
        descricao:
            "Explore trilhas e mirantes em um tour guiado de canoa, unindo segurança, natureza e emoção.",
        imagens: ["/canoa/01.webp", "/canoa/02.webp", "/canoa/03.webp",
            "/canoa/04.webp", "/canoa/05.webp", "/canoa/06.webp",
            "/canoa/07.webp", "/canoa/08.webp",
            "/canoa/10.webp", "/canoa/11.webp", "/canoa/12.webp", "/canoa/13.webp",
        ],
        incluso: ["Guia Ecológico / Local", "Banho de argila", "Fotos/Vídeos",],
        intensidade: "Biodiversidade e a paz do manguezal",
        valorPor: "Canoa",
        roteiro: [
            {
                titulo: "Passeio de Canoa pelo Manguezal (opcional)",
                texto:
                    "Durante o passeio de quadriciclo e buggy, na parada do Rio Guajú, há a opção especial de um passeio de canoa pelo manguezal, com duração média de 25 a 30 minutos, ideal para quem busca conexão com a natureza de forma tranquila e relaxante.",
            },
            {
                titulo: "Experiência no Manguezal",
                texto:
                    "Enquanto navegamos pelo mangue, você vai se encantar com a biodiversidade local e a atmosfera de paz do lugar, um momento perfeito para relaxar, desacelerar e apreciar a natureza.",
            },
            {
                titulo: "Parada para Banho e Diversão",
                texto:
                    "Chegamos a uma área especial, semelhante a uma ilha, onde é possível aproveitar um banho refrescante, tirar fotos no balanço, registrar a famosa pegada do caranguejo e curtir o tradicional banho de argila, o grande atrativo do passeio.",
            }
        ]
    },
    {
        slug: "aula-de-surf",
        titulo: "Aula de Surf",
        tipo: "Surf",
        duracao: "1h 15m",
        oldPreco: 199.99,
        preco: 119.99,
        descricao:
            "Aprenda onde o Campeão Mundial e Olímpico Ítalo Ferreira pegou sua primeira onda. Nossas aulas são 100% voltadas para iniciantes, adaptadas ao ritmo de cada aluno, com segurança e diversão desde o primeiro contato com o mar. Aqui, surf não é só esporte: é cultura, identidade e experiência",
        imagens: ["/surf/01.webp", "/surf/02.webp", "/surf/03.webp",
            "/surf/04.webp", "/surf/05.webp", "/surf/06.webp",
            "/surf/07.webp", "/surf/08.webp",
        ],
        type: "Experiência",
        incluso: ["Todo o equipamento necessário",
            "Instrutor durante todo o processo, dentro e fora d’água",
            "Grande chance de ficar em pé na primeira aula",
            "Foco total em segurança, técnica e diversão",
        ],
        valorPor: "Pessoa",
        intensidade: "Experiência única para todas as idades e níveis",
        roteiro: [
            {
                titulo: "Aprendizado do Básico na Areia",
                texto:
                    "A aula começa na areia, onde os alunos aprendem a teoria do básico do surf, como posicionamento na prancha, remada, equilíbrio e a técnica correta para ficar em pé, tudo de forma simples, prática e descontraída.",
            },
            {
                titulo: "Prática na Água",
                texto:
                    "Após entender o básico na praia, seguimos para a água para colocar tudo em prática, sempre com acompanhamento do instrutor, garantindo confiança, segurança e uma experiência leve e divertida.",
            },
        ]
    },
    {
        slug: "trilha-na-mata",
        titulo: "Trilha Mata Estrela",
        tipo: "Trilha",
        duracao: "4h",
        oldPreco: 199.99,
        preco: 149.99,
        descricao:
            "A trilha em Baía Formosa é uma experiência de contato total com a natureza. O percurso sai da cidade em direção ao Santuário das Tartarugas, passa pela famosa Lagoa da Coca-Cola e retorna pela Trilha do Pagão, oferecendo paisagens incríveis, mata preservada e trechos de aventura ao longo do caminho",
        imagens: ["/trilha-na-mata/01.webp", "/trilha-na-mata/02.webp", "/trilha-na-mata/03.webp",
            "/trilha-na-mata/04.webp", "/trilha-na-mata/05.webp", "/trilha-na-mata/06.webp",
            "/trilha-na-mata/07.webp", "/trilha-na-mata/08.webp",
        ],
        type: "Experiência",
        incluso: ["Guia Local", "Fotos/Vídeos", "Parada para banho na Lagoa da Coca-Cola", "Trilha pela Mata Estrela"],
        valorPor: "Casal",
        intensidade: "Experiência única para todas as idades e níveis",
        roteiro: [
            {
                titulo: "Saída de Baía Formosa",
                texto:
                    "O percurso começa em Baía Formosa, seguindo por trechos de mata preservada e paisagens naturais, proporcionando contato direto com a natureza e momentos de contemplação.",
            },
            {
                titulo: "Santuário das Tartarugas",
                texto:
                    "A trilha segue até o Santuário das Tartarugas, um dos pontos mais especiais da região, conhecido pela beleza natural e importância ambiental.",
            },
            {
                titulo: "Lagoa da Coca-Cola",
                texto:
                    "No caminho, passamos pela famosa Lagoa da Coca-Cola, com sua água de coloração escura e refrescante, parada perfeita para descanso e fotos.",
            },
            {
                titulo: "Retorno pela Trilha do Pagão",
                texto:
                    "O retorno acontece pela Trilha do Pagão, encerrando o percurso com mais aventura, natureza e paisagens marcantes de Baía Formosa.",
            },
        ]
    },
    {
        slug: "bf-music",
        titulo: "BF Music",
        tipo: "Experiência Gastronômica",
        localizacao: "Rua Adauto Dornelas Câmara, 30 - 1° ANDAR - Mirante de Baía Formosa",
        open: "Terça, quarta e quinta as 16:00 às 00:00 | Sexta, sábado e domingo das 16:00 às 02:00",
        oldPreco: 199.99,
        vagas: false,
        preco: 119.99,
        descricao:
            "O BF Music une boa comida, drinks e música ao vivo em um só lugar. Com ambiente descontraído e clima vibrante, é perfeito para reunir amigos e curtir bons momentos. Próximo ao Mirante de Baía Formosa, oferece ainda uma vista privilegiada e a energia única da cidade.",
        imagens: [
            "/experiencia-gastronomica/bf-music/01.webp", "/experiencia-gastronomica/bf-music/02.webp",
            "/experiencia-gastronomica/bf-music/03.webp", "/experiencia-gastronomica/bf-music/04.webp",
            "/experiencia-gastronomica/bf-music/05.webp", "/experiencia-gastronomica/bf-music/06.webp",
            "/experiencia-gastronomica/bf-music/07.webp", "/experiencia-gastronomica/bf-music/08.webp",
            "/experiencia-gastronomica/bf-music/09.webp", "/experiencia-gastronomica/bf-music/10.webp",
            "/experiencia-gastronomica/bf-music/11.webp",
        ],
        type: "Experiência",
        valorPor: "Pessoa",
        opcoes: ["Pratos regionais", "Drinks exclusivos", "Música ao vivo", "Mesas externas"],
        onsale: false,
    },
    {
        slug: "willian-sushi",
        titulo: "Willian Sushi",
        tipo: "Experiência Gastronômica",
        localizacao: "Rua Jorge Gomes de Souza, 21 - Centro - Baía Formosa",
        open: "Terça a domingo das 18:00 às 23:00",
        oldPreco: 199.99,
        vagas: false,
        preco: 119.99,
        descricao:
            "O Williams Sushi é referência em Baía Formosa para quem busca sushi de qualidade. Com funcionamento noturno, oferece ambiente acolhedor e ingredientes selecionados que garantem sabor e frescor. Próximo à Carlota Elisa, é destaque entre os pontos gastronômicos da cidade.",
        imagens: [
            "/experiencia-gastronomica/willian-sushi/01.png", "/experiencia-gastronomica/willian-sushi/02.webp",
            "/experiencia-gastronomica/willian-sushi/03.webp", "/experiencia-gastronomica/willian-sushi/04.webp",
            "/experiencia-gastronomica/willian-sushi/05.webp", "/experiencia-gastronomica/willian-sushi/06.webp",
        ],
        type: "Experiência",
        valorPor: "Pessoa",
        opcoes: ["Drive-through", "Drinks exclusivos", "Refeição no local", "Mesas externas"],
        onsale: false,
    },
    {
        slug: "pizzaria-cunhau",
        titulo: "Pizzaria Cunhaú",
        tipo: "Experiência Gastronômica",
        localizacao: "Rua Anacleto Duarte, 405 - Centro, Baía Formosa - RN",
        open: "Terça a domingo das 18:00 às 23:00",
        oldPreco: 199.99,
        vagas: false,
        preco: 119.99,
        descricao:
            "A Pizzaria Cunhaú é um clássico de Baía Formosa, famosa pelas pizzas saborosas e ambiente animado. Ideal para reunir amigos e família depois de um dia de praia, é um dos pontos mais queridos da cidade.",
        imagens: [
            "/experiencia-gastronomica/pizzaria-cunhau/01.webp", "/experiencia-gastronomica/pizzaria-cunhau/02.webp",
            "/experiencia-gastronomica/pizzaria-cunhau/03.webp", "/experiencia-gastronomica/pizzaria-cunhau/04.webp",
            "/experiencia-gastronomica/pizzaria-cunhau/05.webp",
        ],
        type: "Experiência",
        valorPor: "Pessoa",
        opcoes: ["Drive-through", "Drinks exclusivos", "Refeição no local", "Mesas externas", "Ótima seleção de cervejas"],
        onsale: false,
    },
    {
        slug: "villa-mar",
        titulo: "Villa Mar",
        tipo: "Pousadas",
        duracao: "Diária",
        oldPreco: 299.99,
        preco: 219.99,
        descricao:
            "O Villa Mar – Baía Formosa oferece conforto e tranquilidade para sua estadia. Quartos completos, piscina, área externa agradável, Wi-Fi e estacionamento gratuito. Fica a poucos minutos da Praia Formosa e é uma ótima opção para quem quer descansar e aproveitar o melhor de Baía Formosa.",
        imagens: ["/pousadas/villamar/01.webp", "/pousadas/villamar/02.webp", "/pousadas/villamar/03.webp",
            "/pousadas/villamar/04.webp", "/pousadas/villamar/05.webp", "/pousadas/villamar/06.webp",
            "/pousadas/villamar/07.webp", "/pousadas/villamar/08.webp", "/pousadas/villamar/09.webp",
            "/pousadas/villamar/10.webp", "/pousadas/villamar/11.webp", "/pousadas/villamar/12.webp", "/pousadas/villamar/13.webp",
        ],
        incluso: [ "Wi-Fi gratuito", "Piscina", "Estacionamento"],
        valorPor: "Quarto",
        onsale: true,
    },
    {
        slug: "bella-flor",
        titulo: "Bella Flor",
        tipo: "Pousadas",
        duracao: "Diária",
        oldPreco: 299.99,
        preco: 199.99,
        descricao:
            "A Pousada Bella Flor, em Baía Formosa, oferece uma estadia acolhedora com quartos confortáveis, Wi-Fi, TV e opções com cozinha compacta. Conta com piscina e jardim para relaxar, fica a cerca de 15 minutos a pé da Praia da Cacimba e a 107 km do Aeroporto Internacional de São Gonçalo do Amarante, sendo uma ótima escolha para quem busca conforto e praticidade.",
        imagens: ["/pousadas/bellaflor/01.webp", "/pousadas/bellaflor/02.webp", "/pousadas/bellaflor/03.webp",
            "/pousadas/bellaflor/04.webp", "/pousadas/bellaflor/05.webp", "/pousadas/bellaflor/06.webp",
            "/pousadas/bellaflor/07.webp", "/pousadas/bellaflor/08.webp", "/pousadas/bellaflor/09.webp",
            "/pousadas/bellaflor/10.webp", "/pousadas/bellaflor/11.webp", "/pousadas/bellaflor/12.webp", "/pousadas/bellaflor/13.webp",
        ],
        incluso: [ "Wi-Fi gratuito", "Piscina", "Estacionamento"],
        valorPor: "Quarto",
        onsale: true,
    },

];

export function getExperienciaBySlug(slug: string) {
    return experiencias.find((experiencia) => experiencia.slug === slug);
}
