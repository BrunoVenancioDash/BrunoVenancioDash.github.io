/* =====================================================================
   MONTAGEM DA PÁGINA · Rafael de Santiago
   Lê DADOS (dados.js) e TEXTOS (textos.js) e preenche a página.
   Não precisa ser editado para atualizar conteúdo.
   ===================================================================== */
/* ======================= RENDERIZAÇÃO ======================= */
function esc(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }

/* texto em vários idiomas: string única ou { pt, en, es, fr } */
function tr(v, lang){ return (v && typeof v === "object") ? (v[lang] || v.en || v.pt || "") : (v || ""); }

function courseLabel(L, code, lang){
  var d = DADOS.disciplinas[code] || {};
  var name = tr(d, lang) || code;
  return d.extensao ? esc(L.extension) + " — " + esc(name) : code + " — " + esc(name);
}

var pubFilter = {tipo: "", tema: ""};
function renderPubs(){
  var L = T[document.documentElement.getAttribute("data-lang")] || T.en;
  var pubs = DADOS.publicacoes
    .filter(function(p){
      return (!pubFilter.tipo || p.tipo === pubFilter.tipo) &&
             (!pubFilter.tema || p.tema === pubFilter.tema);
    })
    .sort(function(a, b){ return b.ano - a.ano; });
  var html = "", year = null;
  pubs.forEach(function(p){
    if (p.ano !== year){
      if (year !== null) html += "</ul>";
      html += '<h3 class="pub-year">' + p.ano + '</h3><ul class="pub-list">';
      year = p.ano;
    }
    html += "<li>" + esc(p.autores) + ' <span class="p-title">' + esc(p.titulo) + '</span> <span class="p-venue">' + esc(p.veiculo) + "</span>" +
            (p.doi ? ' <a target="_blank" rel="noopener" href="https://doi.org/' + esc(p.doi) + '">DOI</a>' : "") + "</li>";
  });
  if (year !== null) html += "</ul>";
  if (!pubs.length) html = '<p class="count-note" style="margin-top:18px">' + esc(L.no_results) + "</p>";
  document.getElementById("pubList").innerHTML = html;
  document.getElementById("pubCount").textContent = L.pub_count(pubs.length);
}

function applyLang(lang){
  var L = T[lang] || T.en;
  var root = document.documentElement;
  root.setAttribute("lang", lang === "pt" ? "pt-BR" : lang);
  root.setAttribute("data-lang", lang);

  document.querySelectorAll("[data-i18n]").forEach(function(el){
    var v = L[el.getAttribute("data-i18n")];
    if (typeof v === "string") el.innerHTML = v;
  });

  var colon = lang === "fr" ? " :" : ":";
  var sems = DADOS.semestresAnteriores;
  document.querySelector('[data-i18n="current_courses"]').textContent = L.current_courses + " (" + DADOS.semestreAtual + ")" + colon;
  document.querySelector('[data-i18n="prev_taught"]').textContent =
    L.prev_taught + " (" + sems[sems.length - 1][0].split(" · ").pop() + " – " + sems[0][0].split(" · ")[0] + ")";

  document.getElementById("currentCourses").innerHTML =
    DADOS.disciplinasAtuais.map(function(c){ return "<li>" + courseLabel(L, c, lang) + "</li>"; }).join("");

  document.getElementById("materials").innerHTML =
    DADOS.materiais.map(function(m){ return '<li>' + courseLabel(L, m[0], lang) + ' (<a target="_blank" rel="noopener" href="' + DADOS.urlMateriais + m[1] + '">PDF</a>)</li>'; }).join("");

  document.getElementById("semesters").innerHTML =
    sems.map(function(s){
      return "<h4>" + s[0] + "</h4><ul>" + s[1].map(function(c){ return "<li>" + courseLabel(L, c, lang) + "</li>"; }).join("") + "</ul>";
    }).join("");

  var d = 0, m = 0;
  var alunos = DADOS.orientandos;
  document.getElementById("studentRows").innerHTML = alunos.map(function(st){
    if (st.nivel === "dr") d++; else m++;
    var badge = esc(st.nivel === "dr" ? L.level_dr : L.level_ms);
    var title = tr(st.tema, lang);
    var topic = title
      ? esc(title) + (st.provisorio ? ' <span class="tbd">(' + esc(L.provisional) + ")</span>" : "")
      : '<span class="tbd">' + esc(L.tbd) + "</span>";
    return "<tr><td>" + esc(st.nome) + "</td><td>" + badge + '</td><td class="nowrap">' + esc(st.inicio) + "</td><td>" + topic + "</td></tr>";
  }).join("");
  document.getElementById("studentCount").textContent = L.count(alunos.length, d, m);

  /* orientações concluídas (link de busca no Repositório Institucional da UFSC) */
  document.getElementById("doneRows").innerHTML = (DADOS.orientandosConcluidos || []).map(function(st){
    var lvl = esc(st.nivel === "dr" ? L.level_dr : L.level_ms) + (st.coorientacao ? ' <span class="tbd">(' + esc(L.coadvisor) + ")</span>" : "");
    var q = "https://repositorio.ufsc.br/discover?query=" + encodeURIComponent('"' + st.titulo + '"');
    return "<tr><td>" + esc(st.nome) + "</td><td>" + lvl + '</td><td class="nowrap">' + st.ano + "</td><td>" + esc(st.titulo) +
           ' <a class="repo" target="_blank" rel="noopener" href="' + q + '">' + esc(L.repo_link) + "</a></td></tr>";
  }).join("");

  /* projetos de pesquisa */
  document.getElementById("projList").innerHTML = (DADOS.projetos || []).map(function(p){
    var per = p.periodo.replace("atual", L.present);
    var meta = (p.papel === "coord" ? L.role_coord : L.role_member) + (p.financiador ? " · " + esc(p.financiador) : "");
    return '<li><span class="when">' + esc(per) + "</span><span>" + esc(tr(p.titulo, lang)) + ' <span class="meta">· ' + meta + "</span></span></li>";
  }).join("");

  /* software */
  document.getElementById("swList").innerHTML = (DADOS.software || []).map(function(s){
    return '<div class="sw"><b>' + esc(s.nome) + "</b><p>" + esc(tr(s.descricao, lang)) + "</p>" +
           '<a target="_blank" rel="noopener" href="' + esc(s.url) + '">' + esc(L.sw_site) + "</a>" +
           (s.codigo ? '<a target="_blank" rel="noopener" href="' + esc(s.codigo) + '">' + esc(L.sw_code) + "</a>" : "") + "</div>";
  }).join("");

  document.querySelectorAll(".lang-switch button").forEach(function(b){
    b.setAttribute("aria-pressed", b.getAttribute("data-set-lang") === lang ? "true" : "false");
  });
  document.getElementById("updated").textContent = DADOS.atualizadoEm ? " · " + L.updated(DADOS.atualizadoEm) : "";
  renderPubs();
  refreshTheme();
}

