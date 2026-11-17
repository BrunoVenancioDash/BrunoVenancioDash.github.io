/* =====================================================================
   DADOS DO SITE · Rafael de Santiago
   ---------------------------------------------------------------------
   Este é o único arquivo que precisa ser editado para atualizar
   orientandos, publicações e disciplinas.

   Como editar:
   • Copie uma linha parecida, cole logo abaixo e troque os textos.
   • Mantenha as aspas "..." e a vírgula no fim de cada item.
   • Textos em 4 idiomas usam { pt: "...", en: "...", es: "...", fr: "..." };
     se o texto for igual em todos, basta uma string "...".
   • Depois de salvar, recarregue a página (F5) para conferir.
   ===================================================================== */

const DADOS = {

  /* Mês da última atualização do site (aparece no rodapé): "AAAA-MM" */
  atualizadoEm: "2026-11",

  /* ---------- ENSINO ---------- */
  semestreAtual: "2026/2",
  disciplinasAtuais: ["INE410113", "INE5413"],

  /* Nome de cada disciplina nos 4 idiomas (código → nomes).
     extensao: true → aparece como "Curso de extensão — ..." */
  disciplinas: {
    INE410113: {"pt": "Teoria da Computação", "en": "Theory of Computation", "es": "Teoría de la Computación", "fr": "Théorie du calcul"},
    INE410104: {"pt": "Projeto e Análise de Algoritmos", "en": "Design and Analysis of Algorithms", "es": "Diseño y Análisis de Algoritmos", "fr": "Conception et analyse d'algorithmes"},
    INE5413: {"pt": "Grafos", "en": "Graphs", "es": "Grafos", "fr": "Graphes"},
    INE5622: {"pt": "Introdução a Compiladores", "en": "Introduction to Compilers", "es": "Introducción a los Compiladores", "fr": "Introduction à la compilation"},
    BoasAlg: {"pt": "Boas Práticas em Algoritmos para Programadores", "en": "Best Practices in Algorithms for Programmers", "es": "Buenas Prácticas en Algoritmos para Programadores", "fr": "Bonnes pratiques en algorithmique pour programmeurs", "extensao": true},
    INE5201: {"pt": "Introdução à Ciência da Computação", "en": "Introduction to Computer Science", "es": "Introducción a la Ciencia de la Computación", "fr": "Introduction à l'informatique"},
    INE5402: {"pt": "Programação Orientada a Objetos I", "en": "Object-Oriented Programming I", "es": "Programación Orientada a Objetos I", "fr": "Programmation orientée objet I"},
    INE5603: {"pt": "Introdução à Programação Orientada a Objetos", "en": "Introduction to Object-Oriented Programming", "es": "Introducción a la Programación Orientada a Objetos", "fr": "Introduction à la programmation orientée objet"},
    INE5609: {"pt": "Estruturas de Dados", "en": "Data Structures", "es": "Estructuras de Datos", "fr": "Structures de données"}
  },

  /* Material de aula: [código, arquivo PDF] (o endereço base vem de urlMateriais) */
  urlMateriais: "http://www.inf.ufsc.br/~r.santiago/downloads/",
  materiais: [
    ["INE410113", "INE410113.pdf"], ["INE410104", "INE410104.pdf"], ["INE5413", "INE5413.pdf"],
    ["INE5622", "INE5622.pdf"], ["BoasAlg", "BoasAlg.pdf"], ["INE5201", "INE5201.pdf"],
    ["INE5402", "ineOO1_notas_v1.pdf"], ["INE5603", "ineOO1_notas_v1.pdf"]
  ],

  /* Semestres anteriores, do mais recente para o mais antigo.
     Ao fechar um semestre, adicione uma linha NO TOPO. */
  semestresAnteriores: [
    ["2026/1", ["INE410104", "INE5413"]],
    ["2025/2", ["INE410104", "INE5413", "INE5609"]],
    ["2025/1 · 2024/2 · 2024/1 · 2023/2 · 2023/1 · 2022/2 · 2022/1 · 2021/2", ["INE410104", "INE5413"]],
    ["2021/1 · 2020/2 · 2020/1 · 2019/2", ["INE410104", "INE5413", "INE5622"]],
    ["2019/1", ["INE410104", "INE5201", "INE5413", "INE5622"]],
    ["2018/2", ["INE5201", "INE5402", "INE5603"]]
  ],

  /* ---------- ORIENTANDOS ----------
     nivel: "dr" (doutorado) ou "ms" (mestrado)
     inicio: "mm/aaaa"
     tema: título no idioma original; sem tema → apaga o campo (aparece "a definir")
     provisorio: true → mostra "(título provisório)" */
  orientandos: [
    { nome: "Evandro Chagas Ribeiro da Rosa", nivel: "dr", inicio: "08/2023", tema: "Quantum Software Debugging", provisorio: true },
    { nome: "Eduardo Willwock Lussi", nivel: "dr", inicio: "08/2025", tema: "Development of Novel Strategies for Intelligent Quantum Compilation and Control" },
    { nome: "Israel Efraim de Oliveira", nivel: "ms", inicio: "03/2025", tema: {"pt": "Modelagem generativa conjunta de fácies geológicas e impedância acústica (GAN condicional)", "en": "Joint generative modeling of geological facies and acoustic impedance (conditional GAN)", "es": "Modelado generativo conjunto de facies geológicas e impedancia acústica (GAN condicional)", "fr": "Modélisation générative conjointe des faciès géologiques et de l'impédance acoustique (GAN conditionnel)"} },
    { nome: "João Paulo Machado", nivel: "ms", inicio: "03/2025", tema: "Hibridização de heurísticas para o problema de custo de disponibilidade de recursos com múltiplos modos de execução" },
    { nome: "Renan Cavalcanti Machado do Rego Barros", nivel: "ms", inicio: "08/2025", tema: "New Heuristic for Electric Vehicle Routing Public Transportation Problem" },
    { nome: "Bruno Venâncio Barbosa", nivel: "ms", inicio: "08/2025" },
    { nome: "Diogo de Souza Caetano", nivel: "ms", inicio: "08/2025", tema: "Otimização da Inversão Sísmica: Um Estudo Comparativo dos Algoritmos ESMDA e CMA-ES" },
    { nome: "Mateus Israel Silva", nivel: "ms", inicio: "08/2026" },
    { nome: "Caio César Sabino Soares", nivel: "ms", inicio: "08/2026" }
  ],

  /* ---------- ORIENTAÇÕES CONCLUÍDAS (mestrado e doutorado) ----------
     titulo: como está no repositório (idioma original)
     tituloEn (opcional): versão em inglês usada no CV em PDF
     coorientacao: true → aparece como "coorientação" */
  orientandosConcluidos: [
    { nome: "Eduardo Willwock Lussi", nivel: "ms", ano: 2025, titulo: "A Time Optimization Framework for the Implementation of Robust and Low-latency Quantum Circuits" },
    { nome: "Thiago Martendal Salvador", nivel: "ms", ano: 2025, titulo: "A Construção de Planos de Empacotamento Retangular Bidimensional com uso do Problema da Mochila", tituloEn: "Two-dimensional rectangular packing plans using the knapsack problem" },
    { nome: "Andrey Lucas Herchonvicz", nivel: "ms", ano: 2023, titulo: "Neuroevolução de Redes LSTM: uma aplicação na detecção de engano via voz", tituloEn: "Neuroevolution of LSTM networks: an application to voice deception detection" },
    { nome: "Leonardo Antonio Pinheiro", nivel: "ms", ano: 2022, titulo: "Neuroevolution for Facial Expression Recognition" },
    { nome: "Danna Katherine Nieto Huertas", nivel: "ms", ano: 2022, titulo: "Calibração Automática de Modelos de Física de Rocha usando Método de Otimização", tituloEn: "Automatic calibration of rock physics models using optimization methods" },
    { nome: "Wesly Carmesini Ataide", nivel: "ms", ano: 2022, titulo: "Algoritmos para Super-coloração de Vértices para Grafos Dirigidos", tituloEn: "Super-coloring algorithms for directed graphs" },
    { nome: "Evandro Chagas Ribeiro da Rosa", nivel: "ms", ano: 2021, titulo: "Ket Quantum Programming" },
    { nome: "Otto Menegasso Pires", nivel: "ms", ano: 2021, titulo: "A quantum heuristic for the School Timetabling Problem" },
    { nome: "Rodrigo Rodrigues Pires de Mello", nivel: "dr", ano: 2019, titulo: "A Neural-symbolic BDI-Agent as a Multi-Context System", coorientacao: true }
  ],

  /* ---------- PROJETOS DE PESQUISA (desde 2019) ----------
     papel: "coord" (coordenador) ou "membro" */
  projetos: [
    { periodo: "2022 – atual", papel: "membro", financiador: "Petrobras/CENPES",
      titulo: {"pt": "Caracterização Quantitativa Integrada 4D de Reservatórios", "en": "Integrated Quantitative 4D Reservoir Characterization", "es": "Caracterización Cuantitativa Integrada 4D de Yacimientos", "fr": "Caractérisation quantitative intégrée 4D des réservoirs"} },
    { periodo: "2025 – 2026", papel: "coord", financiador: "CNPq",
      titulo: {"pt": "Modelo de programação linear inteira mista para o problema de super-coloração", "en": "Mixed-integer linear programming model for the super-coloring problem", "es": "Modelo de programación lineal entera mixta para el problema de supercoloración", "fr": "Modèle de programmation linéaire en nombres entiers mixtes pour le problème de super-coloration"} },
    { periodo: "2024 – 2025", papel: "coord", financiador: "CNPq",
      titulo: {"pt": "Heurística para roteamento de veículos elétricos com janelas de tempo", "en": "Heuristic for electric vehicle routing with time windows", "es": "Heurística para el ruteo de vehículos eléctricos con ventanas de tiempo", "fr": "Heuristique pour le routage de véhicules électriques avec fenêtres de temps"} },
    { periodo: "2023 – 2025", papel: "coord", financiador: "",
      titulo: {"pt": "Técnicas de inteligência artificial aplicadas à mitigação de erros em sistemas quânticos", "en": "Artificial intelligence techniques for error mitigation in quantum systems", "es": "Técnicas de inteligencia artificial aplicadas a la mitigación de errores en sistemas cuánticos", "fr": "Techniques d'intelligence artificielle pour l'atténuation des erreurs dans les systèmes quantiques"} },
    { periodo: "2023 – 2024", papel: "coord", financiador: "CNPq",
      titulo: {"pt": "Heurística para projetos de redes de transporte público urbano", "en": "Heuristic for urban transit network design", "es": "Heurística para el diseño de redes de transporte público urbano", "fr": "Heuristique pour la conception de réseaux de transport public urbain"} },
    { periodo: "2021 – 2023", papel: "coord", financiador: "CNPq",
      titulo: {"pt": "Metaheurística para alteração, adição e remoção de estradas em projetos de malha viária", "en": "Metaheuristic for modifying, adding and removing roads in road network design", "es": "Metaheurística para modificar, añadir y eliminar vías en el diseño de redes viales", "fr": "Métaheuristique pour la modification, l'ajout et la suppression de routes dans la conception de réseaux routiers"} },
    { periodo: "2020 – 2021", papel: "coord", financiador: "CNPq",
      titulo: {"pt": "Inclusão de estratégias não farmacêuticas no modelo Min-SEI(R|S)-Cluster", "en": "Including non-pharmaceutical strategies in the Min-SEI(R|S)-Cluster model", "es": "Inclusión de estrategias no farmacéuticas en el modelo Min-SEI(R|S)-Cluster", "fr": "Intégration de stratégies non pharmaceutiques dans le modèle Min-SEI(R|S)-Cluster"} },
    { periodo: "2019 – 2023", papel: "coord", financiador: "CNPq",
      titulo: {"pt": "Métodos para agrupamento de nodos em redes com sinais", "en": "Methods for node clustering in signed networks", "es": "Métodos para el agrupamiento de nodos en redes con signos", "fr": "Méthodes de partitionnement de nœuds dans les réseaux signés"} },
    { periodo: "2019 – 2020", papel: "coord", financiador: "CNPq",
      titulo: {"pt": "Método computacional para a otimização da malha viária de Florianópolis-SC", "en": "Computational method for optimizing the road network of Florianópolis, Brazil", "es": "Método computacional para la optimización de la red vial de Florianópolis (Brasil)", "fr": "Méthode computationnelle pour l'optimisation du réseau routier de Florianópolis (Brésil)"} }
  ],

  /* ---------- SOFTWARE ---------- */
  software: [
    { nome: "Ket", url: "https://quantumket.org", codigo: "https://gitlab.com/quantum-ket/ket",
      descricao: {"pt": "Plataforma de programação quântica de alto nível (linguagem embarcada em Python, compilador e simulador), desenvolvida pelo orientando Evandro C. R. da Rosa. Código aberto (Apache 2.0).", "en": "High-level quantum programming platform (Python-embedded language, compiler and simulator), developed by my student Evandro C. R. da Rosa. Open source (Apache 2.0).", "es": "Plataforma de programación cuántica de alto nivel (lenguaje embebido en Python, compilador y simulador), desarrollada por mi estudiante Evandro C. R. da Rosa. Código abierto (Apache 2.0).", "fr": "Plateforme de programmation quantique de haut niveau (langage intégré à Python, compilateur et simulateur), développée par mon étudiant Evandro C. R. da Rosa. Logiciel libre (Apache 2.0)."} }
  ],

  /* ---------- PUBLICAÇÕES ----------
     A página agrupa por ano automaticamente (mais recente primeiro).
     Para adicionar: copie uma linha, cole no topo e troque os campos.
     tipo: "periodico" ou "congresso" (usado no filtro da página)
     tema: "quantica", "grafos", "otimizacao" ou "ia" (filtro por tema)
     doi (opcional): só o código, ex. "10.1109/ijcnn.2026.123" */
  publicacoes: [
    { ano: 2026, autores: "Caetano, D. S.; de Santiago, R.; Freitas, D. S.; Roisenberg, M.",
      titulo: "Covariance Matrix Adaptation Evolution Strategy Algorithm in the Context of Seismic Inversion: Proposal, Application, and Analysis Compared to Ensemble Smoother with Multiple Data Assimilation.",
      veiculo: "LVIII SBPO 2026, Belo Horizonte, v.57.",
      tipo: "congresso", tema: "ia" },
    { ano: 2026, autores: "Barros, R. C. M. R.; de Santiago, R.; Castellucci, P. B.",
      titulo: "Estratégias de Poda de Arcos para o Problema de Escalonamento de Veículos Elétricos com Recarga Parcial.",
      veiculo: "LVIII SBPO 2026, Belo Horizonte, v.57.",
      tipo: "congresso", tema: "otimizacao" },
    { ano: 2026, autores: "Mendes, R. F. S.; de Santiago, R.; Castellucci, P. B.",
      titulo: "Multi-objective scheduling model for the next release problem with precedence constraints.",
      veiculo: "LVIII SBPO 2026, Belo Horizonte, v.57.",
      tipo: "congresso", tema: "otimizacao" },
    { ano: 2026, autores: "Marian, R.; Ataide, W. C.; de Santiago, R.; Franco, Á. J. P.",
      titulo: "Mixed-Integer Linear Programming Model for the Super-Colored Path Problem in Digraphs.",
      veiculo: "XI ETC 2026, Gramado, p.159–164.",
      tipo: "congresso", tema: "grafos", doi: "10.5753/etc.2026.22099" },
    { ano: 2026, autores: "Silva, A. G.; da Silva, A. T.; de Santiago, R.; Roisenberg, M.",
      titulo: "Ensembles of lightweight U-Net-based models with EfficientNet encoders for semantic seismic data segmentation.",
      veiculo: "Journal of Seismic Exploration, 2026.",
      tipo: "periodico", tema: "ia", doi: "10.36922/jse026260116" },
    { ano: 2026, autores: "Oliveira, I. E.; de Santiago, R.; Angulo, Y. V. C.; Mazzutti, T.; Rodrigues, B. B.; Roisenberg, M.",
      titulo: "A Conditional GAN Framework for Joint Generative Modeling of Geological Facies and Acoustic Impedance.",
      veiculo: "IJCNN 2026, Maastricht — Proceedings of the IEEE World Congress on Computational Intelligence, 2026.",
      tipo: "congresso", tema: "ia", doi: "10.1109/ijcnn69854.2026.11729474" },
    { ano: 2026, autores: "Bet, A. J.; de Santiago, R.; Rodrigues, B. B.; Roisenberg, M.",
      titulo: "Joint Seismic Inversion and Wavelet Estimation Using Physics-Informed Neural Networks.",
      veiculo: "IJCNN 2026, Maastricht — Proceedings of the IEEE WCCI, 2026.",
      tipo: "congresso", tema: "ia", doi: "10.1109/ijcnn69854.2026.11728570" },
    { ano: 2026, autores: "Rosa, E.; Santiago, R.",
      titulo: "Schrödinger's bug: a survey on quantum software debugging.",
      veiculo: "Quantum Information Processing, v.25, p.96, 2026.",
      tipo: "periodico", tema: "quantica" },
    { ano: 2026, autores: "Schreiner, G. A.; de Santiago, R.; Duarte, D.; Mello, R. S.",
      titulo: "An Autonomous Hybrid Data Partitioning Approach for NewSQL Databases.",
      veiculo: "Journal of the Brazilian Computer Society, v.32, p.55–72, 2026.",
      tipo: "periodico", tema: "otimizacao", doi: "10.5753/jbcs.2026.5684" },
    { ano: 2026, autores: "Rosa, E.; Lussi, E.; Marchi, J.; de Santiago, R.; Duzzioni, E.",
      titulo: "Full Quantum Stack: Ket Platform.",
      veiculo: "Brazilian Journal of Physics, v.56, p.45, 2026.",
      tipo: "periodico", tema: "quantica", doi: "10.1007/s13538-025-01981-w" },
    { ano: 2025, autores: "Salvador, T. M.; de Santiago, R.; Castellucci, P. B.",
      titulo: "A Construção de Planos de Empacotamento Retangular Bidimensional com uso do Problema da Mochila.",
      veiculo: "LVII SBPO 2025, Gramado.",
      tipo: "congresso", tema: "otimizacao", doi: "10.59254/sbpo-2025-212528" },
    { ano: 2025, autores: "da Rosa, E. C. R.; Marchi, J.; Duzzioni, E. I.; de Santiago, R.",
      titulo: "Quantum Gate Decomposition: A Study of Compilation Time vs. Execution Time Trade-offs.",
      veiculo: "SBLP 2025, Recife, v.29, p.10–18.",
      tipo: "congresso", tema: "quantica", doi: "10.5753/sblp.2025.10459" },
    { ano: 2025, autores: "Nascimento, L.; de Santiago, R.; Franco, Á. J. P.; Castellucci, P. B.",
      titulo: "GRASP para Maximização da Modularidade por Densidade com Sinais.",
      veiculo: "X ETC 2025, p.6.",
      tipo: "congresso", tema: "grafos", doi: "10.5753/etc.2025.7165" },
    { ano: 2025, autores: "Rosa, E. C. R.; Duzzioni, E. I.; de Santiago, R.",
      titulo: "Optimizing Gate Decomposition for High-Level Quantum Programming.",
      veiculo: "Quantum, v.9, p.1659, 2025.",
      tipo: "periodico", tema: "quantica", doi: "10.22331/q-2025-03-12-1659" },
    { ano: 2025, autores: "Lussi, E. W.; de Santiago, R.; Duzzioni, E. I.",
      titulo: "Time-optimization framework for the implementation of robust low-latency quantum circuits.",
      veiculo: "Physical Review Applied, v.23, p.044036, 2025.",
      tipo: "periodico", tema: "quantica", doi: "10.1103/physrevapplied.23.044036" },
    { ano: 2024, autores: "Huertas, D. K. N.; de Santiago, R.; Rodrigues, B. B.",
      titulo: "Calibrador para Modelos de Física de Rocha: abordagem metaheurística com alinhamento de estimativas.",
      veiculo: "56° SBPO 2024, Fortaleza, v.56.",
      tipo: "congresso", tema: "ia", doi: "10.59254/sbpo-2024-193858" },
    { ano: 2024, autores: "Ataide, W. C.; de Santiago, R.; Franco, Á. J. P.",
      titulo: "Algorithms for Super-coloring in Directed Graphs.",
      veiculo: "56° SBPO 2024, Fortaleza.",
      tipo: "congresso", tema: "grafos", doi: "10.59254/sbpo-2024-193367" },
    { ano: 2024, autores: "Resmer, J. P. P.; de Santiago, R.",
      titulo: "Aplicação de UNSGA III para Projetos de Redes de Transporte Público Urbano.",
      veiculo: "56° SBPO 2024, Fortaleza.",
      tipo: "congresso", tema: "otimizacao", doi: "10.59254/sbpo-2024-193348" },
    { ano: 2024, autores: "Castellucci, P. B.; Franco, Á. J. P.; de Santiago, R.",
      titulo: "Soluções factíveis para o problema do caixeiro viajante com veículo elétrico e janelas de tempo.",
      veiculo: "IX ETC 2024, p.114.",
      tipo: "congresso", tema: "otimizacao", doi: "10.5753/etc.2024.3034" },
    { ano: 2024, autores: "de Mello, R. R. P.; de Santiago, R.; Silveira, R. A.; Gelaim, T. Â.",
      titulo: "Neural-symbolic BDI-Agent as a Multi-Context System: A case study with negotiating agent.",
      veiculo: "Expert Systems with Applications, v.238, p.121656, 2024.",
      tipo: "periodico", tema: "ia", doi: "10.1016/j.eswa.2023.121656" },
    { ano: 2022, autores: "da Rosa, E. C. R.; de Santiago, R.",
      titulo: "Ket Quantum Programming.",
      veiculo: "ACM Journal on Emerging Technologies in Computing Systems, v.18, p.1–25, 2022.",
      tipo: "periodico", tema: "quantica", doi: "10.1145/3474224" },
    { ano: 2022, autores: "Rodrigues, R.; Silveira, R.; de Santiago, R.",
      titulo: "A Mediator Agent based on Multi-Context System and Information Retrieval.",
      veiculo: "ICAART 2022, p.78.",
      tipo: "congresso", tema: "ia", doi: "10.5220/0010781400003116" },
    { ano: 2021, autores: "Pires, O. M.; de Santiago, R.; Marchi, J.",
      titulo: "Two Stage Quantum Optimization for the School Timetabling Problem.",
      veiculo: "IEEE CEC 2021, Kraków, p.2347–2353.",
      tipo: "congresso", tema: "quantica", doi: "10.1109/cec45853.2021.9504701" },
    { ano: 2021, autores: "Menegasso Pires, O.; Duzzioni, E. I.; Marchi, J.; de Santiago, R.",
      titulo: "Quantum Circuit Synthesis Using Projective Simulation.",
      veiculo: "Inteligencia Artificial, v.24, p.90–101, 2021.",
      tipo: "periodico", tema: "quantica", doi: "10.4114/intartif.vol24iss67pp90-101" },
    { ano: 2021, autores: "Herchonvicz, A. L.; de Santiago, R.",
      titulo: "Deep Neural Network Architectures for Speech Deception Detection: A Brief Survey.",
      veiculo: "EPIA 2021, LNCS v.12981, p.301–312.",
      tipo: "congresso", tema: "ia", doi: "10.1007/978-3-030-86230-5_24" },
    { ano: 2021, autores: "Rodrigues, R.; Silveira, R. A.; Santiago, R.",
      titulo: "Integrating neural networks into the agent's decision-making: A Systematic Literature Mapping.",
      veiculo: "WESAAC 2021, Rio de Janeiro.",
      tipo: "congresso", tema: "ia" },
    { ano: 2021, autores: "Santos, Y. S. R. N.; Santiago, R.; Perego, R.; Schaly, M. H.; Alvares, L. O.; Bogorny, V.",
      titulo: "A Co-occurrence Based Approach for Mining Overlapped Co-clusters in Binary Data.",
      veiculo: "BRACIS 2021, LNCS v.13073.",
      tipo: "congresso", tema: "grafos", doi: "10.1007/978-3-030-91702-9_25" },
    { ano: 2020, autores: "Marcolla, F.; de Santiago, R.; Dazzi, R.",
      titulo: "Novel Lie Speech Classification by using Voice Stress.",
      veiculo: "ICAART 2020, Valletta, p.742.",
      tipo: "congresso", tema: "ia", doi: "10.5220/0009038707420749" },
    { ano: 2020, autores: "de Santiago, R.; Lamb, L. C.",
      titulo: "A ground truth contest between modularity maximization and modularity density maximization.",
      veiculo: "Artificial Intelligence Review, v.53, p.4575–4599, 2020.",
      tipo: "periodico", tema: "grafos", doi: "10.1007/s10462-019-09802-8" },
    { ano: 2019, autores: "Santiago, R.; Lamb, L.; Concatto, F.",
      titulo: "On the Role of Central Individuals in Influence Propagation.",
      veiculo: "ICAART 2019, Prague, v.2, p.103.",
      tipo: "congresso", tema: "grafos", doi: "10.5220/0007358101030111" },
    { ano: 2018, autores: "Martins, W. H.; Souza Alves de Santiago, L. H.; de Santiago, R.; Lamb, L.",
      titulo: "Effective Ant Colony Optimization Solution for the Brazilian Family Health Team Scheduling Problem.",
      veiculo: "IEEE ICTAI 2018, Volos, p.493.",
      tipo: "congresso", tema: "otimizacao", doi: "10.1109/ictai.2018.00082" },
    { ano: 2018, autores: "Mendes, R. F. S.; Concatto, F.; Santiago, R.",
      titulo: "Desenvolvimento de um Modelo Exato de Alocação de Disciplinas no Contexto de um Curso de Graduação.",
      veiculo: "50° SBPO 2018, Rio de Janeiro.",
      tipo: "congresso", tema: "otimizacao", doi: "10.59254/sbpo-2018-85466" },
    { ano: 2018, autores: "Mendes, R. F. S.; Santiago, R.; Lamb, L. C.",
      titulo: "Novel Parallel Anytime A* for Graph and Network Clustering.",
      veiculo: "IEEE CEC 2018, Rio de Janeiro.",
      tipo: "congresso", tema: "grafos", doi: "10.1109/cec.2018.8477840" },
    { ano: 2017, autores: "Schmitt, R.; Ramos, P.; Santiago, R.; Lamb, L. C.",
      titulo: "Novel Clique enumeration heuristic for detecting overlapping clusters.",
      veiculo: "IEEE CEC 2017, Donostia, p.1390.",
      tipo: "congresso", tema: "grafos", doi: "10.1109/cec.2017.7969466" },
    { ano: 2017, autores: "Concatto, F.; Zunino, W.; Giancoli, L. A.; Santiago, R.; Lamb, L. C.",
      titulo: "Genetic algorithm for epidemic mitigation by removing relationships.",
      veiculo: "GECCO 2017, Berlin, p.761.",
      tipo: "congresso", tema: "otimizacao", doi: "10.1145/3071178.3071218" },
    { ano: 2017, autores: "Santiago, R.; Lamb, L. C.",
      titulo: "Exact computational solution of Modularity Density Maximization by effective column generation.",
      veiculo: "Computers & Operations Research, v.86, p.18–29, 2017.",
      tipo: "periodico", tema: "grafos", doi: "10.1016/j.cor.2017.04.013" },
    { ano: 2017, autores: "Santiago, R.; Lamb, L. C.",
      titulo: "Efficient modularity density heuristics for large graphs.",
      veiculo: "European Journal of Operational Research, v.258, p.844–865, 2017.",
      tipo: "periodico", tema: "grafos", doi: "10.1016/j.ejor.2016.10.033" },
    { ano: 2016, autores: "Santiago, R.; Zunino, W.; Concatto, F.; Lamb, L. C.",
      titulo: "A New Model and Heuristic for Infection Minimization by Cutting Relationships.",
      veiculo: "ICONIP 2016, Kyoto.",
      tipo: "congresso", tema: "grafos", doi: "10.1007/978-3-319-46672-9_56" },
    { ano: 2016, autores: "Santiago, R.; Lamb, L. C.",
      titulo: "On the Role of Degree Influence in Suboptimal Modularity Maximization.",
      veiculo: "IEEE CEC 2016, Vancouver, p.4618–4625.",
      tipo: "congresso", tema: "grafos", doi: "10.1109/cec.2016.7744379" }
  ]
};
