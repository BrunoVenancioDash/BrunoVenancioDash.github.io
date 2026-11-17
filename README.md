# PPGCC · Sites do L3C e do Prof. Rafael de Santiago

🇧🇷 [Português](#português) · 🇺🇸 [English](#english)

---

## Português

Sou mestrando em Ciência da Computação no PPGCC/UFSC, sob orientação do Prof. Rafael de Santiago. Por admiração e gratidão pelo seu trabalho, decidi colaborar na atualização do seu site pessoal e do site do laboratório que ele coordena, reunindo informações acadêmicas e dos projetos de pesquisa.

Este repositório contém **protótipos** apresentados aos professores para revisão. O conteúdo ainda pode ser ajustado conforme o retorno deles.

### Projetos

| Pasta | Site | Idiomas |
|---|---|---|
| [`L3C/`](L3C/index.html) | Laboratório de Conexionismo e Ciências Cognitivas (INE/UFSC) | PT · EN · ES |
| [`rsantiago/`](rsantiago/index.html) | Site pessoal do Prof. Rafael de Santiago | PT · EN · ES · FR |

A página [`index.html`](index.html) é o ponto de entrada: ela leva a cada um dos sites.

### Recursos

- Tema claro e escuro: segue o sistema e pode ser alternado pelo botão no topo da página.
- Seletor de idioma, com a escolha salva no navegador.
- Layout responsivo (computador e celular).
- HTML, CSS e JavaScript puros, sem dependências nem etapa de build.

### Como visualizar

Abra o `index.html` no navegador ou acesse a versão publicada no GitHub Pages.

### Como atualizar o conteúdo

O conteúdo que muda com frequência fica separado do layout, em arquivos de dados:

| Arquivo | O que contém |
|---|---|
| `L3C/dados.js` | professores, projetos, estudantes, equipe do projeto 4D, ex-membros e publicações |
| `rsantiago/dados.js` | orientandos, publicações, disciplinas e semestres |
| `rsantiago/textos.js` | textos fixos nos 4 idiomas (bio, formação, prêmios) |
| `rsantiago/cv/cv.html` | currículo em PDF (em inglês): editar, abrir no navegador, Ctrl+P → "Salvar como PDF" por cima de `Rafael_de_Santiago_CV.pdf` |

Para atualizar: abra o `dados.js`, copie um item parecido, cole e troque os textos. Pode ser feito pelo próprio GitHub (ícone ✏️ no arquivo). Os arquivos `render.js` montam a página e não precisam ser alterados.

### Fontes das informações

Currículos Lattes e ORCID dos professores, páginas pessoais, o site anterior do L3C (l3clab.paginas.ufsc.br) e a base OpenAlex (publicações).

---

## English

I am a Master's student in Computer Science at PPGCC/UFSC, supervised by Prof. Rafael de Santiago. Out of admiration and gratitude for his work, I decided to help update his personal website and the website of the lab he coordinates, bringing together academic information and details about the research projects.

This repository contains **prototypes** presented to the faculty for review. The content may still change based on their feedback.

### Projects

| Folder | Website | Languages |
|---|---|---|
| [`L3C/`](L3C/index.html) | Connectionism and Cognitive Science Lab (INE/UFSC) | PT · EN · ES |
| [`rsantiago/`](rsantiago/index.html) | Prof. Rafael de Santiago's personal website | PT · EN · ES · FR |

[`index.html`](index.html) is the entry page that links to each website.

### Features

- Light and dark themes: follows the system setting and can be switched with the button at the top of the page.
- Language selector, with the choice saved in the browser.
- Responsive layout (desktop and mobile).
- Plain HTML, CSS and JavaScript, with no dependencies or build step.

### How to view

Open `index.html` in a browser or visit the version published on GitHub Pages.

### How to update the content

Frequently changing content is kept apart from the layout, in data files:

| File | Contents |
|---|---|
| `L3C/dados.js` | faculty, projects, students, 4D project team, former members and publications |
| `rsantiago/dados.js` | supervised students, publications, courses and semesters |
| `rsantiago/textos.js` | fixed texts in 4 languages (bio, education, awards) |
| `rsantiago/cv/cv.html` | PDF CV (in English): edit, open in a browser, Ctrl+P → "Save as PDF" over `Rafael_de_Santiago_CV.pdf` |

To update: open `dados.js`, copy a similar entry, paste it and edit the text. This can be done directly on GitHub (✏️ icon on the file). The `render.js` files build the page and do not need to be changed.

### Sources

Faculty Lattes CVs and ORCID profiles, personal web pages, the previous L3C website (l3clab.paginas.ufsc.br) and the OpenAlex database (publications).
