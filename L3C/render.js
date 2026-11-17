/* =====================================================================
   MONTAGEM DA PÁGINA · L3C
   Lê DADOS (dados.js) e preenche professores, projetos, membros e
   publicações. Não precisa ser editado para atualizar conteúdo.
   ===================================================================== */
(function(){
  var LANGS = ['pt', 'en', 'es'];

  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  /* Texto em 3 idiomas → spans que o CSS mostra/esconde conforme o idioma.
     Aceita string única (igual em todos) ou { pt, en, es }. HTML permitido. */
  function t3(v){
    if (v === null || v === undefined) return '';
    if (typeof v !== 'object') return String(v);
    return LANGS.map(function(l){ return '<span data-l="' + l + '">' + (v[l] || v.pt || '') + '</span>'; }).join('');
  }
  /* Parágrafo em 3 idiomas (um <p> por idioma) */
  function p3(v, attrs){
    attrs = attrs || '';
    if (typeof v !== 'object') return '<p' + attrs + '>' + v + '</p>';
    return LANGS.map(function(l){ return '<p' + attrs + ' data-l="' + l + '">' + (v[l] || v.pt || '') + '</p>'; }).join('');
  }

  var NIVEL = {
    dr: {cls: 'dr', txt: {pt: 'Doutorado', en: 'Ph.D.', es: 'Doctorado'}},
    ms: {cls: 'ms', txt: {pt: 'Mestrado', en: "Master's", es: 'Maestría'}},
    gr: {cls: 'gr', txt: {pt: 'Graduação', en: 'Undergrad', es: 'Grado'}}
  };
  function badge(n){ var b = NIVEL[n]; return b ? t3(b.txt) : ''; }
  var A_CONFIRMAR = '<span class="placeholder">' + t3({pt: 'a confirmar', en: 'to be confirmed', es: 'por confirmar'}) + '</span>';
  var ATUAL = {pt: 'atual', en: 'present', es: 'actualidad'};
  var EXT = ' target="_blank" rel="noopener"';

  function set(id, html){ var el = document.getElementById(id); if (el) el.innerHTML = html; }

  /* ---------- números da página inicial ---------- */
  set('nProf', DADOS.professores.length);
  set('nProj', DADOS.projetos.length);

  /* ---------- professores ---------- */
  set('profList', DADOS.professores.map(function(p){
    var foto = '<img class="photo' + (p.fotoQuadrada ? ' square' : '') + '" src="' + esc(p.foto) + '" width="' + (p.fotoLargura || 400) +
               '" height="' + (p.fotoAltura || 500) + '" alt="' + esc(p.nome) + '" loading="lazy">';
    var links = (p.links || []).map(function(l){ return '<a' + EXT + ' href="' + esc(l.url) + '">' + t3(l.rotulo) + '</a>'; }).join('\n');
    return '<article class="person">' + foto +
      '<div class="p-body"><h3>' + esc(p.nome) + '</h3>' +
      '<p class="role">' + t3(p.cargo) + '</p>' +
      p3(p.bio) +
      (p.detalhes || []).map(function(d){ return '<p class="muted">' + t3(d) + '</p>'; }).join('') +
      '<div class="links">' + links + '</div></div></article>';
  }).join(''));

  /* ---------- projetos ---------- */
  var ativos = DADOS.projetos.filter(function(p){ return p.ativo; });
  var anteriores = DADOS.projetos.filter(function(p){ return !p.ativo; });
  set('projAtivos', ativos.map(function(p){
    return '<li><span class="badge on">' + t3({pt: 'Ativo', en: 'Active', es: 'Activo'}) + '</span> ' +
      '<span class="i-title">' + t3(p.titulo) + '</span> ' +
      '<span class="i-meta">· ' + esc(p.inicio) + ' – ' + t3(ATUAL) + (p.financiador ? ' · ' + esc(p.financiador) : '') + '</span>' +
      (p.descricao ? p3(p.descricao, ' class="muted" style="margin:6px 0 0"') : '') + '</li>';
  }).join(''));
  set('projAnteriores', anteriores.map(function(p){
    return '<li><span class="i-title">' + t3(p.titulo) + '</span> <span class="i-meta">· ' +
      (p.financiador ? esc(p.financiador) + ' · ' : '') + esc(p.periodo) + '</span></li>';
  }).join(''));

  /* ---------- membros ---------- */
  set('estRows', DADOS.estudantes.map(function(e){
    return '<tr><td>' + esc(e.nome) + '</td><td>' + badge(e.nivel) + '</td><td>' + esc(e.orientador || '') + '</td><td>' + (e.tema ? t3(e.tema) : '<span class="muted">' + t3({pt: 'a definir', en: 'to be defined', es: 'por definir'}) + '</span>') + '</td></tr>';
  }).join(''));
  var n = DADOS.estudantes.length;
  var nd = DADOS.estudantes.filter(function(e){ return e.nivel === 'dr'; }).length, nm = n - nd;
  set('estCount', t3(
    nd === 0 ? {pt: 'Total: ' + n + ' estudantes de mestrado.', en: 'Total: ' + n + " Master's students.", es: 'Total: ' + n + ' estudiantes de maestría.'} :
    nm === 0 ? {pt: 'Total: ' + n + ' estudantes de doutorado.', en: 'Total: ' + n + ' Ph.D. students.', es: 'Total: ' + n + ' estudiantes de doctorado.'} :
    {pt: 'Total: ' + n + ' estudantes (' + nd + ' de doutorado e ' + nm + ' de mestrado).',
     en: 'Total: ' + n + ' students (' + nd + ' Ph.D. and ' + nm + " Master's).",
     es: 'Total: ' + n + ' estudiantes (' + nd + ' de doctorado y ' + nm + ' de maestría).'}));
  set('equipeRows', DADOS.equipeProjeto4D.map(function(e){
    return '<tr><td>' + esc(e.nome) + '</td><td>' + (e.funcao ? t3(e.funcao) : A_CONFIRMAR) + '</td></tr>';
  }).join(''));
  set('exRows', DADOS.exMembros.map(function(e){
    var f = e.nivel ? badge(e.nivel) + (e.curso ? ' ' + t3(e.curso) : '') : t3(e.funcao);
    return '<tr><td>' + esc(e.nome) + '</td><td>' + f + '</td><td>' + (e.ondeEsta ? t3(e.ondeEsta) : A_CONFIRMAR) + '</td></tr>';
  }).join(''));

  /* ---------- publicações ---------- */
  var profs = DADOS.professores.filter(function(p){ return p.citacao && p.citacao.length; });
  var pubs = DADOS.publicacoes.slice().sort(function(a, b){ return b.ano - a.ano; });
  pubs.forEach(function(p){
    var autores = p.autores.split('; ');
    p._tags = profs.filter(function(pr){ return autores.some(function(a){ return pr.citacao.indexOf(a.trim()) !== -1; }); })
                   .map(function(pr){ return pr.nome; });
    p._html = autores.map(function(a){
      var hit = profs.some(function(pr){ return pr.citacao.indexOf(a.trim()) !== -1; });
      return hit ? '<b>' + esc(a) + '</b>' : esc(a);
    }).join('; ');
  });

  var TODOS = '<button type="button" data-f="" aria-pressed="true">' + t3({pt: 'Todos', en: 'All', es: 'Todos'}) + '</button>';
  var filtros = document.getElementById('pubFilters');
  filtros.insertAdjacentHTML('beforeend', TODOS +
    profs.map(function(pr){ return '<button type="button" data-f="' + esc(pr.nome) + '" aria-pressed="false">' + esc(pr.filtro || pr.nome) + '</button>'; }).join(''));
  document.getElementById('tipoFilters').insertAdjacentHTML('beforeend', TODOS +
    '<button type="button" data-f="periodico" aria-pressed="false">' + t3({pt: 'Periódicos', en: 'Journals', es: 'Revistas'}) + '</button>' +
    '<button type="button" data-f="congresso" aria-pressed="false">' + t3({pt: 'Congressos', en: 'Conferences', es: 'Congresos'}) + '</button>');
  var filtro = {prof: '', tipo: ''};

  function renderPubs(){
    var items = pubs.filter(function(p){
      return (!filtro.prof || p._tags.indexOf(filtro.prof) !== -1) && (!filtro.tipo || p.tipo === filtro.tipo);
    });
    var html = '', year = null;
    items.forEach(function(p){
      if (p.ano !== year){
        if (year !== null) html += '</ul>';
        html += '<h3 class="pub-year">' + p.ano + '</h3><ul class="item-list">';
        year = p.ano;
      }
      html += '<li><span class="i-auth">' + p._html + '</span> ' +
              '<span class="i-title">' + esc(p.titulo) + '</span> ' +
              '<span class="i-meta">' + esc(p.veiculo) + '</span>' +
              (p.doi ? ' <a' + EXT + ' href="https://doi.org/' + esc(p.doi) + '">DOI</a>' : '') + '</li>';
    });
    if (year !== null) html += '</ul>';
    if (!items.length) html = '<p class="count-note" style="margin-top:18px">' + t3({pt: 'Nenhuma publicação encontrada.', en: 'No publications found.', es: 'No se encontraron publicaciones.'}) + '</p>';
    set('pubList', html);
    set('pubCount', t3({pt: items.length + ' publicações', en: items.length + ' publications', es: items.length + ' publicaciones'}));
  }
  [['pubFilters', 'prof'], ['tipoFilters', 'tipo']].forEach(function(g){
    var btns = document.querySelectorAll('#' + g[0] + ' button');
    btns.forEach(function(b){
      b.addEventListener('click', function(){
        btns.forEach(function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        filtro[g[1]] = b.getAttribute('data-f');
        renderPubs();
      });
    });
  });
  renderPubs();

  /* ---------- notícias (mais recentes primeiro) ---------- */
  var MES = {pt: ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],
             en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
             es: ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']};
  function quando(d){
    if (d.length < 7) return d;
    var y = d.slice(0, 4), m = +d.slice(5, 7) - 1;
    return t3({pt: MES.pt[m] + '/' + y, en: MES.en[m] + ' ' + y, es: MES.es[m] + '/' + y});
  }
  if (!(DADOS.noticias || []).length) document.getElementById('newsBlock').style.display = 'none';
  set('newsList', (DADOS.noticias || []).slice().sort(function(a, b){ return a.data < b.data ? 1 : a.data > b.data ? -1 : 0; })
    .map(function(n){ return '<li><span class="when">' + quando(n.data) + '</span><span>' + t3(n.texto) + '</span></li>'; }).join(''));

  /* ---------- foto da equipe ---------- */
  set('teamPhoto', DADOS.fotoEquipe
    ? '<figure class="team-photo"><img src="' + esc(DADOS.fotoEquipe) + '" alt="Equipe do L3C">' +
      (DADOS.fotoEquipeLegenda ? '<figcaption>' + t3(DADOS.fotoEquipeLegenda) + '</figcaption>' : '') + '</figure>'
    : '<div class="team-ph">' + t3({pt: 'Foto da equipe: em breve', en: 'Team photo: coming soon', es: 'Foto del equipo: próximamente'}) + '</div>');

  /* ---------- teses e dissertações ---------- */
  set('tesesRows', (DADOS.teses || []).slice().sort(function(a, b){ return b.ano - a.ano || (a.nivel < b.nivel ? -1 : 1); }).map(function(t){
    var q = 'https://repositorio.ufsc.br/discover?query=' + encodeURIComponent('"' + t.titulo + '"');
    return '<tr><td>' + t.ano + '</td><td>' + esc(t.nome) + '</td><td>' + badge(t.nivel) + '</td><td>' + esc(t.orientador) + '</td><td>' +
      esc(t.titulo) + ' <a class="repo"' + EXT + ' href="' + q + '">' + t3({pt: 'Repositório UFSC', en: 'UFSC repository', es: 'Repositorio UFSC'}) + '</a></td></tr>';
  }).join(''));

  /* ---------- software ---------- */
  set('swList', !(DADOS.software || []).length ? '<p><span class="ph-gray">' + t3({pt: 'a preencher', en: 'to be added', es: 'por completar'}) + '</span></p>' : DADOS.software.map(function(s){
    return '<div class="sw"><b>' + esc(s.nome) + '</b>' + p3(s.descricao) +
      '<a' + EXT + ' href="' + esc(s.url) + '">' + t3({pt: 'Site', en: 'Website', es: 'Sitio'}) + '</a>' +
      (s.codigo ? '<a' + EXT + ' href="' + esc(s.codigo) + '">' + t3({pt: 'Código-fonte', en: 'Source code', es: 'Código fuente'}) + '</a>' : '') + '</div>';
  }).join(''));

  /* ---------- rodapé: mês da última atualização ---------- */
  if (DADOS.atualizadoEm){
    var y = DADOS.atualizadoEm.slice(0, 4), mi = +DADOS.atualizadoEm.slice(5, 7) - 1;
    var M = {pt: ['jan','fev','mar','abr','mai','jun','jul','ago','set','out','nov','dez'],
             en: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
             es: ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic']};
    set('updated', ' · ' + t3({pt: 'Atualizado em ' + M.pt[mi] + '/' + y, en: 'Updated ' + M.en[mi] + ' ' + y, es: 'Actualizado en ' + M.es[mi] + '/' + y}));
  }
})();
