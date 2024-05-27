// Cria 15 cards (5 para cada categoria)
var cardsData = [
    { category: 'filme', title: 'Nise: O Coração da Loucura (2016)', description: 'Interpretada pela atriz Glória Pires, o filme retrata a história de Nise da Silveira, médica psiquiátrica que revolucionou os tratamentos da psiquiatria no Brasil, abordando seu método inovador e artístico, assim como suas influências diretas na revitalização do Setor de Terapia Ocupacional do Centro Psiquiátrico Pedro II, no Rio de Janeiro. De forma sensível, o filme emociona a quem assiste, ao demonstrar a força por trás do tratamento humanizado, tão inerente em Nise.', image: '../../img/NISE.png', link: 'https://www.adorocinema.com/filmes/filme-240724/' },
    { category: 'filme', title: 'As Vantagens de ser invisível(2012)', description: 'Charlie escreve cartas para um amigo imaginário e compartilha suas reflexões sobre a vida, o amor, a amizade e os desafios da adolescência. O filme mostra como a ansiedade pode afetar a vida de um adolescente e como isso pode ser relacionado com problemas familiares, sociais e emocionais. O personagem de Charlie apresenta comportamentos e sintomas de ansiedade, como preocupação excessiva, dificuldade para se relacionar com os outros, e evitação, mas essa ansiedade não é explicitamente mencionada no filme.', image: '../../img/as-vantagens-de-ser-invisivel.jpg', link: 'https://www.adorocinema.com/filmes/filme-182120/' },
    { category: 'filme', title: 'Brilho eterno de uma noite sem lembrança', description: 'O filme conta a história de um homem chamado Joel (interpretado por Jim Carrey) que, depois de uma separação dolorosa, decide apagar suas lembranças da ex-namorada Clementine (interpretada por Kate Winslet) com a ajuda de uma empresa de apagamento de memórias. No entanto, ao longo do processo, Joel se dá conta de que ainda ama Clementine e tenta salvar suas lembranças dela antes que sejam completamente apagadas. O filme mostra como a ansiedade pode ser associada com relacionamentos amorosos e como as lembranças e emoções podem ser difíceis de lidar.', image: '../../img/brilho-eterno-de-uma-mente-sem-lembrancas.jpg', link: 'https://www.adorocinema.com/filmes/filme-40191/' },
    // ... mais dados dos filmes ...
    { category: 'serie', title: 'This is us', description: 'A série mostra as questões da família Pearson e a vida dos três filhos adultos: Randall, Kevin e Kate. A série mostra como cada um deles lida com a depressão e ansiedade e trata da relevância da família nesse processo e do percurso do tratamento. Kate sofre de compulsão alimentar e é depressiva e Kevin convive com o alcoolismo. Randall, o filho adotivo, enfrenta a ansiedade desde a primeira temporada e tem ataques de pânico, daqueles que paralisam. Ele vai para a terapia e consegue ressignificar diversas situações que viveu, como por exemplo questões relacionadas a sua adoção. Inclusive, muda de trabalho impulsionado pela busca de quem ele é de verdade.', image: '../../img/This-is-us.webp', link: 'https://www.adorocinema.com/series/serie-19992/' },
    { category: 'serie', title: 'In Treatment', description: 'O personagem Paul Weston é um psicanalista e a série retrata a rotina de seu trabalho, como diferentes pacientes que buscam ajuda em seu consultório. Paul acaba percebendo que as questões psicológicas de seus pacientes afetam suas questões pessoais e, como consequência, ele começa a sua terapia pessoal.', image: '../../img/In-Treatment.webp', link: 'https://www.adorocinema.com/series/serie-3518/' },
    { category: 'serie', title: 'Gente Ansiosa', description: 'Essa comédia tem o mesmo nome do livro no qual é pautada. Jack é apresentado quando criança. Ele testemunhou uma morte e ficou responsável de levar a carta do suicídio até o banco da região. Após passagem de tempo, o telespectador percebe que Jack se tornou policial, como Jim – seu pai. É possível perceber que os dois têm diversos conflitos internos que os afligem. Jim e Jack trabalhavam juntos e acabaram discutindo na véspera do ano-novo. Nesse momento, ocorre um assalto na cidade e o bandido foge para um apartamento que estava aberto à visitação pois estava à venda. Ou seja, pessoas foram mantidas capturadas depois dessa invasão e, assim, se uniram. O bandido acabou fazendo amizade com elas. No fim, depois de alguns pedidos terem sido feitos à polícia, as pessoas foram soltas, Quando a polícia invadiu o domicílio, não tinha ninguém. A polícia tenta entender esse mistério com os depoimentos das testemunhas.', image: '../../img/Gente-ansiosa.webp', link: 'https://www.adorocinema.com/series/serie-25771/' },
    // ... mais dados das séries ...
    { category: 'livro', title: 'Amiga Conselheira', description: 'Mavi recebe a notícia de que sua melhor amiga foi hospitalizada após atentar contra a própria vida e fica totalmente sem chão, pois ela jamais imaginou que Giu pudesse fazer algo assim. Ainda mais porque Giu é uma pessoa que está sempre disposta a ouvir e ajudar em toda e qualquer situação. Muito prestativa, solidária e sensível às necessidades dos outros, além de ser uma amiga que sempre esteve ao seu lado a ajudando em absolutamente tudo.', image: '../../img/AMIGA-CONSELHEIRA.jpg', link: 'https://www.lovemybookss.com/2023/10/resenha-amiga-conselheira.html' },
    { category: 'livro', title: 'Attack on Titan', description: 'Assim como em vários outros mangas do mesmo gênero (shounen manga), o enredo de toda série gira em torno da busca da verdade, da liberdade e da salvação da humanidade. Porém, em Attack on Titan tudo isso é dificultado pela existência de criaturas colossais conhecidas como titãs, as quais, dotados apenas de um corpo humano gigantesco sem genitais e sem nenhuma consciência, têm, como única função existencial, devorar humanos.', image: '../../img/Attack_on_Titan_Season.webp', link: 'https://medium.com/@onfloow/attack-on-titans-reflex%C3%B5es-pol%C3%ADticas-e-filos%C3%B3ficas-por-tr%C3%A1s-de-um-anime-4f6790099fe7' },
    { category: 'livro', title: 'One Punch Man', description: 'One Punch Man é originalmente uma webtoon, um quadrinho criado de maneira independente que fez muito sucesso na internet e após conquistar o mundo foi transformado em mangá (quadrinhos japoneses) pela Shueisha, a maior editora de mangás do mundo e, posteriormente em uma série de animação que até o momento possui duas temporadas. Tudo gira em torno de um homem chamado Saitama, simplesmente o ser mais forte do universo e sua relação com o vazio existencial.', image: '../../img/One-Punch-Man.webp', link: 'https://www.psicologiaemseries.com.br/post/one-punch-man-e-o-vazio-existencial-a-verdadeira-for%C3%A7a-do-her%C3%B3i-mais-poderoso#:~:text=Saitama%20possui%20uma%20depress%C3%A3o%20ex%C3%B3gena,o%20que%20lhe%20causa%20sofrimento'},
    // ... mais dados dos livros ...
    { category: 'jogo', title: 'OMORI ', description: 'Desenvolvido e publicado pelo estreante estúdio indie Omocat LLC, OMORI é um RPG de estilo Mother/Earthbound-like e com um tom de terror psicológico surrealista em duas ambientações paralelas: uma em um mundo urbano (aproximadamente dos anos 1990) e outra em um mundo dos sonhos do protagonista.', image: '../../img/omori.png', link: 'https://www.gameblast.com.br/2022/07/omori-pc-analise-mother-like-indie-horror-rpg.html' },
    { category: 'jogo', title: 'GRIS', description: 'GRIS é daquele tipo de jogo que você vai juntando as peças e preenchendo as lacunas com a sua imaginação. Pessoalmente, eu adoro obras que brincam com o subjetivo, dando margem para interpretações diversas e, aqui, este é o caso. Não há falas no jogo e pouquíssimo texto aparece ao longo da jogatina – sumariamente, você irá ler apenas instruções na tela. Isso porque o game brinca com a arte, seja ela gráfica, auditiva ou interativa. GRIS é, portanto, uma peça artística em sua mais pura forma, só que entregue na forma de um game.', image: '../../img/gris.jpeg', link: 'https://canaltech.com.br/games/analise-gris-129681/'},
    { category: 'jogo', title: 'Celeste ', description: 'Nomeado como o “melhor jogo indie de 2018” em diversas premiações, Celeste (Switch) é uma verdadeira carta de amor e carinho para quem o joga. O humilde título de plataforma 2D desenvolvido pela Matt Makes Games foi tão elogiado desde a sua estreia que chegou a receber a honra de ser oficialmente lançado na Loja Nintendo do Brasil em maio de 2019. No entanto, será que Celeste realmente é um jogo que merece toda essa atenção depois de um ano do seu lançamento original?', image: '../../img/celeste.jpg', link: 'https://www.nintendoblast.com.br/2019/06/analise-celeste-obra-prima-respeita-jogador.html'},
    // ... mais dados dos jogos ...
    { category: 'animação', title: 'Your Lie in April', description: 'Your Lie in April é à primeira vista uma típica série melodramática que explora os dramas e dilemas vividos por jovens no tempo da adolescência. Embora não discordemos desta rápida observação, consideramos que é importante acrescentar como a série inspirada na manga escrita por Naoshi Arakawa explora outras temáticas, sendo a maior parte delas bem mais complexas do que realmente parecem a olho nu.', image: '../../img/Your-Lie-in-April.jpg', link: 'https://www.magazine-hd.com/apps/wp/your-lie-in-april-analise/#:~:text=Your%20Lie%20in%20April%20%C3%A9,jovens%20no%20tempo%20da%20adolesc%C3%AAncia' },
    { category: 'animação', title: 'A Voz do Silêncio', description: 'Shouya é um garoto que tenta vencer o tédio da vida fazendo provas de coragem. Como todo menino levado ele quer chamar a atenção de todos, inclusive de seus amigos. Mas, à medida em que ele vai crescendo, suas ações acabam soando bobas para seus amigos. Até que Shouko, a nova aluna da classe, chega. E ela é surda. E se torna o seu alvo de brincadeiras.', image: '../../img/A-Voz-do-Silêncio.jpg', link: 'https://www.ficcoeshumanas.com.br/post/resenha-a-voz-do-sil%C3%AAncio-vols-1-e-2-de-yoshitoki-oima' },
    { category: 'animação', title: 'A Família do Futuro', description: 'Eu assisti A Família do Futuro em 2007, não muito tempo depois que o filme ir aos cinemas. Ele foi lançado em um momento em que o estúdio parecia estar lançando filmes de todos os tipos e tons na esperança de que um ficasse. A Família do Futuro é a segunda tentativa do estúdio de produzir um filme de animação totalmente em 3D, e é certamente divertido e criativo. Mas, como os filmes à sua volta, parecia mais uma tentativa fracassada de encontrar “a próxima grande novidade”.', image: '../../img/A-Família-do-Futuro.jpg', link: 'https://www.planocritico.com/critica-a-familia-do-futuro/'},
      // ... mais dados das animação ...
    { category: 'musica', title: 'Shake It Out — Florence and The Machine', description: 'Uma das melhores músicas sobre saúde mental dos últimos tempos, Shake It Out mostra com mudanças de tempo e variações vocais a montanha-russa de emoções que é a vida com ansiedade. Em um momento, a pessoa se sente forte o suficiente para lutar contra seus próprios demônios, mas no outro se vê em posição de fragilidade. Uma verdadeira obra-prima de Florence Welch.', image: '../../img/Shake-It-Out.jpg', link: 'https://youtu.be/WbN0nX61rIs?si=Q367TKs7xPPSMGFC' },
    { category: 'musica', title: 'Boulevard of Broken Dreams — Green Day', description: 'Considerada um dos maiores sucessos do Green Day, a balada Boulevard of Broken Dreams fala sobre a solidão, a depressão e os impulsos suicidas gerados por transtornos mentais. Meu coração superficial é a única coisa que está batendo, canta o intenso Billie Joe, enquanto reforça sua intenção de seguir em frente, mesmo que sozinho.', image: '../../img/Green-day.jpg', link: 'https://youtu.be/Soa3gO7tL-c?si=FMoqC0QdCBlQEEqF' },
    { category: 'musica', title: 'Skyscraper — Demi Lovato', description: 'Talvez uma das mais famosas músicas sobre saúde mental da indústria pop nas últimas décadas, Skyscraper foi lançada por Demi Lovato logo depois de voltar de sua primeira internação por distúrbios alimentares, em 2011. A canção fala sobre os sentimentos, problemas e dificuldades que a cantora enfrentou em decorrência de seus transtornos mentais, enquanto garante que ela vai voltar a se erguer, “como um arranha-céu”.', image: '../../img/Demi-Lovato.jpg', link: 'https://youtu.be/r_8ydghbGSg?si=g6178c1RV2aJehKk' }
    // ... mais dados das música ...
];

