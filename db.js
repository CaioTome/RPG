const db = {
    regioes: [
        {
            nome: "Pedra Branca",
            regiao: "Centro",
            regiaoNome: "Centro - Pradaria",
            desc: "A opulenta, mas agora sitiada, capital do Grande Reino. Outrora o coração político e cultural de Allara, hoje é uma cidade dividida e esgotada pela guerra civil. Suas grandiosas avenidas estão cheias de barricadas e seus palácios de mármore branco servem como fortalezas para as facções que reivindicam o trono."
        },
        {
            nome: "Sanguine",
            regiao: "Centro",
            regiaoNome: "Centro - Pradaria",
            desc: "A Cidade sob a Cidade. Escondida sob a capital do Grande Reino, esse submundo sombrio é lar de milhares de dampiros que servem sua regente, a Rainha da Graça e Sangue, Carmilla. É um labirinto frio e úmido de túneis, catacumbas e esgotos, onde a influência da superfície se esvai e a lei é ditada pela sede de poder da realeza sombria."
        },
        {
            nome: "Torre de Marfim",
            regiao: "Centro",
            regiaoNome: "Centro - Pradaria",
            desc: "Uma ilha flutuante de arquitetura elegante e arrogante, mantida no ar por magia antiga. É o lar exclusivo dos Magos mais poderosos e pretensiosos do continente, que usam sua posição elevada para observar e tentar codificar o uso da magia no Grande Reino. A Torre é um símbolo de conhecimento inalcançável e isolamento político."
        },
        {
            nome: "Gelo Eterno",
            regiao: "Norte",
            regiaoNome: "Norte - Taiga",
            desc: "A maior cidade do Norte, escavada em uma montanha de gelo azulado e pedra maciça. Seus habitantes são robustos e estoicos, acostumados à escuridão do inverno e à ameaça constante que paira sobre o Baluarte. As lareiras de Gelo Eterno são a última linha de aquecimento e esperança antes do vazio gelado."
        },
        {
            nome: "Baluarte",
            regiao: "Norte",
            regiaoNome: "Norte - Taiga",
            desc: "Uma estrutura militar maciça de gelo e pedra, estendendo-se por quilômetros. É o lar da Ordem dos Guardiões, uma ordem de guerreiros abnegados que juraram proteger o reino. O Baluarte é um lugar de vigília eterna e sacrifício, onde a esperança é escassa e a disciplina é a única coisa que impede a Devastação de avançar."
        },
        {
            nome: "Devastação",
            regiao: "Norte",
            regiaoNome: "Norte - Taiga",
            desc: "Mesmo depois de mil anos, tempestades mágicas devastam as ruínas do Antigo Império no lugar que hoje é chamado de Devastação. Os horrores gerados por esta terra exigiam a criação do Baluarte, uma demarcação de castelos, muralhas e outras defesas guardadas por um exército voluntário financiado, até recentemente, pelo Grande Reino. Ano após ano, os defensores mantiveram afastados os fomorianos, descendentes alterados do Antigo Império, mas, sem novos fundos chegando da tumultuosa Velha Pátria, muitos temem que o inimigo irá superar as defesas e sair do controle. O legado do Império é de mau uso da magia, adoração diabólica e corrupção, mas ele não começou dessa forma. Os fundadores eram sobreviventes do Grande Cataclismo, um período de inundações disseminadas que marcaram o fim da Era dos Mitos, e que tentaram reconstruir a sua cultura e civilização nas Terras da Alvorada. A nação incipiente cresceu sem limites e se tornou um império cerca de três mil anos atrás. Não contente com o território que ele detinha, o Império se expandiu para o sul, conquistando os estados menores em seu caminho, escravizando as populações ou as eliminando. Eventualmente, os imperiais voltaram a sua atenção para além do continente, lançando o seu poder contra Zá e, eventualmente, navegando pelo oceano para agredir os povos do outro lado do mundo. Dentre aqueles estavam os kalasans, que derrotaram os invasores tão violentamente que muitos esperavam que essa terra distante viesse dar cabo do Império, mas os seus navios nunca chegaram. Mesmo com todo o seu poderio, com toda a sua riqueza, o Império não pôde controlar a podridão em seu cerne. Os imperadores há muito eram poderosos feiticeiros e governavam com o apoio de heresiarcas diabólicos que adotavam nomes rebuscados para ocultar seus nomes verdadeiros. Contanto que permitissem que os heresiarcas governassem os seus territórios como quisessem, os imperadores podiam permanecer. Porém, o último a se alçar ao trono, um grandioso assento monstruoso feito dos crânios dos regentes mortos por seus ancestrais, viu no que o Império havia se tornado e buscou reformas, concedendo maiores liberdades ao povo comum e até mesmo garantindo a independência de algumas colônias distantes. Os heresiarcas se rebelaram e partiram o Império em pedaços. Dois mil anos não foi tempo o bastante para abater a ruína lançada pelos heresiarcas. Nuvens quilométricas verdes e roxas ocultam o sol e arrastam por sobre o solo cortinas de fogo assassino, branco e fantasmagórico, queimando e corrompendo tudo o que tocarem. Grandes faixas de terra se tornaram vidro pelo calor intenso lançado por feitiços apocalípticos que ainda soltam fagulhas e estalos. Porém, algumas pessoas sobreviveram a essa calamidade, ainda que alterados e tornados insanos pelo sofrimento. Uma grande muralha foi erigida para estancar a enxurrada de horrores que se derramaria para fora da Devastação, enquanto os descendentes dessa terra agora espreitam nas sombras da Velha Pátria, vivendo como párias pelo toque das trevas que carregam."
        },
        {
            nome: "Ninho da Águia",
            regiao: "Leste",
            regiaoNome: "Leste - Vales e Montanhas",
            desc: "Situada nas Montanhas da Lua, sob o pico conhecido como Lança do Gigante, a milhares de metros acima do Vale. Esta é a maior cidade do Leste e é famosa por ser quase inexpugnável. A cidade é um emaranhado de pontes de corda e edifícios de madeira fixados na face da montanha, com vistas deslumbrantes e um ar rarefeito que afasta os fracos."
        },
        {
            nome: "Minas Profundas",
            regiao: "Leste",
            regiaoNome: "Leste - Vales e Montanhas",
            desc: "Uma vasta rede de ruínas anãs sob uma montanha, onde os ecos de um reino subterrâneo perdido ainda ressoam. Aventureiros são atraídos pelo ouro e pelas joias esquecidas, mas a escuridão esconde não apenas armadilhas anãs, mas também criaturas corrompidas e famintas que veem qualquer luz invasora como um convite para a caça."
        },
        {
            nome: "Necrópole",
            regiao: "Leste",
            regiaoNome: "Leste - Vales e Montanhas",
            desc: "Uma cidade de pedra cinzenta e gótica em um vale isolado, onde magos e estudiosos das artes sombrias coexistem com seus experimentos mortos-vivos. A Necrópole não é necessariamente maligna, mas sua busca pela compreensão da vida e da morte a torna temida. É um lugar de silêncio frio, onde ghouls, zumbis e liches servem como bibliotecários e guardas."
        },
        {
            nome: "Pontalto",
            regiao: "Sul",
            regiaoNome: "Sul - Mar do Medo",
            desc: "A antiga maior cidade portuária, agora reduzida a ruínas negras e cinzas por um incêndio mágico de quarentena. Pontalto é um lembrete sombrio e devastado de como a febre colérica pode se espalhar. O local está sob vigilância rigorosa; o cheiro de cinzas, sal e morte ainda paira no ar, e o mar murmura os nomes dos cinco mil perdidos."
        },
        {
            nome: "Oráldia",
            regiao: "Sul",
            regiaoNome: "Sul - Mar do Medo",
            desc: "O reino submerso de uma civilização antiga que ousou ofender os deuses. Suas torres de mármore e templos cintilam sob as águas escuras, mas o local irradia uma aura de profundo terror divino. Dizem que a cidade ainda está habitada por seres que sobreviveram ao Grande Cataclismo e foram transformados pela pressão e pela culpa dos deuses."
        },
        {
            nome: "Ilhas do Medo",
            regiao: "Sul",
            regiaoNome: "Sul - Mar do Medo",
            desc: "Um arquipélago traiçoeiro e gigantesco, onde a vida é uma luta constante. Aqui, culturas diversas e forasteiros lutam contra piratas incansáveis, ambientes hostis e os temíveis Nagas – o povo serpente, remanescentes do tecnologicamente avançado Império Thoniano. É um caldeirão de sobrevivência e conflito de eras."
        },
        {
            nome: "Grande Árvore",
            regiao: "Oeste",
            regiaoNome: "Oeste - Floresta Temperada",
            desc: "A maior cidade do Oeste, construída sob e dentro de uma árvore colossal, que pode ser vista por todo o Grande Reino. Seus níveis inferiores de raízes e troncos ocos refletem a graça e a antiga arquitetura élfica, enquanto os níveis superiores, de construção humana, são uma imitação ambiciosa e apressada da majestade élfica, marcando o contraste entre a natureza e a ambição humana."
        },
        {
            nome: "Floresta de Arlathan",
            regiao: "Oeste",
            regiaoNome: "Oeste - Floresta Temperada",
            desc: "O que antes foi a gloriosa capital élfica de Arlathan agora é uma floresta temperada densa e selvagem, onde a natureza consumiu a civilização. Embora itens de magia e poder sejam abundantes, a própria floresta está imbuída de uma magia élfica selvagem, tornando as expedições perigosas. Criaturas guardam a beleza traiçoeira do local."
        },
        {
            nome: "Monastério Punho do Dragão do Oeste",
            regiao: "Oeste",
            regiaoNome: "Oeste - Floresta Temperada",
            desc: "Aninhado nos Mil Degraus da montanha oriental, este monastério de monges guerreiros é o auge da disciplina física e espiritual. Devotos de Draconus, eles se dedicam a alcançar o Caminho do Dragão em sua reclusão. O caminho até o monastério é longo e cansativo, servindo como a primeira prova de resiliência para qualquer um que busque seu conhecimento."
        }
    ],
    faccoes: [
        {
            id: "bardos",
            nome: "Bardos",
            resumo: "Historiadores, contadores de histórias e músicos itinerantes que preservam o conhecimento de uma civilização perdida.",
            desc: "<p>Descartar os bardos como sendo músicos e contadores de histórias comuns faz um desserviço à longa tradição desses apresentadores itinerantes, pois os bardos existem praticamente desde que existem as pessoas. Eles estiveram entre os primeiros a preservarem a música da antiguidade, a registrarem os grandes eventos da história e a protegerem dos inimigos da civilização tudo aquilo que aprenderam. A chegada de um bardo frequentemente é motivo de grande celebração, pois os espetáculos bárdicos não têm comparação.</p><p class='mt-4'>Os bardos formam uma sociedade vaga de historiadores, musicistas, contadores de história, atores e outros apresentadores. Acredita-se que venham de uma terra perdida no Grande Cataclismo que inundou muito do mundo, e o conhecimento que preservaram de sua civilização antes poderosa tenha permitido a formação do Império no norte, apesar de, infelizmente, terem fracassado em transmitir a sabedoria para usar esse conhecimento com responsabilidade.</p><p class='mt-4'>Alguns poucos bardos viajam pelos confins. Figuras famosas, estas incluem Alyce Trova-de-Mel, Byron Pé-de-Pau, e Wren Vagante.</p>"
        },
        {
            id: "corvos",
            nome: "Corvos",
            resumo: "A guilda de assassinos e ladrões mais notória de Allara, atuando nas sombras de Pedra Branca e Sanguine.",
            desc: "<p>Os Corvos são a guilda de assassinos e ladrões mais notória e eficiente de Allara, originada nas sombras de Pedra Branca, mas com agentes operando em todo o continente. Embora prestem serviços a quem puder pagar, sua influência se concentra especialmente na capital e em seu submundo, Sanguine, onde mantêm uma relação de interdependência cautelosa com a Rainha da Graça e Sangue e seus dampiros. O credo dos Corvos é simples: o contrato é lei, e a discrição é a arma suprema.</p><p class='mt-4'>Seus membros são mestres em infiltração, coleta de informações, uso de venenos e eliminação silenciosa. Eles são identificáveis por usarem máscaras de bico de corvo durante a execução de trabalhos de alto risco. A liderança dos Corvos é mantida em sigilo absoluto; o chefe, conhecido apenas como o <strong>Mestre dos Corvos</strong>, nunca é visto.</p>"
        },
        {
            id: "druidas",
            nome: "Druidas",
            resumo: "Grupo pequeno e manipulador com uma agenda secreta, que busca um objetivo final desconhecido.",
            desc: "<p>Não mais do que meia dúzia de druidas vivem nos confins, mas eles têm considerável influência. Os druidas têm uma agenda secreta e fazem progressos pontuais prestando o seu suporte a vários povos e figuras, somente para abandoná-los quando tiverem cumprido o seu propósito. Para qual fim eles trabalham, ninguém sabe, exceto os próprios druidas.</p><p class='mt-4'>Os druidas vestem capas pretas encapuzadas bastante distintas e nunca viajam sem elas. Poucos têm algo de bom a dizer sobre os druidas. As pessoas os veem como intrometidos, criadores de intrigas e manipuladores.</p>"
        },
        {
            id: "guardioes",
            nome: "Guardiões",
            resumo: "A ordem militar que defende o Baluarte, a muralha do extremo norte, contra os horrores da Devastação.",
            desc: "<p>Os Guardiões são a ordem militar dedicada a guarnecer o Baluarte, a maciça muralha de gelo e pedra no extremo norte que barra o caminho dos horrores da Devastação. Jurados à vigilância eterna e ao sacrifício, os Guardiões representam a última esperança de que a corrupção do Antigo Império não consumirá o resto da Velha Pátria.</p><p class='mt-4'>Seu código é o sacrifício e a lealdade à civilização. No entanto, o colapso do Grande Reino tem sido desastroso para a Ordem. O financiamento cessou, suprimentos são escassos, e o moral está sob pressão constante. Apesar do abandono do sul, a liderança atual, sob o comando do valoroso <strong>Comandante Ironhand</strong>, consegue inspirar os Guardiões a manterem a linha.</p>"
        },
        {
            id: "igreja",
            nome: "Igreja do Altivo",
            resumo: "A fé oficial do Grande Reino, busca restaurar a ordem após o regicídio e adora o Altivo (Redentor).",
            desc: "<p>Uma minúscula seita herética que derrubou a fé dominante e expulsou os Velhos Deuses do Grande Reino há quinhentos anos. A Igreja do Altivo se tornou a crença oficial após a Princesa Rhena liderar uma revolta bem-sucedida em nome da divindade.</p><p class='mt-4'>A doutrina da Igreja afirma que o Altivo veio à Terre para salvar os mortais da morte e abrir os portões do Paraíso, que estavam ocupados pelo <strong>Adversário</strong>. O Altivo derrotou o Adversário e o prendeu na Perdição.</p><p class='mt-4'>Desde a queda do Grande Reino, a Igreja do Altivo tem lutado para desarmar a crescente violência, comprometendo seus guerreiros sagrados à causa de restaurar a ordem. Sacerdotes do Altivo vestem roubas brancas decoradas com um cometa.</p>"
        },
        {
            id: "magos",
            nome: "Magos",
            resumo: "Usuários de magia de elite da Torre de Marfim, desesperados para manter sua hegemonia e codificar a magia.",
            desc: "<p>Os magos do oeste são os usuários de magia mais proeminentes na Velha Pátria. Na Torre de Marfim, eles trabalhavam para codificar os métodos corretos de usar magia e se tornarem a mais alta autoridade. Agora que o Grande Reino... se envolveu em uma terrível guerra civil, os magos estão desesperados para controlar os seus destinos e salvar o que resta do seu domínio.</p><p class='mt-4'>Muitos farsantes também aproveitaram as oportunidades criadas pelo caos. Verdadeiros magos odeiam essas pessoas e, quando as encontram, destroem o farsante."
        },
        {
            id: "monasterio",
            nome: "Monastério Punho do Dragão do Oeste",
            resumo: "Monges guerreiros devotos de Draconus que buscam o Caminho do Dragão, técnica lendária inspirada em dragões em combate.",
            desc: "<p>O Monastério Punho do Dragão do Oeste, aninhado nos Mil Degraus da montanha oriental, é a sede de uma ordem de monges guerreiros. Eles são devotos de Draconus, um dos Velhos Deuses da Ordem e do Tempo, e dedicam-se ao treinamento do corpo e da mente para alcançar o que chamam de <strong>Caminho do Dragão</strong>.</p><p class='mt-4'><strong>Lendas dizem que a técnica do Punho do Dragão emergiu da observação de dois dragões lutando até a morte.</strong> Aqueles que dominam a técnica relatam que um dragão aparece em seu corpo, como se tatuado na pele, e se move para os braços ou serpenteia no torso durante a luta.</p><p class='mt-4'>O Monastério guarda as <strong>Escamas Sacras</strong>, onde supostamente as verdades secretas de Draconus foram registradas. A Igreja do Altivo permite o monastério, pois a doutrina da Igreja afirma que Draconus foi o único dos Velhos Deuses que reconheceu o lugar de direito do Altivo.</p>"
        },
        {
            id: "paladinos",
            nome: "Paladinos",
            resumo: "Antiga guarda de elite da Coroa, responsável pelo regicídio; agora divididos e caçados, lutando por um governo de virtude.",
            desc: "<p>A Ordem dos Paladinos era a guarda de elite do Grande Reino. Seu ato de regicídio — o assassinato do Rei e a eliminação da maior parte da Família Real — foi o evento que precipitou a guerra civil.</p><p class='mt-4'>Eles justificam seu terrível ato alegando que o Rei havia traído seu juramento e permitido que a corrupção levasse o povo à ruína. No entanto, o ato os marcou como traidores e os Paladinos agora estão divididos e caçados. O grupo principal, liderado pelo <strong>Grão-Mestre Valerius</strong>, luta para instalar um governo de virtude e meritocracia, mas a maioria os enxerga como a causa do caos.</p>"
        },
        {
            id: "patrulheiros",
            nome: "Patrulheiros",
            resumo: "Sociedade de elite de guerreiros honrados e especialistas em sobrevivência que protegem os indefesos e vagam pela natureza.",
            desc: "<p>Quando Roland, primeiro de seu nome, fundou o Grande Reino, ele despachou os seus cavaleiros mais reais para vagarem pela natureza e descobrirem o mundo, ajudando aqueles em necessidade e defendendo os indefesos. Destes descendem os patrulheiros dos confins.</p><p class='mt-4'>Uma sociedade de elite composta por guerreiros honrados, habilidosos em sobrevivência e conhecimento da natureza, os patrulheiros vão aonde outros não ousam ir. Eles enfrentam todos os servos do mal. Quando um gigante pisoteia fazendas, os patrulheiros muitas vezes são os primeiros a responder.</p><p class='mt-4'>Os patrulheiros nunca foram numerosos, e seus números encolheram. Os verdadeiros patrulheiros ficam atentos em busca de indivíduos talentosos e podem aceitá-los como escudeiros.</p>"
        }
    ]
};

export default db;