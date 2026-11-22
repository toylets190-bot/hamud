/* Santa Clara EC — js/paginas.js
   Navegação por páginas + abas. Cada item do menu abre a sua página; páginas com várias seções
   mostram uma aba por seção (uma de cada vez, sem rolar até o fim).
   • <section data-page="X"> pertence à página X; data-tab="Y" junta uma seção à aba Y.
   • Links #ancora antigos continuam valendo (abrem página + aba certas).
   • Para mudar títulos/cartões do Início edite SC_PAGES; nomes das abas, SC_TABS. */
(function () {
  'use strict';
  var D = document, B = D.body, BASE = D.title, cur = null, curTab = null, last = location.hash, TABS = {};

  var SC_PAGES = [
    { id: 'noticias',      ico: '📰', t: 'Notícias',            d: 'Sala de imprensa e as últimas do Lobo' },
    { id: 'tabela',        ico: '🏆', t: 'Jogos e Tabela',      d: 'Classificação, resultados e regulamento' },
    { id: 'elenco',        ico: '👕', t: 'Elenco',              d: 'Jogadores da Matilha e monte o seu 11' },
    { id: 'desempenho',    ico: '📊', t: 'Desempenho',          d: 'A campanha e as estatísticas avançadas' },
    { id: 'escolha-jogo',  ico: '⚽', t: 'Meu Jogo',            d: 'Escolha a partida que você vai ver' },
    { id: 'ingressos',     ico: '🎟️', t: 'Ingressos',           d: 'Bilheteria por blocos e validação' },
    { id: 'vou-ao-jogo',   ico: '🧭', t: 'Vou ao Jogo',         d: 'Guia de acesso e onde assistir' },
    { id: 'socio',         ico: '🐺', t: 'Seja Sócio',          d: 'Planos do programa de sócio-torcedor' },
    { id: 'matilha-play',  ico: '🎮', t: 'Fanzone',             d: 'Matilha Play, jogos, torcidas e diversão' },
    { id: 'central',       ico: '🛎️', t: 'Central do Torcedor', d: 'Atendimento e serviços em um só lugar' },
    { id: 'clube',         ico: '🛡️', t: 'O Clube',             d: 'Ficha, história, troféus e diretoria' },
    { id: 'estadio',       ico: '🏟️', t: 'Estádio',             d: 'A Toca do Lobo, eventos e espaços' },
    { id: 'comunidade',    ico: '🤝', t: 'Comunidade',          d: 'Ações e projetos do clube' },
    { id: 'transparencia', ico: '📑', t: 'Transparência',       d: 'Estatuto, documentos e patrocinadores' },
    { id: 'loja',          ico: '🛍️', t: 'Loja Oficial',        d: 'Camisas e produtos oficiais' }
  ];
  var SC_TABS = { 'tabela': 'Jogos e Tabela', 'regulamento': 'Regulamento', 'elenco': 'Elenco', 'monte-seu-11': 'Monte seu 11',
    'desempenho': 'Desempenho', 'estatisticas': 'Estatísticas', 'ingressos': 'Comprar ingresso', 'validacao': 'Validar ingresso',
    'vou-ao-jogo': 'Vou ao Jogo', 'guia-acesso': 'Guia de acesso', 'transmissao': 'Onde assistir', 'matilha-play': 'Matilha Play',
    'torcidas': 'Torcidas', 'fanzone': 'Fanzone', 'matilha-games': 'Games', 'clube': 'O Clube', 'memorial': 'História e Troféus',
    'conquistas-tempo': 'Linha do tempo', 'diretoria': 'Diretoria', 'estadio': 'O Estádio', 'espacos': 'Eventos e Espaços',
    'transparencia': 'Transparência', 'patrocinadores': 'Patrocinadores' };
  window.SC_PAGES = SC_PAGES;
  var ORDER = ['inicio'].concat(SC_PAGES.map(function (x) { return x.id; }));

  function $(i) { return D.getElementById(i); }
  function title(id) { var m = SC_PAGES.filter(function (x) { return x.id === id; })[0]; return m ? m.t : 'Início'; }
  function tabOf(s) { return s.getAttribute('data-tab') || s.id || null; }

  /* id de qualquer elemento -> { page, tab, el } ; el = null quando basta abrir a aba e ir ao topo */
  function resolve(id) {
    if (!id) return null;
    if (id === 'inicio') return { page: 'inicio', tab: null, el: null };
    var el = $(id), sec = el && el.closest('section[data-page]');
    if (!sec) return null;
    var p = sec.getAttribute('data-page'), tab = tabOf(sec);
    return { page: p, tab: tab, el: (p !== 'inicio' && (el === sec || id === tab)) ? null : el };
  }

  function markNav(r, id) {
    var info = [].map.call(D.querySelectorAll('nav.desktop-nav a[href^="#"], #mobileMenu a[href^="#"]'), function (a) {
      var i = a.getAttribute('href').slice(1); return { a: a, id: i, r: resolve(i) };
    });
    var exact = info.some(function (x) { return x.id === id; });
    info.forEach(function (x) {
      var on = !!(x.r && x.r.page === r.page && (exact ? x.id === id : x.r.tab === r.tab));
      x.a.classList.toggle('active', on); if (on) x.a.setAttribute('aria-current', 'page'); else x.a.removeAttribute('aria-current');
    });
    [].forEach.call(D.querySelectorAll('.nav-gb'), function (b) { var g = b.closest('.nav-g'); b.classList.toggle('active', !!(g && g.querySelector('a.active'))); });
  }

  function kick() { setTimeout(function () { window.dispatchEvent(new Event('resize')); }, 60); } /* recalcula carrosséis/gráficos que acabaram de aparecer */

  function setTab(p, t) {
    curTab = t;
    [].forEach.call(D.querySelectorAll('section[data-page="' + p + '"]'), function (s) { s.classList.toggle('tab-off', tabOf(s) !== t); });
    [].forEach.call(D.querySelectorAll('.pg-tabs[data-page="' + p + '"] button'), function (b) { b.setAttribute('aria-selected', b.getAttribute('data-go') === t); });
    kick();
  }

  function pager(p) {
    var el = $('pgPager'); if (!el) return;
    var i = ORDER.indexOf(p), a = ORDER[i - 1], n = ORDER[i + 1];
    el.firstChild.innerHTML =
      (a ? '<a class="pg-prev" href="#' + a + '"><small>← Anterior</small><b>' + title(a) + '</b></a>' : '<span></span>') +
      (n ? '<a class="pg-next" href="#' + n + '"><small>Próxima →</small><b>' + title(n) + '</b></a>' : '<span></span>');
  }

  function show(p, tab) {
    var ts = TABS[p];
    if (cur !== p) {
      cur = p; curTab = null; B.setAttribute('data-pg', p);
      [].forEach.call(D.querySelectorAll('[data-page]'), function (s) { s.classList.toggle('page-on', s.getAttribute('data-page') === p); });
      D.title = p === 'inicio' ? BASE : title(p) + ' | ' + BASE;
      var bt = $('pgBarT'); if (bt) bt.textContent = title(p);
      pager(p); kick();
      if (ts) setTab(p, tab && ts.indexOf(tab) > -1 ? tab : ts[0]);
    } else if (ts && tab && ts.indexOf(tab) > -1 && tab !== curTab) setTab(p, tab);
  }

  var origScroll = Element.prototype.scrollIntoView;

  function go(id, noPush) {
    var r = resolve(id); if (!r) return false;
    show(r.page, r.tab); markNav(r, id);
    if (!noPush && location.hash !== '#' + id) { history.pushState(null, '', '#' + id); last = location.hash; }
    requestAnimationFrame(function () {
      if (r.el) origScroll.call(r.el, { behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return true;
  }
  window.goPage = function (id) { return go(id || 'inicio'); };

  /* Qualquer scrollIntoView() do site em algo de outra página/aba abre essa página/aba primeiro */
  Element.prototype.scrollIntoView = function (a) {
    var sec = this.closest && this.closest('section[data-page]');
    if (sec) {
      var p = sec.getAttribute('data-page'), t = tabOf(sec);
      if (p !== cur || (TABS[p] && t !== curTab)) {
        show(p, t); var rid = sec.id || 'inicio', r = resolve(rid);
        if (r) markNav(r, rid);
        try { history.replaceState(null, '', '#' + rid); last = location.hash; } catch (e) {}
      }
    }
    return origScroll.call(this, a);
  };

  D.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('[data-go]');
    if (b) { go(b.getAttribute('data-go')); return; }
    var a = e.target.closest && e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || a.target === '_blank') return;
    var id = a.getAttribute('href').slice(1);
    if (id && go(id)) e.preventDefault();
  });

  function sync() {
    if (location.hash === last) return;
    last = location.hash;
    var id = decodeURIComponent(last.slice(1));
    go(id || 'inicio', true);
  }
  addEventListener('hashchange', sync);
  addEventListener('popstate', sync);

  /* Abas por página (só quando a página tem 2+ seções), barra "← Início", pager e cartões do Início */
  SC_PAGES.forEach(function (pg) {
    var secs = [].slice.call(D.querySelectorAll('section[data-page="' + pg.id + '"]')), ids = [];
    secs.forEach(function (s) { var t = tabOf(s); if (ids.indexOf(t) < 0) ids.push(t); });
    TABS[pg.id] = ids;
    if (ids.length < 2) { delete TABS[pg.id]; return; }
    var nav = D.createElement('nav'); nav.className = 'pg-tabs'; nav.setAttribute('data-page', pg.id); nav.setAttribute('aria-label', 'Seções de ' + pg.t);
    nav.innerHTML = '<div class="container">' + ids.map(function (t) {
      var s = $(t), h = s && s.querySelector('h2,h3');
      return '<button type="button" role="tab" data-go="' + t + '">' + (SC_TABS[t] || (h ? h.textContent.trim() : t)) + '</button>';
    }).join('') + '</div>';
    secs[0].parentNode.insertBefore(nav, secs[0]);
  });
  var main = D.querySelector('main');
  if (main) {
    var bar = D.createElement('div'); bar.className = 'pg-bar';
    bar.innerHTML = '<div class="container"><a href="#inicio">← Início</a><span id="pgBarT"></span></div>';
    main.insertBefore(bar, main.firstChild);
    var pg = D.createElement('div'); pg.className = 'pg-pager'; pg.id = 'pgPager'; pg.innerHTML = '<div class="container"></div>';
    main.appendChild(pg);
  }
  var grid = $('pgGrid');
  if (grid) grid.innerHTML = SC_PAGES.map(function (x) {
    return '<a class="pg-card" href="#' + x.id + '"><span class="pg-ico" aria-hidden="true">' + x.ico + '</span><b>' + x.t + '</b><span>' + x.d + '</span><i>Abrir →</i></a>';
  }).join('');

  var id0 = decodeURIComponent(location.hash.slice(1));
  if (!(id0 && go(id0, true))) { show('inicio'); markNav(resolve('inicio'), 'inicio'); }
})();
