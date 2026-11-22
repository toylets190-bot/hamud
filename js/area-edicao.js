/* Santa Clara EC — js/config.js
   ÁREA DE EDIÇÃO: todo o conteúdo do site (jogos, tabela, elenco, notícias, contatos, redes...). Edite aqui. Veja docs/GUIA-DE-EDICAO.md.
   Carregado como script clássico, na ordem do index.html (não reordene). */

  window.EDITAR = {

    /* ---------- 1) CORES DO CLUBE ---------- */
    CORES: {
      primaria: '#1a3a6b',   // azul-escuro
      destaque: '#3b82c4',   // azul-claro
      dourado:  '#c9a84c',   // detalhes e destaques
      marrom:   '#7a4a2a'
    },

    /* ---------- 2) PRÓXIMO JOGO (topo do site, contador e barra de aviso) ---------- */
    PROXIMO_JOGO: {   /* os valores são recalculados a partir de PARTIDAS */
      adversario: 'Teófilo Otoni FC', sigla: 'TEO', competicao: 'Mineiro Módulo II', rodada: 15,
      local: 'Estádio Vale de Santa Clara — Santa Clara', data: '2026-11-29T16:00:00',
      rotulo: '29 de novembro • 16:00', portoes: '13:30', emCasa: true
    },

    /* ---------- 2b) CENTRAL DE JOGOS  (A FORMA MAIS FÁCIL DE EDITAR) ----------
       Uma linha por partida. Mude aqui e o site inteiro acompanha: próximo jogo, contador, resultados,
       calendário, "Último Resultado" e a posição do Santa Clara na tabela.
         • Jogo AINDA NÃO realizado: deixe  gols: null, golsAdv: null.
         • Jogo realizado: preencha gols (Santa Clara) e golsAdv (adversário).
         • data: 'AAAA-MM-DD'   hora: 'HH:MM'   emCasa: true (mandante) ou false (visitante)
         • Opcionais por jogo: comp, local, portoes ('13:30'), arbitragem, escalacao, sigla.
         • ADIAR um jogo: troque só data e hora.   ADICIONAR: copie uma linha e cole no fim.
       Se esta lista tiver jogos, as seções 2, 3 e 4 abaixo são ignoradas (ficam só como modelo). */
    /* ---------- 2e) INSTITUCIONAL ----------
       EVENTOS: [{ titulo, data:'AAAA-MM-DD', hora:'19:00', local, tipo, desc }]  (o próximo evento aparece no carrossel da home)
       DOCUMENTOS: [{ titulo, tipo:'Estatuto|Ata|Balanço|Regulamento|Outro', ano:2026, url:'https://...' }]  (vazio = o site oferece os documentos padrão para solicitar)
       ESPACOS: [{ emoji, nome, desc }]  •  CONDUTA: ['regra 1', 'regra 2'] */
    EVENTOS: [], DOCUMENTOS: [], ESPACOS: [], CONDUTA: [],
    /* ---------- 2d) CONTATO E GALERIA ----------
       CONTATO: whatsapp (só números com DDI, ex.: '5538999999999') e email. Preenchidos, aparecem os botões "Enviar por WhatsApp / e-mail" em Fale conosco e Seja um Lobo.
       GALERIA: fotos [{ src: 'https://...', legenda: 'Texto' }]. Vazia = a galeria usa as imagens do próprio site. */
    CONTATO: { whatsapp: '', email: '' },
    /* REDES: links completos (https://...). Só aparecem no rodapé os que estiverem preenchidos. */
    REDES: { instagram: '', youtube: '', x: '', tiktok: '', facebook: '', canalWhatsapp: '' },
    GALERIA: [],
    /* ---------- 2c) ESTADIOS DOS ADVERSÁRIOS (jogos FORA de casa) ----------
       Aparece na seção "Estádio do mandante". Preencha o que souber; o que ficar vazio aparece como "a confirmar com o mandante".
       estadio = nome do estádio • endereco • capacidade • setor = onde fica a torcida visitante • contato = site/telefone • obs = aviso extra */
    ESTADIOS_ADVERSARIOS: {
      'Democrata GV': { estadio: '', cidade: 'Governador Valadares — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'Atl. Araçuaí': { estadio: '', cidade: 'Araçuaí — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'Uberlândia EC': { estadio: '', cidade: 'Uberlândia — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'Ipatinga FC': { estadio: '', cidade: 'Ipatinga — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'EC Montes Claros': { estadio: '', cidade: 'Montes Claros — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'Pouso Alegre FC': { estadio: '', cidade: 'Pouso Alegre — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'Diamantina EC': { estadio: '', cidade: 'Diamantina — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'Muriaé Sport': { estadio: '', cidade: 'Muriaé — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' },
      'Teófilo Otoni FC': { estadio: '', cidade: 'Teófilo Otoni — MG', endereco: '', capacidade: '', setor: '', contato: '', obs: '' }
    },
    PARTIDAS_PADRAO: { comp: 'Mineiro Módulo II', local: 'Estádio Vale de Santa Clara — Santa Clara', hora: '16:00' },
    PARTIDAS: [
      { rodada: 1 , adv: 'Pouso Alegre FC'   , data: '2026-08-16', hora: '16:00', emCasa: true , gols: 1   , golsAdv: 0 },
      { rodada: 2 , adv: 'EC Montes Claros'  , data: '2026-08-23', hora: '16:00', emCasa: false, gols: 1   , golsAdv: 0 },
      { rodada: 3 , adv: 'Ipatinga FC'       , data: '2026-08-30', hora: '16:00', emCasa: true , gols: 4   , golsAdv: 0 },
      { rodada: 4 , adv: 'Muriaé Sport'      , data: '2026-09-06', hora: '16:00', emCasa: false, gols: 2   , golsAdv: 0 },
      { rodada: 5 , adv: 'Democrata GV'      , data: '2026-09-13', hora: '16:00', emCasa: true , gols: 1   , golsAdv: 1 },
      { rodada: 6 , adv: 'Teófilo Otoni FC'  , data: '2026-09-20', hora: '16:00', emCasa: false, gols: 3   , golsAdv: 1 },
      { rodada: 7 , adv: 'Diamantina EC'     , data: '2026-09-27', hora: '16:00', emCasa: true , gols: 2   , golsAdv: 0 },
      { rodada: 8 , adv: 'Atl. Araçuaí'      , data: '2026-10-04', hora: '16:00', emCasa: true , gols: 2   , golsAdv: 1 },
      { rodada: 9 , adv: 'Uberlândia EC'     , data: '2026-10-11', hora: '16:00', emCasa: false, gols: 0   , golsAdv: 0 },
      { rodada: 10, adv: 'Pouso Alegre FC'   , data: '2026-10-18', hora: '16:00', emCasa: false, gols: 2   , golsAdv: 1 },
      { rodada: 11, adv: 'EC Montes Claros'  , data: '2026-10-25', hora: '16:00', emCasa: true , gols: 3   , golsAdv: 0 },
      { rodada: 12, adv: 'Ipatinga FC'       , data: '2026-11-01', hora: '18:00', emCasa: false, gols: 1   , golsAdv: 2 },
      { rodada: 13, adv: 'Muriaé Sport'      , data: '2026-11-08', hora: '16:00', emCasa: true , gols: 4   , golsAdv: 1 },
      { rodada: 14, adv: 'Democrata GV'      , data: '2026-11-15', hora: '16:00', emCasa: false, gols: 1   , golsAdv: 1 },
      { rodada: 15, adv: 'Teófilo Otoni FC'  , data: '2026-11-29', hora: '16:00', emCasa: true , gols: null, golsAdv: null },
      { rodada: 16, adv: 'Diamantina EC'     , data: '2026-12-06', hora: '11:00', emCasa: false, gols: null, golsAdv: null },
      { rodada: 17, adv: 'Atl. Araçuaí'      , data: '2026-12-13', hora: '16:00', emCasa: false, gols: null, golsAdv: null },
      { rodada: 18, adv: 'Uberlândia EC'     , data: '2026-12-20', hora: '16:00', emCasa: true , gols: null, golsAdv: null }
    ],

    /* ---------- 3) RESULTADOS DO SANTA CLARA ----------
       Para ADICIONAR um resultado: copie uma linha, cole no fim da lista e troque os valores.
       A posição, os pontos, as vitórias e a sequência do Santa Clara na tabela
       são calculados sozinhos a partir desta lista. */
    JOGOS: [],   /* gerado sozinho a partir de PARTIDAS (não edite aqui) */

    /* ---------- 4) PRÓXIMOS JOGOS (calendário) ---------- */
    CALENDARIO: [],   /* gerado sozinho a partir de PARTIDAS (não edite aqui) */

    /* ---------- 5) TABELA DOS OUTROS TIMES ----------
       j = jogos, v = vitórias, sg = saldo de gols, pts = pontos,
       form = últimos 5 jogos (V vitória, E empate, D derrota).
       O Santa Clara NÃO precisa ser editado aqui (vem da lista JOGOS).
       A ordem da tabela é feita sozinha: pontos, depois saldo, depois vitórias. */
    TABELA: [
      { name: 'Democrata GV'    , j: 14, v: 8 , sg:   15, pts: 30, form: ['V', 'V', 'E', 'V', 'E'] },
      { name: 'Atl. Araçuaí'    , j: 14, v: 9 , sg:   14, pts: 29, form: ['V', 'D', 'V', 'D', 'E'] },
      { name: 'Uberlândia EC'   , j: 14, v: 5 , sg:    8, pts: 22, form: ['E', 'V', 'V', 'V', 'V'] },
      { name: 'EC Montes Claros', j: 14, v: 4 , sg:   -1, pts: 17, form: ['E', 'D', 'E', 'D', 'E'] },
      { name: 'Ipatinga FC'     , j: 14, v: 5 , sg:   -6, pts: 17, form: ['D', 'V', 'V', 'D', 'D'] },
      { name: 'Diamantina EC'   , j: 14, v: 4 , sg:   -5, pts: 16, form: ['V', 'V', 'D', 'E', 'V'] },
      { name: 'Pouso Alegre FC' , j: 14, v: 1 , sg:   -8, pts:  9, form: ['D', 'D', 'E', 'E', 'D'] },
      { name: 'Muriaé Sport'    , j: 14, v: 1 , sg:  -21, pts:  8, form: ['D', 'D', 'E', 'D', 'E'] },
      { name: 'Teófilo Otoni FC', j: 14, v: 1 , sg:  -15, pts:  7, form: ['D', 'D', 'D', 'V', 'E'] }
    ],

    /* ---------- 6) PATROCINADORES ----------
       logo: link direto da imagem (i.imgur.com/....png). url: site do patrocinador (vazio = sem botão). */
    PATROCINADORES: [
      { tier: 'Patrocinador Master', name: 'Banco ValeMais', icon: 'BV', logo: 'https://i.imgur.com/UAxJFpo.png', url: '',
        desc: 'Financia obras de reforma do Estádio Vale de Santa Clara e mantém o vínculo como patrocinador master até 2028.' },
      { tier: 'Patrocinador Oficial', name: 'JequiLog', icon: 'JL', logo: 'https://i.imgur.com/0f6av2d.png', url: '',
        desc: 'Parceira de logística do clube: transporte de material esportivo e apoio nas viagens pelo Vale do Jequitinhonha.' },
      { tier: 'Patrocinador Oficial', name: 'MinasNet', icon: 'MN', logo: 'https://i.imgur.com/HJRKlQy.png', url: '',
        desc: 'Provedora oficial de internet do clube, do estádio e das transmissões dos jogos.' },
      { tier: 'Patrocinador Oficial', name: 'Sertão Energia', icon: 'SE', logo: 'https://i.imgur.com/KSgVhz6.png', url: '',
        desc: 'Fornece energia ao Estádio Vale de Santa Clara e apoia projetos da base.' }
    ],
    /* ---------- 6b) NÚMEROS ---------- */
    SOCIOS: 12480,   // sócios na Matilha (os outros números são calculados sozinhos)

    /* ---------- 7) NOTÍCIAS ----------
       Para ADICIONAR: copie um bloco { ... }, cole no TOPO da lista e use um id novo.
       category: FUTEBOL, CLUBE, TORCIDA ou BASE. image: link da foto (pode ficar '' ). */
    NOTICIAS: [
        {"id": 10, "category": "FUTEBOL", "date": "16 NOV 2026", "title": "Empate em Governador Valadares mantém o Santa Clara na liderança", "excerpt": "Em duelo direto pelo título, o Lobo ficou no 1 a 1 com o Democrata e segue com 33 pontos, três à frente do rival.", "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop", "content": "No clássico da rodada 14, Rafael Veloz abriu o placar para o Santa Clara e o Democrata empatou na segunda etapa. O resultado mantém o Lobo na ponta, com 33 pontos, contra 30 do Democrata, que ainda não perdeu no campeonato. O Atlético de Araçuaí aparece logo atrás, com 29."},
        {"id": 6, "category": "CLUBE", "date": "13 NOV 2026", "title": "Ingressos para Santa Clara x Teófilo Otoni já estão à venda", "excerpt": "Jogo da rodada 15 será no dia 29 de novembro, às 16h, na Toca do Lobo. Sócios têm prioridade na escolha do bloco.", "image": "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=600&auto=format&fit=crop", "content": "A bilheteria abriu para a partida contra o Teófilo Otoni, marcada para 29 de novembro, às 16h, no Estádio Vale de Santa Clara. A compra é feita por setor e bloco, com reserva de 10 minutos e meia-entrada para quem tem direito. Os portões abrem às 13h30."},
        {"id": 9, "category": "FUTEBOL", "date": "9 NOV 2026", "title": "Santa Clara goleia o Muriaé por 4 a 1 e volta a vencer na Toca do Lobo", "excerpt": "Depois do tropeço em Ipatinga, o time reagiu com quatro gols diante de 18 mil torcedores.", "image": "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=600&auto=format&fit=crop", "content": "Com gols de Rafael Veloz, Eder Cunha e dois de Jonas Travessão, o Santa Clara fez 4 a 1 no Muriaé Sport pela rodada 13. A vitória encerrou a sequência de um jogo sem vencer e recolocou o time na ponta da tabela."},
        {"id": 8, "category": "FUTEBOL", "date": "2 NOV 2026", "title": "Ipatinga vence por 2 a 1 e interrompe invencibilidade de 11 jogos do Santa Clara", "excerpt": "Primeira derrota do Lobo no campeonato veio em Ipatinga, em jogo decidido na segunda etapa.", "image": "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=600&auto=format&fit=crop", "content": "Depois de 11 partidas sem perder, o Santa Clara caiu diante do Ipatinga FC por 2 a 1, na rodada 12. Eder Cunha descontou, mas o time não conseguiu o empate. A liderança foi mantida."},
        {"id": 7, "category": "FUTEBOL", "date": "26 OUT 2026", "title": "Santa Clara vence o Montes Claros por 3 a 0 e embala na Toca do Lobo", "excerpt": "Placar construído no primeiro tempo e administrado com tranquilidade.", "image": "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=600&auto=format&fit=crop", "content": "O Lobo dominou o EC Montes Claros na rodada 11 e fechou o jogo em 3 a 0, com gols de Rafael Veloz, Jonas Travessão e Eder Cunha. A defesa de Diego Firmeza não foi vazada."},
        {"id": 5, "category": "FUTEBOL", "date": "5 OUT 2026", "title": "Santa Clara vence o Clássico do Vale por 2 a 1 diante do Araçuaí", "excerpt": "Torcida lotou a Toca do Lobo e viu a virada na segunda etapa.", "image": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop", "content": "Em jogo equilibrado, o Santa Clara venceu o Atlético de Araçuaí por 2 a 1 na rodada 8, com gols de Jonas Travessão e Rafael Veloz, e saiu do clássico com 22 pontos."},
        {
          id: 1, category: 'FUTEBOL', date: '26 SET 2026',
          title: 'Santa Clara aprimora bloco defensivo e transição rápida antes do Clássico do Vale',
          excerpt: 'Com foco total no confronto diante do Atlético de Araçuaí, comissão técnica intensificou trabalho de contra-ataque e recuperação de posse.',
          image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=800&auto=format&fit=crop',
          content: 'O elenco do Santa Clara Esporte Clube realizou na manhã deste sábado a última sessão antes do Clássico do Vale. O técnico destacou a necessidade de manutenção do bloco baixo e velocidade nas transições — marca registrada do Lobo.'
        },
        {
          id: 2, category: 'CLUBE', date: '24 SET 2026',
          title: 'Santa Clara EC oficializa renovação do patrocínio master com o Banco ValeMais',
          excerpt: 'Acordo vigente até 2028 garante investimentos no futebol de base e na modernização do Estádio Vale de Santa Clara.',
          image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=600&auto=format&fit=crop',
          content: 'O Banco ValeMais renova o vínculo como patrocinador master do Santa Clara até 2028, consolidando uma parceria que financia projetos na base e obras no estádio.'
        },
        {
          id: 3, category: 'TORCIDA', date: '22 SET 2026',
          title: 'Terror do Vale prepara mosaico e Túnel do Lobo decorado para o clássico',
          excerpt: 'A Matilha promete recepção histórica com bandeirões azuis e marrons e iluminação especial no acesso subterrâneo.',
          image: 'https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&w=600&auto=format&fit=crop',
          content: 'A torcida organizada Terror do Vale confirmou a montagem de um mosaico especial para o Clássico do Vale, além de decoração no Túnel do Lobo com as cores do clube.'
        },
        {
          id: 4, category: 'BASE', date: '20 SET 2026',
          title: 'Sub-20 goleia Araçuaí por 3 a 0 na Copa do Vale do Jequitinhonha',
          excerpt: 'Garotos da base mostram a força da identidade regional e avançam à semifinal da competição.',
          image: 'https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=600&auto=format&fit=crop',
          content: 'Com três gols de atletas formados nas escolinhas do clube, o Sub-20 do Santa Clara venceu o Atlético de Araçuaí e avançou à semifinal da Copa do Vale do Jequitinhonha.'
        }
      ],

    /* ---------- 8) ELENCO ----------
       Para ADICIONAR um jogador: copie uma linha/bloco e use um id novo.
       pos: GOLEIRO, DEFENSOR, MEIA ou ATACANTE. img: link da foto (vazio = foto padrão). */
    ELENCO: [
        { id: 1,  name: 'Diego Firmeza',     nick: 'O Muralha do Vale',  num: 1,  pos: 'GOLEIRO',       age: 30, games: 38, goals: 0,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Reflexos rápidos e liderança no gol. Insuperável na Toca do Lobo há 3 temporadas.' },
        { id: 2,  name: 'Marcelo Pedra',     nick: 'Pedreira',           num: 3,  pos: 'DEFENSOR',      age: 28, games: 34, goals: 2,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Zagueiro de cabeça e carrinho certeiro. Âncora defensiva do clube.' },
        { id: 3,  name: 'Thiago Cerrado',    nick: 'Espinheiro',         num: 4,  pos: 'DEFENSOR',      age: 26, games: 32, goals: 1,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Posicionamento exemplar e saída de bola limpa.' },
        { id: 4,  name: 'Bruno Arêdes',      nick: 'Corredeira',         num: 6,  pos: 'DEFENSOR',      age: 22, games: 29, goals: 3,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Lateral esquerdo com arrancadas explosivas pelo flanco.' },
        { id: 5,  name: 'Kleber Vale',       nick: 'O Médico do Vale',   num: 5,  pos: 'MEIO-CAMPISTA', age: 29, games: 40, goals: 6,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Volante inteligente, recupera bolas e inicia transições.' },
        { id: 6,  name: 'Jonas Travessão',   nick: 'Parede',             num: 8,  pos: 'MEIO-CAMPISTA', age: 25, games: 36, goals: 9,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Meia de ligação com passe em profundidade e chutes rasteiros.' },
        { id: 7,  name: 'Rafael Veloz',      nick: 'Lobo da Área',       num: 9,  pos: 'ATACANTE',      age: 24, games: 40, goals: 22, img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Centroavante de velocidade e frieza nas finalizações. Ídolo da Matilha.' },
        { id: 8,  name: 'Eder Cunha',        nick: 'Corta-Vento',        num: 11, pos: 'ATACANTE',      age: 21, games: 30, goals: 12, img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Ponta direita de drible rápido e cruzamentos na medida.' },
        { id: 9,  name: 'Paulo Ribeiro',     nick: 'Farol',              num: 12, pos: 'GOLEIRO',        age: 23, games: 10, goals: 0,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Goleiro reserva com reflexos impressionantes.' },
        { id: 10, name: 'Leandro Caatinga',  nick: 'Espinho',            num: 14, pos: 'DEFENSOR',      age: 20, games: 16, goals: 0,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Lateral direito ágil, revelação da base do clube.' },
        { id: 11, name: 'Henrique Afluente', nick: 'Correnteza',         num: 15, pos: 'MEIO-CAMPISTA', age: 27, games: 28, goals: 4,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Meio-campista de box-to-box incansável nos 90 minutos.' },
        { id: 12, name: 'Fábio Carrasco',    nick: 'Rapel',              num: 17, pos: 'MEIO-CAMPISTA', age: 24, games: 22, goals: 3,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Especialista em bola parada e cobranças de falta.' },
        { id: 13, name: 'Matheus Jequi',     nick: 'Canhão',             num: 19, pos: 'ATACANTE',      age: 19, games: 14, goals: 7,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Joia da base. Atacante jovem com finalização potente.' },
        { id: 14, name: 'André Muranga',     nick: 'Bloco',              num: 22, pos: 'DEFENSOR',      age: 30, games: 20, goals: 1,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Zagueiro experiente e veterano do elenco. Calmo e preciso.' },
        { id: 15, name: 'Davi Minas',        nick: 'Barravento',         num: 25, pos: 'DEFENSOR',      age: 21, games: 12, goals: 0,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Zagueiro jovem versátil, cobre as duas laterais.' },
        { id: 16, name: 'Rodrigo Lobo',      nick: 'Uivante',            num: 27, pos: 'MEIO-CAMPISTA', age: 26, games: 24, goals: 5,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Segundo volante de presença física e coragem no duelo.' },
        { id: 17, name: 'César Marrom',      nick: 'Terra',              num: 30, pos: 'MEIO-CAMPISTA', age: 28, games: 30, goals: 2,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Primeiro volante de marcação firme. Referência na recomposição.' },
        { id: 18, name: 'Felipe Raiz',       nick: 'Asa',                num: 33, pos: 'ATACANTE',      age: 20, games: 17, goals: 6,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Atacante de ponta com velocidade e saída rápida.' },
        { id: 19, name: 'Samuel Vão',        nick: 'Rocha',              num: 35, pos: 'ATACANTE',      age: 27, games: 18, goals: 5,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Centroavante de referência física e duelo no ar.' },
        { id: 20, name: 'Leo Guarani',       nick: 'Filhote',            num: 99, pos: 'GOLEIRO',       age: 18, games: 5,  goals: 0,  img: 'https://i.pinimg.com/474x/54/f4/b5/54f4b55a59ff9ddf2a2655c7f35e4356.jpg', bio: 'Terceiro goleiro e capitão do Sub-20. Promessa do Vale.' }
      ],
    /* ---------- 9) HISTÓRIA DO CLUBE (linha do tempo) ----------
       Cada bloco é um marco. Para adicionar, copie um bloco e troque ano, título e texto. */
    HISTORIA: [
        { year: 2000, title: 'Fundação do Santa Clara EC',    desc: 'Nasce no Vale do Jequitinhonha o Santa Clara Esporte Clube, com a missão de representar sua gente.' },
        { year: 2003, title: 'Primeira Participação Estadual', desc: 'Estreia histórica no Campeonato Mineiro. O clube começa a construir sua identidade regional.' },
        { year: 2007, title: 'Inauguração da Toca do Lobo',   desc: 'O Estádio Vale de Santa Clara é inaugurado com 25 mil lugares. A Toca do Lobo entra no imaginário do Vale.' },
        { year: 2015, title: 'Título da Copa do Vale',        desc: 'Primeira conquista da Copa do Vale do Jequitinhonha. A Matilha festeja o primeiro grande título regional.' },
        { year: 2024, title: 'Era SAF — Nova Fase',           desc: 'Estruturação como SAF. Novo projeto profissional, elenco renovado e ambições no Módulo II mineiro.' }
      ],

    /* ---------- 10) TROFÉUS ----------
       Copie um bloco para adicionar um título. img: link da foto do troféu (opcional). */
    TROFEUS: [
        { name: 'Campeonato Mineiro – Segunda Divisão', cat: 'Profissional', year: '2007, 2014', count: '2x', icon: '🏆', img: 'https://s2-ge.glbimg.com/WRNMJQxzA2ybLOw3QtzgXdmRo3c=/608x1080/top/smart/https://i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2023/a/k/jDoPoBRI64pOqd9OKB5Q/trofeu-fmf.jpg' },
        { name: 'Campeonato Mineiro – Módulo II', cat: 'Profissional', year: '2018, 2025', count: '2x', icon: '🏆', img: 'https://www.megacidade.com/images/noticias/43347/5dc80a794f36345934ce16956028395b.jpeg' },
        { name: 'Copa FMF', cat: 'Profissional', year: '2021, 2026', count: '2x', icon: '🏆', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiByhxjAXlfkwBOySUqy11sZDbbnbMJpVLYK0E34cRhw&s=10' },
        { name: 'Campeonato Mineiro Sub-20', cat: 'Base', year: '2010, 2022', count: '2x', icon: '🏆', img: 'https://esumula.fmf.com.br/noticias/F10N20250212151522_3986.jpg' },
        { name: 'Campeonato Mineiro Sub-17', cat: 'Base', year: '2016, 2024', count: '2x', icon: '🏆', img: 'https://esumula.fmf.com.br/noticias/F10N20250422160658_3998.jpg' },
        { name: 'Copa São Paulo de Futebol Júnior', cat: 'Copas de base', year: '2019, 2025', count: '2x', icon: '🏆', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzD6jMWKybCUrNFadIZ__oIojBcoLO5BMIzlxiF35YWprNER78aB4TXpEL&s=10' },
        { name: 'Copa do Brasil Sub-20', cat: 'Copas de base', year: '2023', count: '1x', icon: '🏆', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYr2OBBz6SV0qA0M51l4uIBHMdVFobR2pLYxdSvYTPpw&s=10' },
        { name: 'Copa do Brasil Sub-17', cat: 'Copas de base', year: '2024', count: '1x', icon: '🏆', img: 'https://dabase.com.br/wp-content/uploads/2023/03/20171130212604_1.jpeg' },
        { name: 'Taça BH Sub-20', cat: 'Copas de base', year: '2017', count: '1x', icon: '🏆', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnBi7GLmH87P6BIn1raouZBDTenDH5X-6wNVJKS6IIg&s=10' },
        { name: 'Copa Alterosa', cat: 'Regional / estadual', year: '2008, 2012, 2019', count: '3x', icon: '🏆', img: 'https://i.imgur.com/EsPeKjV.png' },
        { name: 'Campeonato Regional da Liga', cat: 'Regional / estadual', year: '2003, 2006, 2011, 2015, 2020, 2023', count: '6x', icon: '🏆', img: 'https://i.imgur.com/4PIcXZW.png' },
        { name: 'Campeonato do Vale do Jequitinhonha', cat: 'Vale do Jequitinhonha', year: '2005', count: '1x', icon: '🏆', img: 'https://i.imgur.com/l8nHLaF.png' },
        { name: 'Copa do Vale do Jequitinhonha', cat: 'Vale do Jequitinhonha', year: '2009', count: '1x', icon: '🏆', img: 'https://png.pngtree.com/png-clipart/20250122/original/pngtree-world-football-championship-trophy-png-image_19855640.png' },
        { name: 'Supercopa do Vale', cat: 'Vale do Jequitinhonha', year: '2013', count: '1x', icon: '🏆', img: 'https://png.pngtree.com/png-vector/20260317/ourmid/pngtree-green-and-silver-trophy-cup-png-image_18916514.webp' },
        { name: 'Copa Integração do Vale', cat: 'Vale do Jequitinhonha', year: '2018', count: '1x', icon: '🏆', img: 'https://www.wikisporting.com/images/0/0d/F._Ta%C3%A7a_de_Portugal.png' },
        { name: 'Taça Vale de Santa Clara', cat: 'Vale do Jequitinhonha', year: '2021', count: '1x', icon: '🏆', img: 'https://i.imgur.com/kWyVVdq.png' },
        { name: 'Copa do Lobo-Guará', cat: 'Vale do Jequitinhonha', year: '2024', count: '1x', icon: '🏆', img: 'https://i.imgur.com/OF5zJcG.png' }
      ],

    /* ---------- 11) DIRETORIA ----------
       Um bloco por pessoa: nome, cargo e foto. */
    DIRETORIA: [
        { name: 'Marcos Aurélio Ferraz',     role: 'Presidente',                                  photo: 'https://s.namemc.com/3d/skin/body.png?id=e763c1d597ac357a&model=classic&width=320&height=320', bio: 'À frente do clube desde 2022, conduziu a estruturação da SAF e a reforma do estádio.' },
        { name: 'Helena Camargo Reis',        role: 'Vice-Presidente / Diretora Financeira',        photo: 'https://p.novaskin.me/714903773.png?class=thumbnail2x', bio: 'Responsável pela gestão financeira e pela captação de patrocínios do clube.' },
        { name: 'Rogério "Rogerinho" Andrade', role: 'Diretor de Futebol',                          photo: 'https://s.namemc.com/3d/skin/body.png?id=354790babeda2bc0&model=classic&theta=30&phi=21&time=709.44&width=600&height=800', bio: 'Ex-jogador do Santa Clara, hoje comanda o planejamento esportivo do elenco.' },
        { name: 'Cíntia Marques Tavares',      role: 'Diretora de Marketing e Relações com a Torcida', photo: 'https://p.novaskin.me/ydikGXQIdj1WJ88bHSYG.png?class=thumbnail2x', bio: 'Cuida da comunicação, dos patrocínios e dos projetos sociais do clube.' }
      ],

    /* ---------- 12) COMISSÃO TÉCNICA ----------
       Um bloco por pessoa: nome, função e foto. */
    COMISSAO_TECNICA: [
        { name: 'Warley Nogueira',    role: 'Técnico Principal',      photo: 'https://s.namemc.com/3d/skin/body.png?id=6d7f0800b17ea0f3&model=classic&width=320&height=320', bio: 'No comando desde 2024, implantou o bloco baixo defensivo que é marca registrada da equipe.' },
        { name: 'Adilson Praxedes',   role: 'Auxiliar Técnico',       photo: 'https://s.namemc.com/3d/skin/body.png?id=3925f256a33cbfdf&model=slim&width=320&height=320', bio: 'Braço direito de Warley Nogueira, comanda os treinos de bola parada e a análise de vídeo dos adversários.' },
        { name: 'Vinícius Homem',     role: 'Preparador Físico',      photo: 'https://s.namemc.com/3d/skin/body.png?id=c16bfff993f620e5&model=classic&width=320&height=320', bio: 'Responsável pela periodização física do elenco e pela prevenção de lesões ao longo da temporada.' },
        { name: 'Camila Estanislau',  role: 'Fisioterapeuta',         photo: 'https://s.namemc.com/3d/skin/body.png?id=d27e038f0d7cec8b&model=slim&width=320&height=320', bio: 'Cuida da recuperação e reabilitação dos atletas no departamento médico da Toca do Lobo.' }
      ],
    /* ---------- 13) ESPLANADA DA TOCA DO LOBO ----------
       abre/fecha: horário normal (formato HH:MM). icone: ticket, bag, food, coffee, wc, seat, camera, info, pin.
       Para adicionar um serviço, copie uma linha. tourHorarios: horários do tour. */
    ESPLANADA: {
      abre: '08:00', fecha: '21:00', dias: 'Todos os dias',
      servicos: [
        { icone: 'ticket', nome: 'Bilheteria física',        desc: 'Compra e retirada de ingressos.' },
        { icone: 'bag',    nome: 'Loja oficial',             desc: 'Camisas, acessórios e lembranças do Lobo.' },
        { icone: 'food',   nome: 'Restaurantes e lanchonetes', desc: 'Refeições e lanches antes e depois do jogo.' },
        { icone: 'coffee', nome: 'Cafeteria',                desc: 'Café, salgados e doces.' },
        { icone: 'wc',     nome: 'Banheiros',                desc: 'Distribuídos pela esplanada.' },
        { icone: 'seat',   nome: 'Áreas de convivência',     desc: 'Espaço para encontrar a turma.' },
        { icone: 'camera', nome: 'Espaços para fotos',       desc: 'Elementos históricos e vista do estádio.' },
        { icone: 'info',   nome: 'Atendimento ao torcedor',  desc: 'Dúvidas, achados e perdidos e apoio.' }
      ],
      tourHorarios: ['10:00','12:00','14:00','16:00','18:00'],
      tourAreas: ['Vestiário do Santa Clara','Túnel dos jogadores','Banco de reservas','Área técnica','Sala de imprensa','Museu/história do clube','Arquibancadas','Campo (quando permitido)','Camarotes','Área VIP','Sala de troféus','Bastidores da operação']
    }
  };
  /* Cores aplicadas antes da página aparecer */
  (function () {
    var c = window.EDITAR.CORES || {}, r = document.documentElement.style;
    if (c.primaria) r.setProperty('--club-primary', c.primaria);
    if (c.destaque) r.setProperty('--club-accent', c.destaque);
    if (c.dourado)  r.setProperty('--club-gold', c.dourado);
    if (c.marrom)   r.setProperty('--club-brown', c.marrom);
  })();
  