/* ======================= TEMA CLARO / ESCURO ======================= */
var mqDark = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
function currentTheme(){
  var t = document.documentElement.getAttribute("data-theme");
  if (t === "light" || t === "dark") return t;
  return (mqDark && mqDark.matches) ? "dark" : "light";
}
function refreshTheme(){
  var L = T[document.documentElement.getAttribute("data-lang")] || T.en;
  var dark = currentTheme() === "dark";
  var btn = document.getElementById("themeToggle");
  btn.setAttribute("aria-pressed", dark ? "true" : "false");
  btn.title = dark ? L.theme_light : L.theme_dark;
  btn.setAttribute("aria-label", btn.title);
}

(function(){
  /* idioma */
  document.querySelectorAll(".lang-switch button").forEach(function(b){
    b.addEventListener("click", function(){
      var l = b.getAttribute("data-set-lang");
      try{ localStorage.setItem("rs-lang", l); }catch(e){}
      applyLang(l);
    });
  });
  document.getElementById("themeToggle").addEventListener("click", function(){
    var next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try{ localStorage.setItem("rs-theme", next); }catch(e){}
    refreshTheme();
  });
  if (mqDark && mqDark.addEventListener) mqDark.addEventListener("change", refreshTheme);
  [["fTipo", "tipo"], ["fTema", "tema"]].forEach(function(g){
    var btns = document.querySelectorAll("#" + g[0] + " button");
    btns.forEach(function(b){
      b.addEventListener("click", function(){
        pubFilter[g[1]] = b.getAttribute("data-f");
        btns.forEach(function(x){ x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        renderPubs();
      });
    });
  });
  applyLang(document.documentElement.getAttribute("data-lang") || "en");

  /* navegação por abas */
  var pages = document.querySelectorAll(".page");
  var links = document.querySelectorAll("nav.main-nav a");
  var ids = Array.prototype.map.call(pages, function(p){ return p.id; });

  function show(id){
    if (ids.indexOf(id) === -1) id = "about";
    pages.forEach(function(p){ p.classList.toggle("active", p.id === id); });
    links.forEach(function(a){ a.classList.toggle("active", a.getAttribute("href") === "#" + id); });
    window.scrollTo(0, 0);
  }
  function current(){ return (location.hash || "#about").slice(1); }

  window.addEventListener("hashchange", function(){ show(current()); });
  window.addEventListener("load", function(){ setTimeout(function(){ window.scrollTo(0, 0); }, 0); });
  show(current());
})();