var cardsContainer = document.getElementById('cards-container');
for (var i = 0; i < cardsData.length; i++) {
    var card = document.createElement('div');
    card.className = 'card ' + cardsData[i].category;
    card.innerHTML = `
        <img src="${cardsData[i].image}" alt="Capa do ${cardsData[i].category}">
        <h2>${cardsData[i].title}</h2>
        <p>${cardsData[i].description}</p>
        <a href="${cardsData[i].link}" target="_blank">Ver ${cardsData[i].category}</a>
    `;
    cardsContainer.appendChild(card);
}


var filterButtons = document.getElementsByClassName('filter-button');
for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', function() {
        var filter = this.getAttribute('data-filter');
        filterCards(filter);
    });
}

function filterCards(category) {
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        if (category === 'todos' || cards[i].classList.contains(category)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

var modal = document.getElementById("modal");
var closeButton = document.getElementById("close");

var cards = document.getElementsByClassName("card");
for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function() {
        var title = this.querySelector("h2").textContent;
        var description = this.querySelector("p").textContent;
        var link = this.querySelector("a").href;
        document.getElementById("modal-text").innerHTML = "<h2>" + title + "</h2><p>" + description + "</p><a href='" + link + "' target='_blank'>Ver mais</a>";
        modal.style.display = "block";
    });
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Quando o usuário digita no campo de entrada de pesquisa, filtra os cards
document.getElementById("search-input").addEventListener("keyup", function() {
    var searchQuery = this.value.toLowerCase();
    var cards = document.getElementsByClassName("card");
    var hasResults = false;
    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].querySelector("h2").textContent;
        if (title.toLowerCase().indexOf(searchQuery) > -1) {
            cards[i].style.display = "block";
            hasResults = true;
        } else {
            cards[i].style.display = "none";
        }
    }
    if (!hasResults) {
        alert("Desculpe, não conseguimos encontrar nenhum resultado para sua pesquisa.");
    }
});
