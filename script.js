```javascript
// ===== DATOS DE PERSONAJES =====
const characters = [
    {
        id: 'hidalgo',
        name: 'Miguel Hidalgo y Costilla',
        shortName: 'Miguel Hidalgo',
        alias: 'El Padre de la Patria',
        born: '1753',
        died: '1811',
        icon: 'fa-church',
        description: 'Sacerdote que inició la Guerra de Independencia el 16 de septiembre de 1810 con el Grito de Dolores.',
        keyFact: 'Convocó a los pobladores de Dolores a levantarse en armas contra el dominio español.',
        legacy: 'Es considerado el Padre de la Patria y el iniciador del movimiento independentista mexicano.',
        facts: [
            'Era cura de Dolores, Hidalgo',
            'Pronunció el famoso Grito de Dolores',
            'Lideró el ejército insurgente inicial',
            'Fue capturado y ejecutado en Chihuahua en 1811'
        ]
    },
    {
        id: 'morelos',
        name: 'José María Morelos y Pavón',
        shortName: 'José María Morelos',
        alias: 'El Siervo de la Nación',
        born: '1765',
        died: '1815',
        icon: 'fa-scroll',
        description: 'Líder militar y político que continuó la lucha tras la muerte de Hidalgo.',
        keyFact: 'Convocó el Congreso de Chilpancingo y redactó los Sentimientos de la Nación.',
        legacy: 'Consolidó la ideología independentista con una visión política y social avanzada para su época.',
        facts: [
            'Fue discípulo de Hidalgo',
            'Redactó los Sentimientos de la Nación en 1813',
            'Instaló el Congreso de Anáhuac',
            'Fue capturado y ejecutado en San Cristóbal Ecatepec en 1815'
        ]
    },
    {
        id: 'allende',
        name: 'Ignacio Allende',
        shortName: 'Ignacio Allende',
        alias: 'El Caudillo Militar',
        born: '1769',
        died: '1811',
        icon: 'fa-shield-halved',
        description: 'Capitán del ejército español que se unió a la conspiración independentista.',
        keyFact: 'Fue el principal estratega militar del inicio de la Guerra de Independencia.',
        legacy: 'Su capacidad militar fue fundamental para los primeros triunfos insurgentes.',
        facts: [
            'Era capitán del regimiento de Dragones de la Reina',
            'Participó activamente en la Conspiración de Querétaro',
            'Fue el jefe militar de las tropas insurgentes',
            'Fue capturado y ejecutado junto a Hidalgo en Chihuahua'
        ]
    },
    {
        id: 'guerrero',
        name: 'Vicente Guerrero',
        shortName: 'Vicente Guerrero',
        alias: 'El General del Sur',
        born: '1782',
        died: '1831',
        icon: 'fa-mountain-sun',
        description: 'Líder insurgente que mantuvo viva la lucha en el sur de México.',
        keyFact: 'Negoció con Agustín de Iturbide los Tratados de Córdoba que consumaron la independencia.',
        legacy: 'Su lema "Mi patria es primero" es símbolo de lealtad y patriotismo.',
        facts: [
            'Luchó bajo las órdenes de Morelos',
            'Mantuvo la resistencia armada en las montañas del sur',
            'Firmó los Tratados de Córdoba con Iturbide en 1821',
            'Fue presidente de México en 1829'
        ]
    },
    {
        id: 'leona',
        name: 'Leona Vicario',
        shortName: 'Leona Vicario',
        alias: 'La Inteligencia Insurgente',
        born: '1789',
        died: '1842',
        icon: 'fa-feather-pointed',
        description: 'Intelectual y espía que proporcionó recursos e información al movimiento insurgente.',
        keyFact: 'Financió la causa independentista con su propia fortuna y actuó como mensajera.',
        legacy: 'Es considerada una de las primeras periodistas de México y símbolo de la mujer en la lucha.',
        facts: [
            'Pertenecía a una familia acomodada de la Ciudad de México',
            'Usó su posición social para espiar a las autoridades realistas',
            'Financió la compra de armas y pertrechos para los insurgentes',
            'Su nombre está inscrito en el Muro de Honor del Congreso'
        ]
    },
    {
        id: 'josefa',
        name: 'Josefa Ortiz de Domínguez',
        shortName: 'Josefa Ortiz',
        alias: 'La Corregidora',
        born: '1768',
        died: '1829',
        icon: 'fa-bell',
        description: 'Esposa del corregidor de Querétaro que alertó a los conspiradores sobre el descubrimiento de la trama.',
        keyFact: 'Informó a Allende de que la conspiración había sido descubierta, permitiendo el adelanto del Grito.',
        legacy: 'Su valentía fue clave para que el movimiento independentista no fuera descubierto antes de tiempo.',
        facts: [
            'Era esposa de Miguel Domínguez, corregidor de Querétaro',
            'Organizaba reuniones de la conspiración en su casa',
            'Fue descubierta y encarcelada, pero logró enviar un aviso',
            'Es uno de los símbolos femeninos más importantes de la independencia'
        ]
    },
    {
        id: 'iturbide',
        name: 'Agustín de Iturbide',
        shortName: 'Agustín de Iturbide',
        alias: 'El Consumador de la Independencia',
        born: '1783',
        died: '1824',
        icon: 'fa-crown',
        description: 'Militar realista que cambió de bando y firmó la independencia de México.',
        keyFact: 'Propuso el Plan de Iguala con las Tres Garantías: Independencia, Religión y Unión.',
        legacy: 'Aunque consumó la independencia, su figura es polémica por proclamarse emperador.',
        facts: [
            'Inicialmente luchó contra los insurgentes',
            'Creó el Plan de Iguala con las Tres Garantías',
            'Firmó los Tratados de Córdoba con Guerrero en 1821',
            'Se proclamó emperador de México en 1822'
        ]
    },
    {
        id: 'aldama',
        name: 'Juan Aldama',
        shortName: 'Juan Aldama',
        alias: 'El Constructor de la Conspiración',
        born: '1774',
        died: '1811',
        icon: 'fa-handshake',
        description: 'Militar que fue pieza fundamental en la Conspiración de Querétaro.',
        keyFact: 'Fue enlace entre los conspiradores de Querétaro y Hidalgo en Dolores.',
        legacy: 'Su papel como comunicador y organizador fue esencial para el inicio de la lucha armada.',
        facts: [
            'Era capitán del regimiento de la Reina en Querétaro',
            'Participó activamente en las juntas conspiradoras',
            'Viajó a Dolores para avisar a Hidalgo del descubrimiento',
            'Fue ejecutado junto a Hidalgo, Allende y otros en 1811'
        ]
    },
    {
        id: 'abasolo',
        name: 'Mariano Abasolo',
        shortName: 'Mariano Abasolo',
        alias: 'El Tesorero Insurgente',
        born: '1783',
        died: '1816',
        icon: 'fa-coins',
        description: 'Militar que aportó recursos económicos a la causa independentista.',
        keyFact: 'Financió con su propio patrimonio gran parte de los gastos iniciales del ejército insurgente.',
        legacy: 'Representa el apoyo económico que hizo posible el inicio de la guerra de independencia.',
        facts: [
            'Pertenecía a una familia rica de Guanajuato',
            'Aportó grandes cantidades de dinero para la causa',
            'Acompañó a Hidalgo en la campaña militar',
            'Fue desterrado a España donde murió en prisión'
        ]
    },
    {
        id: 'rayon',
        name: 'Ignacio López Rayón',
        shortName: 'Ignacio López Rayón',
        alias: 'El Organizador Político',
        born: '1773',
        died: '1832',
        icon: 'fa-gavel',
        description: 'Abogado que organizó la estructura política y administrativa del movimiento insurgente.',
        keyFact: 'Presidió la Suprema Junta Nacional Americana, primer órgano de gobierno insurgente.',
        legacy: 'Sentó las bases del gobierno independiente con una visión jurídica y organizativa.',
        facts: [
            'Era abogado formado en la Universidad de México',
            'Se unió a Hidalgo tras el Grito de Dolores',
            'Fundó la Suprema Junta Nacional Americana en Zitácuaro',
            'Impulsó la creación de un periódico insurgente: El Ilustrador Americano'
        ]
    },
    {
        id: 'pedromoreno',
        name: 'Pedro Moreno',
        shortName: 'Pedro Moreno',
        alias: 'El Héroe del Fuerte del Sombrero',
        born: '1775',
        died: '1817',
        icon: 'fa-fort-awesome',
        description: 'Comerciante y militar que transformó su hacienda en una fortaleza insurgente.',
        keyFact: 'Defendió el Fuerte del Sombrero durante meses contra el ejército realista.',
        legacy: 'Simboliza la resistencia tenaz del pueblo mexicano contra un ejército superior.',
        facts: [
            'Era un acaudalado comerciante de Guanajuato',
            'Convirtió su hacienda en una fortaleza llamada Fuerte del Sombrero',
            'Resistió múltiples asaltos del ejército realista',
            'Murió combatiendo en el Fuerte de Los Remedios en 1817'
        ]
    },
    {
        id: 'galeana',
        name: 'Hermenegildo Galeana',
        shortName: 'Hermenegildo Galeana',
        alias: 'El Marino Insurgente',
        born: '1762',
        died: '1814',
        icon: 'fa-anchor',
        description: 'Marino que se unió a la insurgencia y combatió en la costa del Pacífico.',
        keyFact: 'Fue uno de los principales lugartenientes de Morelos en las campañas del sur.',
        legacy: 'Su experiencia naval permitió a los insurgentes controlar puertos estratégicos.',
        facts: [
            'Trabajaba como marino antes de unirse a la insurgencia',
            'Se integró al ejército de Morelos en 1811',
            'Participó en la toma de varios puertos del Pacífico',
            'Murió en combate en 1814 durante una emboscada realista'
        ]
    }
];

// ===== DEFINICIÓN DE LECCIONES =====
const lessons = [
    {
        id: 1,
        title: 'El Inicio',
        subtitle: 'Hidalgo, Allende y el Grito',
        icon: 'fa-flag',
        characterIds: ['hidalgo', 'allende', 'aldama'],
        questionsPerSet: 6
    },
    {
        id: 2,
        title: 'La Corregidora',
        subtitle: 'Josefa Ortiz y la conspiración',
        icon: 'fa-bell',
        characterIds: ['josefa', 'abasolo'],
        questionsPerSet: 4
    },
    {
        id: 3,
        title: 'El Siervo de la Nación',
        subtitle: 'Morelos y su visión política',
        icon: 'fa-scroll',
        characterIds: ['morelos', 'rayon'],
        questionsPerSet: 4
    },
    {
        id: 4,
        title: 'Mujeres de la Independencia',
        subtitle: 'Leona Vicario y su legado',
        icon: 'fa-feather-pointed',
        characterIds: ['leona'],
        questionsPerSet: 3
    },
    {
        id: 5,
        title: 'La Resistencia',
        subtitle: 'Guerrero, Galeana y Pedro Moreno',
        icon: 'fa-mountain-sun',
        characterIds: ['guerrero', 'galeana', 'pedromoreno'],
        questionsPerSet: 6
    },
    {
        id: 6,
        title: 'La Consumación',
        subtitle: 'Iturbide y el Plan de Iguala',
        icon: 'fa-crown',
        characterIds: ['iturbide', 'guerrero'],
        questionsPerSet: 4
    },
    {
        id: 7,
        title: 'Maestros y Discípulos',
        subtitle: 'Conexiones entre los héroes',
        icon: 'fa-people-group',
        characterIds: ['hidalgo', 'morelos', 'guerrero', 'allende'],
        questionsPerSet: 6
    },
    {
        id: 8,
        title: 'El Legado Vivo',
        subtitle: 'Repaso final integral',
        icon: 'fa-landmark-dome',
        characterIds: characters.map(function (c) { return c.id; }),
        questionsPerSet: 8
    }
];

// ===== ESTADO DEL JUEGO =====
var gameState = {
    xp: 0,
    hearts: 5,
    maxHearts: 5,
    streak: 0,
    bestStreak: 0,
    currentLesson: null,
    currentQuestionIndex: 0,
    questions: [],
    correctCount: 0,
    wrongCount: 0,
    selectedOption: null,
    answered: false,
    completedLessons: {},
    totalCorrect: 0,
    totalPlayed: 0
};

// ===== PERSISTENCIA =====
function loadState() {
    try {
        var saved = localStorage.getItem('heroes_independencia_state');
        if (saved) {
            var parsed = JSON.parse(saved);
            if (parsed.xp !== undefined) gameState.xp = parsed.xp;
            if (parsed.hearts !== undefined) gameState.hearts = parsed.hearts;
            if (parsed.streak !== undefined) gameState.streak = parsed.streak;
            if (parsed.bestStreak !== undefined) gameState.bestStreak = parsed.bestStreak;
            if (parsed.completedLessons) gameState.completedLessons = parsed.completedLessons;
            if (parsed.totalCorrect !== undefined) gameState.totalCorrect = parsed.totalCorrect;
            if (parsed.totalPlayed !== undefined) gameState.totalPlayed = parsed.totalPlayed;
        }
    } catch (e) {
        // Ignorar errores de lectura
    }
}

function saveState() {
    try {
        localStorage.setItem('heroes_independencia_state', JSON.stringify({
            xp: gameState.xp,
            hearts: gameState.hearts,
            streak: gameState.streak,
            bestStreak: gameState.bestStreak,
            completedLessons: gameState.completedLessons,
            totalCorrect: gameState.totalCorrect,
            totalPlayed: gameState.totalPlayed
        }));
    } catch (e) {
        // Ignorar errores de escritura
    }
}

// ===== UTILIDADES =====
function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

function getChar(id) {
    for (var i = 0; i < characters.length; i++) {
        if (characters[i].id === id) return characters[i];
    }
    return null;
}

function getOtherChars(excludeIds, count) {
    var available = characters.filter(function (c) {
        return excludeIds.indexOf(c.id) === -1;
    });
    return shuffle(available).slice(0, count);
}

// ===== GENERADORES DE PREGUNTAS =====
function generateQuestions(lesson) {
    var ids = lesson.characterIds;
    var pool = [];

    ids.forEach(function (id) {
        var ch = getChar(id);
        if (!ch) return;

        pool.push({ type: 'who_is', charId: id });
        pool.push({ type: 'what_did', charId: id });
        pool.push({ type: 'alias', charId: id });
        pool.push({ type: 'year_born', charId: id });

        ch.facts.forEach(function (_, i) {
            pool.push({ type: 'fact_match', charId: id, factIndex: i });
        });

        pool.push({ type: 'complete_sentence', charId: id });
    });

    pool = shuffle(pool);
    var selected = pool.slice(0, lesson.questionsPerSet);
    var questions = [];

    selected.forEach(function (q) {
        var ch = getChar(q.charId);
        if (!ch) return;
        var question = null;

        switch (q.type) {
            case 'who_is': {
                var others = getOtherChars([q.charId], 3);
                question = {
                    type: 'who_is',
                    typeLabel: 'Identificación',
                    text: 'Este personaje participó activamente en la Independencia de México. ¿Quién es?',
                    hint: '"' + ch.keyFact + '"',
                    icon: ch.icon,
                    options: shuffle([
                        { text: ch.shortName, correct: true },
                        { text: others[0].shortName, correct: false },
                        { text: others[1].shortName, correct: false },
                        { text: others[2].shortName, correct: false }
                    ])
                };
                break;
            }
            case 'what_did': {
                var others = getOtherChars([q.charId], 3);
                question = {
                    type: 'what_did',
                    typeLabel: 'Hazaña',
                    text: '¿Qué logro o hecho se le atribuye a ' + ch.shortName + '?',
                    hint: ch.alias,
                    options: shuffle([
                        { text: ch.keyFact, correct: true },
                        { text: others[0].keyFact, correct: false },
                        { text: others[1].keyFact, correct: false },
                        { text: others[2].keyFact, correct: false }
                    ])
                };
                break;
            }
            case 'alias': {
                var others = getOtherChars([q.charId], 3);
                question = {
                    type: 'alias',
                    typeLabel: 'Apodo',
                    text: '¿Cuál es el apodo histórico de ' + ch.shortName + '?',
                    hint: 'Nació en ' + ch.born + ' y murió en ' + ch.died,
                    options: shuffle([
                        { text: ch.alias, correct: true },
                        { text: others[0].alias, correct: false },
                        { text: others[1].alias, correct: false },
                        { text: others[2].alias, correct: false }
                    ])
                };
                break;
            }
            case 'year_born': {
                var realYear = parseInt(ch.born, 10);
                var fakeYears = [
                    String(realYear + 12 + Math.floor(Math.random() * 18)),
                    String(realYear - 15 - Math.floor(Math.random() * 25)),
                    String(realYear + 30 + Math.floor(Math.random() * 15))
                ];
                question = {
                    type: 'year_born',
                    typeLabel: 'Fecha',
                    text: '¿En qué año nació ' + ch.shortName + '?',
                    hint: 'Murió en ' + ch.died,
                    options: shuffle([
                        { text: ch.born, correct: true },
                        { text: fakeYears[0], correct: false },
                        { text: fakeYears[1], correct: false },
                        { text: fakeYears[2], correct: false }
                    ])
                };
                break;
            }
            case 'fact_match': {
                var fact = ch.facts[q.factIndex];
                var others = getOtherChars([q.charId], 3);
                var wrongFacts = [];
                others.forEach(function (o) {
                    if (o.facts.length > 0) {
                        wrongFacts.push(o.facts[Math.floor(Math.random() * o.facts.length)]);
                    }
                });
                while (wrongFacts.length < 3) {
                    wrongFacts.push('Luchó en la Guerra de Independencia de México');
                }
                question = {
                    type: 'fact_match',
                    typeLabel: 'Dato histórico',
                    text: '¿Cuál de estos datos corresponde a ' + ch.shortName + '?',
                    hint: ch.alias,
                    options: shuffle([
                        { text: fact, correct: true },
                        { text: wrongFacts[0], correct: false },
                        { text: wrongFacts[1], correct: false },
                        { text: wrongFacts[2], correct: false }
                    ])
                };
                break;
            }
            case 'complete_sentence': {
                var others = getOtherChars([q.charId], 3);
                question = {
                    type: 'complete_sentence',
                    typeLabel: 'Completa',
                    text: ch.shortName + ' es recordado en la historia como:',
                    hint: ch.description,
                    options: shuffle([
                        { text: ch.alias, correct: true },
                        { text: others[0].alias, correct: false },
                        { text: others[1].alias, correct: false },
                        { text: others[2].alias, correct: false }
                    ])
                };
                break;
            }
        }

        if (question) questions.push(question);
    });

    return questions;
}

// ===== NAVEGACIÓN DE PANTALLAS =====
function showScreen(id) {
    var screens = document.querySelectorAll('.screen');
    for (var i = 0; i < screens.length; i++) {
        screens[i].classList.remove('active');
    }
    document.getElementById(id).classList.add('active');

    var isGameover = (id === 'screenGameover');
    document.getElementById('topBar').classList.toggle('hidden', isGameover);
    window.scrollTo(0, 0);
}

function updateHUD() {
    document.getElementById('xpDisplay').textContent = gameState.xp;
    document.getElementById('streakDisplay').textContent = gameState.streak;
    document.getElementById('heartsDisplay').textContent = gameState.hearts;
}

// ===== ÁRBOL DE LECCIONES =====
function renderLessonTree() {
    var tree = document.getElementById('lessonTree');
    var line = tree.querySelector('.tree-line');

    // Limpiar nodos anteriores, conservar la línea
    while (tree.firstChild) {
        tree.removeChild(tree.firstChild);
    }
    tree.appendChild(line);

    lessons.forEach(function (lesson, idx) {
        var completed = gameState.completedLessons[lesson.id];
        var isUnlocked = idx === 0 || gameState.completedLessons[lessons[idx - 1].id];
        var statusClass = completed ? 'completed' : (isUnlocked ? 'unlocked' : 'locked');

        var node = document.createElement('div');
        node.className = 'lesson-node ' + statusClass;
        node.setAttribute('role', 'button');
        node.setAttribute('tabindex', isUnlocked ? '0' : '-1');
        node.setAttribute('aria-label', lesson.title + ' - ' + lesson.subtitle);

        var starsHtml = '';
        if (completed) {
            starsHtml = '<div class="node-stars">';
            for (var s = 1; s <= 3; s++) {
                starsHtml += '<i class="fas fa-star ' + (s <= completed.stars ? 'earned' : '') + '"></i>';
            }
            starsHtml += '</div>';
        }

        var iconClass = completed ? 'fa-check' : lesson.icon;

        node.innerHTML =
            '<div class="node-info">' +
                '<h3>' + lesson.title + '</h3>' +
                '<p>' + lesson.subtitle + '</p>' +
                starsHtml +
            '</div>' +
            '<div class="node-circle">' +
                '<i class="fas ' + iconClass + '"></i>' +
            '</div>';

        if (isUnlocked) {
            (function (les) {
                node.addEventListener('click', function () { startLesson(les); });
                node.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        startLesson(les);
                    }
                });
            })(lesson);
        }

        tree.appendChild(node);
    });
}

// ===== INICIAR LECCIÓN =====
function startLesson(lesson) {
    gameState.currentLesson = lesson;
    gameState.currentQuestionIndex = 0;
    gameState.correctCount = 0;
    gameState.wrongCount = 0;
    gameState.selectedOption = null;
    gameState.answered = false;
    gameState.questions = generateQuestions(lesson);

    if (gameState.questions.length < 3) {
        gameState.questions = generateQuestions(lesson);
    }

    showScreen('screenGame');
    renderQuestion();
}

// ===== RENDERIZAR PREGUNTA =====
function renderQuestion() {
    var q = gameState.questions[gameState.currentQuestionIndex];
    var total = gameState.questions.length;
    var progress = (gameState.currentQuestionIndex / total) * 100;

    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('actionBar').style.display = 'none';
    gameState.answered = false;
    gameState.selectedOption = null;

    var area = document.getElementById('questionArea');
    var html = '<div class="question-card">';
    html += '<span class="question-type-label">' + q.typeLabel + '</span>';
    html += '<h2 class="question-text">' + q.text + '</h2>';
    if (q.hint) {
        html += '<p class="question-hint">' + q.hint + '</p>';
    }

    // Icono representativo del personaje
    if (q.icon) {
        html +=
            '<div class="character-portrait">' +
                '<div class="portrait-placeholder">' +
                    '<i class="fas ' + q.icon + '"></i>' +
                    '<span>Personaje histórico</span>' +
                '</div>' +
            '</div>';
    }

    html += '</div>';

    // Opciones
    var isLong = q.options.some(function (o) { return o.text.length > 60; });
    html += '<div class="options-grid' + (isLong ? ' single-col' : '') + '">';
    var keys = ['A', 'B', 'C', 'D'];
    for (var i = 0; i < q.options.length; i++) {
        html +=
            '<button class="option-btn" data-index="' + i + '" aria-label="Opción ' + keys[i] + ': ' + q.options[i].text + '">' +
                '<span class="option-key">' + keys[i] + '</span>' +
                '<span>' + q.options[i].text + '</span>' +
            '</button>';
    }
    html += '</div>';

    area.innerHTML = html;

    // Listeners de opciones
    var btns = area.querySelectorAll('.option-btn');
    for (var j = 0; j < btns.length; j++) {
        (function (btn, index) {
            btn.addEventListener('click', function () { handleAnswer(index); });
        })(btns[j], j);
    }

    // Atajos de teclado
    document.onkeydown = function (e) {
        if (gameState.answered) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                nextQuestion();
            }
            return;
        }
        var keyMap = { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 };
        var idx = keyMap[e.key.toLowerCase()];
        if (idx !== undefined) {
            var buttons = area.querySelectorAll('.option-btn');
            if (buttons[idx]) handleAnswer(idx);
        }
    };
}

// ===== MANEJAR RESPUESTA =====
function handleAnswer(index) {
    if (gameState.answered) return;
    gameState.answered = true;
    gameState.selectedOption = index;

    var q = gameState.questions[gameState.currentQuestionIndex];
    var isCorrect = q.options[index].correct;
    var btns = document.querySelectorAll('.option-btn');

    // Marcar todas como disabled y resaltar correcta/incorrecta
    for (var i = 0; i < btns.length; i++) {
        btns[i].classList.add('disabled');
        if (q.options[i].correct) {
            btns[i].classList.add('correct');
        }
        if (i === index && !isCorrect) {
            btns[i].classList.add('wrong');
        }
    }

    // Mostrar barra de acción inferior
    var actionBar = document.getElementById('actionBar');
    var feedbackText = document.getElementById('feedbackText');
    var continueBtn = document.getElementById('continueBtn');

    actionBar.style.display = 'block';
    continueBtn.disabled = false;
    continueBtn.textContent = 'Continuar';
    continueBtn.onclick = nextQuestion;

    if (isCorrect) {
        gameState.correctCount++;
        gameState.streak++;
        if (gameState.streak > gameState.bestStreak) {
            gameState.bestStreak = gameState.streak;
        }
        var xpGain = 10 + Math.min(gameState.streak * 2, 10);
        gameState.xp += xpGain;
        feedbackText.className = 'feedback-text correct';
        feedbackText.innerHTML = '<i class="fas fa-check-circle"></i> ¡Correcto! +' + xpGain + ' XP';
        spawnParticles(window.innerWidth / 2, window.innerHeight - 100, '#00B865');
    } else {
        gameState.wrongCount++;
        gameState.streak = 0;
        gameState.hearts--;
        feedbackText.className = 'feedback-text wrong';
        feedbackText.innerHTML = '<i class="fas fa-times-circle"></i> Incorrecto';

        // Animar corazón
        var heartsPill = document.getElementById('heartsPill');
        heartsPill.classList.add('loss');
        setTimeout(function () { heartsPill.classList.remove('loss'); }, 500);
    }

    updateHUD();
    saveState();

    // Verificar si se quedó sin vidas
    if (gameState.hearts <= 0) {
        setTimeout(function () {
            document.onkeydown = null;
            showScreen('screenGameover');
        }, 1200);
    }
}

// ===== SIGUIENTE PREGUNTA =====
function nextQuestion() {
    if (gameState.hearts <= 0) return;

    gameState.currentQuestionIndex++;

    if (gameState.currentQuestionIndex >= gameState.questions.length) {
        finishLesson();
        return;
    }

    renderQuestion();
}

// ===== TERMINAR LECCIÓN =====
function finishLesson() {
    document.onkeydown = null;
    var lesson = gameState.currentLesson;
    var total = gameState.questions.length;
    var correct = gameState.correctCount;
    var pct = correct / total;

    // Calcular estrellas
    var stars = 0;
    if (pct >= 0.9) stars = 3;
    else if (pct >= 0.7) stars = 2;
    else if (pct >= 0.5) stars = 1;

    // Bonus XP por completar
    var bonusXP = stars * 15;
    gameState.xp += bonusXP;

    // Guardar progreso de la lección
    var prev = gameState.completedLessons[lesson.id];
    if (!prev || stars > prev.stars) {
        gameState.completedLessons[lesson.id] = {
            stars: stars,
            bestCorrect: Math.max(correct, prev ? prev.bestCorrect : 0)
        };
    }

    gameState.totalCorrect += correct;
    gameState.totalPlayed += total;

    // Recuperar una vida al completar
    if (gameState.hearts < gameState.maxHearts) {
        gameState.hearts = Math.min(gameState.hearts + 1, gameState.maxHearts);
    }

    updateHUD();
    saveState();

    // Renderizar pantalla de resultados
    var container = document.getElementById('resultsContent');

    var starsHtml = '';
    for (var s = 1; s <= 3; s++) {
        starsHtml += '<i class="fas fa-star ' + (s <= stars ? 'earned' : '') + '"></i>';
    }

    container.innerHTML =
        '<div class="results-crown"><i class="fas fa-trophy" style="color: var(--gold);"></i></div>' +
        '<h2 class="results-title">Lección completada</h2>' +
        '<p class="results-subtitle">' + lesson.title + '</p>' +
        '<div class="results-stars">' + starsHtml + '</div>' +
        '<div class="results-stats">' +
            '<div class="result-stat">' +
                '<div class="value green">' + correct + '</div>' +
                '<div class="label">Correctas</div>' +
            '</div>' +
            '<div class="result-stat">' +
                '<div class="value red">' + gameState.wrongCount + '</div>' +
                '<div class="label">Incorrectas</div>' +
            '</div>' +
            '<div class="result-stat">' +
                '<div class="value gold">+' + bonusXP + '</div>' +
                '<div class="label">XP bonus</div>' +
            '</div>' +
        '</div>' +
        '<div class="results-buttons">' +
            '<button class="btn-secondary" id="resultsHomeBtn">Mapa de lecciones</button>' +
            '<button class="btn-primary" id="resultsRetryBtn">Repetir lección</button>' +
        '</div>';

    showScreen('screenResults');

    // Listeners de los botones de resultados
    document.getElementById('resultsHomeBtn').addEventListener('click', goHome);
    document.getElementById('resultsRetryBtn').addEventListener('click', retryLesson);

    // Celebración si tuvo buen desempeño
    if (stars >= 2) {
        spawnCelebration();
    }
}

// ===== NAVEGACIÓN =====
function goHome() {
    document.onkeydown = null;
    renderLessonTree();
    showScreen('screenHome');
}

function retryLesson() {
    if (gameState.hearts <= 0) {
        gameState.hearts = gameState.maxHearts;
        updateHUD();
        saveState();
    }
    if (gameState.currentLesson) {
        startLesson(gameState.currentLesson);
    } else {
        goHome();
    }
}

function resetProgress() {
    if (confirm('Se perderá todo tu progreso. ¿Estás seguro?')) {
        localStorage.removeItem('heroes_independencia_state');
        gameState.xp = 0;
        gameState.hearts = 5;
        gameState.streak = 0;
        gameState.bestStreak = 0;
        gameState.completedLessons = {};
        gameState.totalCorrect = 0;
        gameState.totalPlayed = 0;
        updateHUD();
        renderLessonTree();
        closeModal();
        showToast('Progreso reiniciado', 'fa-rotate-right');
    }
}

// ===== MODAL PERFIL =====
function openProfile() {
    var totalLessons = lessons.length;
    var completed = Object.keys(gameState.completedLessons).length;
    var totalStars = 0;
    var keys = Object.keys(gameState.completedLessons);
    for (var i = 0; i < keys.length; i++) {
        totalStars += gameState.completedLessons[keys[i]].stars;
    }
    var maxStars = totalLessons * 3;
    var pct = gameState.totalPlayed > 0 ? Math.round((gameState.totalCorrect / gameState.totalPlayed) * 100) : 0;
    var starsBarWidth = maxStars > 0 ? (totalStars / maxStars * 100) : 0;

    document.getElementById('profileContent').innerHTML =
        '<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:24px;">' +
            '<div style="background:var(--bg);padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border);">' +
                '<div style="font-size:1.5rem;font-weight:900;color:var(--gold);">' + gameState.xp + '</div>' +
                '<div style="font-size:0.8rem;color:var(--fg-muted);">XP total</div>' +
            '</div>' +
            '<div style="background:var(--bg);padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border);">' +
                '<div style="font-size:1.5rem;font-weight:900;color:var(--accent);">' + completed + '/' + totalLessons + '</div>' +
                '<div style="font-size:0.8rem;color:var(--fg-muted);">Lecciones</div>' +
            '</div>' +
            '<div style="background:var(--bg);padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border);">' +
                '<div style="font-size:1.5rem;font-weight:900;color:#FF6B35;">' + gameState.bestStreak + '</div>' +
                '<div style="font-size:0.8rem;color:var(--fg-muted);">Mejor racha</div>' +
            '</div>' +
            '<div style="background:var(--bg);padding:16px;border-radius:var(--radius-sm);border:1px solid var(--border);">' +
                '<div style="font-size:1.5rem;font-weight:900;color:var(--fg);">' + pct + '%</div>' +
                '<div style="font-size:0.8rem;color:var(--fg-muted);">Precisión</div>' +
            '</div>' +
        '</div>' +
        '<div style="margin-bottom:20px;">' +
            '<div style="display:flex;justify-content:space-between;margin-bottom:6px;">' +
                '<span style="font-size:0.85rem;font-weight:700;">Estrellas</span>' +
                '<span style="font-size:0.85rem;color:var(--gold);font-weight:700;">' + totalStars + '/' + maxStars + '</span>' +
            '</div>' +
            '<div style="height:8px;background:var(--bg);border-radius:100px;overflow:hidden;">' +
                '<div style="height:100%;width:' + starsBarWidth + '%;background:linear-gradient(90deg,var(--gold),#FFD060);border-radius:100px;transition:width 0.5s ease;"></div>' +
            '</div>' +
        '</div>' +
        '<button class="btn-secondary" style="width:100%;font-size:0.85rem;padding:10px;" id="resetBtn">' +
            '<i class="fas fa-rotate-right"></i> Reiniciar progreso' +
        '</button>';

    document.getElementById('profileModal').classList.add('active');

    // Listener del botón de reiniciar
    document.getElementById('resetBtn').addEventListener('click', resetProgress);
}

function closeModal() {
    document.getElementById('profileModal').classList.remove('active');
}

// ===== PARTÍCULAS =====
function spawnParticles(x, y, color) {
    var container = document.getElementById('particlesContainer');
    for (var i = 0; i < 12; i++) {
        var p = document.createElement('div');
        p.className = 'particle';
        var size = 4 + Math.random() * 8;
        var angle = (Math.PI * 2 * i) / 12 + (Math.random() - 0.5) * 0.5;
        var dist = 40 + Math.random() * 80;
        p.style.left = x + 'px';
        p.style.top = y + 'px';
        p.style.width = size + 'px';
        p.style.height = size + 'px';
        p.style.background = color;
        p.style.setProperty('--tx', (Math.cos(angle) * dist) + 'px');
        p.style.setProperty('--ty', (Math.sin(angle) * dist - 30) + 'px');
        container.appendChild(p);
        (function (particle) {
            setTimeout(function () {
                if (particle.parentNode) particle.parentNode.removeChild(particle);
            }, 800);
        })(p);
    }
}

function spawnCelebration() {
    var colors = ['#F4A623', '#00B865', '#FF6B35', '#00E88F', '#FFD060'];
    for (var i = 0; i < 5; i++) {
        (function (idx) {
            setTimeout(function () {
                var x = Math.random() * window.innerWidth;
                var y = Math.random() * window.innerHeight * 0.5;
                spawnParticles(x, y, colors[idx % colors.length]);
            }, idx * 200);
        })(i);
    }
}

// ===== TOASTS =====
function showToast(text, icon) {
    var container = document.getElementById('toastContainer');
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fas ' + (icon || 'fa-info-circle') + '" style="color:var(--accent);"></i> ' + text;
    container.appendChild(toast);
    setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 3000);
}

// ===== EVENT LISTENERS =====
document.getElementById('logoBtn').addEventListener('click', openProfile);
document.getElementById('logoBtn').addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProfile();
    }
});

document.getElementById('modalCloseBtn').addEventListener('click', closeModal);

document.getElementById('profileModal').addEventListener('click', function (e) {
    if (e.target === e.currentTarget) closeModal();
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
});

document.getElementById('gameoverHomeBtn').addEventListener('click', goHome);
document.getElementById('gameoverRetryBtn').addEventListener('click', retryLesson);

// ===== INICIALIZACIÓN =====
loadState();
updateHUD();
renderLessonTree();
```

Listo. Tienes los tres archivos separados: `index.html`, `styles.css` y `app.js`. El juego es completamente funcional con los 12 personajes, 8 lecciones progresivas, 6 tipos de pregunta, sistema de vidas/XP/racha, persistencia en localStorage y todas las animaciones y transiciones.
