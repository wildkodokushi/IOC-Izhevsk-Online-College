// Данные специальностей
const specialties = {
    '09.01.03': {
        name: 'Оператор информационных систем и ресурсов',
        description: 'Специалист по работе с информационными системами, базами данных и ресурсами',
        tags: ['системы', 'администрирование', 'базы данных', 'поддержка']
    },
    '09.02.06': {
        name: 'Сетевое и системное администрирование',
        description: 'Специалист по настройке, обслуживанию и защите компьютерных сетей и систем',
        tags: ['сети', 'безопасность', 'администрирование', 'системы']
    },
    '09.02.07': {
        name: 'Информационные системы и программирование',
        description: 'Программист и разработчик информационных систем и приложений',
        tags: ['программирование', 'разработка', 'системы', 'кодирование']
    },
    '10.02.05': {
        name: 'Обеспечение информационной безопасности автоматизированных систем',
        description: 'Специалист по защите информации и кибербезопасности автоматизированных систем',
        tags: ['безопасность', 'защита', 'кибербезопасность', 'системы']
    },
    '13.01.10': {
        name: 'Электромонтер по ремонту и обслуживанию электрооборудования',
        description: 'Специалист по ремонту и обслуживанию электрооборудования и систем',
        tags: ['оборудование', 'ремонт', 'электротехника', 'монтаж']
    },
    '13.02.02': {
        name: 'Теплоснабжение и теплотехническое оборудование',
        description: 'Специалист по тепловым сетям и теплотехническому оборудованию',
        tags: ['тепло', 'оборудование', 'энергетика', 'системы']
    },
    '13.02.13': {
        name: 'Электрические станции, сети и системы',
        description: 'Специалист по электрическим станциям, сетям и системам электроснабжения',
        tags: ['энергетика', 'сети', 'станции', 'электричество']
    },
    '15.02.16': {
        name: 'Технология машиностроения',
        description: 'Специалист по технологии производства и обработки в машиностроении',
        tags: ['машиностроение', 'технологии', 'производство', 'обработка']
    },
    '40.02.02': {
        name: 'Правоохранительная деятельность',
        description: 'Специалист в области правоохранительной деятельности и безопасности',
        tags: ['право', 'безопасность', 'защита', 'организация']
    },
    '40.02.04': {
        name: 'Юриспруденция',
        description: 'Специалист в области права, законодательства и юридических услуг',
        tags: ['право', 'законодательство', 'юридические услуги', 'документы']
    }
};

// Вопросы теста
const questions = [
    {
        text: "Что вам больше нравится делать?",
        options: [
            { text: "Работать с компьютерными программами и приложениями", tags: ["программирование", "системы"] },
            { text: "Настраивать и обслуживать компьютерное оборудование", tags: ["оборудование", "ремонт"] },
            { text: "Обеспечивать безопасность и защиту информации", tags: ["безопасность", "защита"] },
            { text: "Работать с техническими системами и сетями", tags: ["сети", "системы", "энергетика"] }
        ]
    },
    {
        text: "Какой тип задач вас привлекает?",
        options: [
            { text: "Создание новых программ и приложений", tags: ["программирование", "разработка"] },
            { text: "Обслуживание и ремонт технических устройств", tags: ["ремонт", "обслуживание"] },
            { text: "Анализ рисков и обеспечение защиты", tags: ["безопасность", "анализ"] },
            { text: "Проектирование и настройка систем", tags: ["проектирование", "системы"] }
        ]
    },
    {
        text: "Что лучше описывает ваш подход к работе?",
        options: [
            { text: "Творческий - люблю создавать что-то новое", tags: ["разработка", "творчество"] },
            { text: "Практический - предпочитаю конкретные задачи", tags: ["ремонт", "обслуживание"] },
            { text: "Аналитический - важно всё проверить и обезопасить", tags: ["безопасность", "анализ"] },
            { text: "Системный - думаю о работе всей системы", tags: ["системы", "сети"] }
        ]
    },
    {
        text: "Какой вид деятельности вам интересен?",
        options: [
            { text: "Разработка программного обеспечения", tags: ["программирование", "разработка"] },
            { text: "Монтаж и наладка оборудования", tags: ["монтаж", "оборудование"] },
            { text: "Контроль доступа и защита данных", tags: ["безопасность", "защита"] },
            { text: "Управление техническими системами", tags: ["управление", "системы"] }
        ]
    },
    {
        text: "Что вас больше привлекает в технике?",
        options: [
            { text: "Программная часть и алгоритмы", tags: ["программирование", "алгоритмы"] },
            { text: "Аппаратная часть и детали", tags: ["оборудование", "детали"] },
            { text: "Защита и безопасность систем", tags: ["безопасность", "системы"] },
            { text: "Энергетика и силовые системы", tags: ["энергетика", "системы"] }
        ]
    },
    {
        text: "Какой тип проектов вас интересует?",
        options: [
            { text: "Разработка веб-сайтов или мобильных приложений", tags: ["разработка", "программирование"] },
            { text: "Обслуживание промышленного оборудования", tags: ["обслуживание", "оборудование"] },
            { text: "Создание систем безопасности", tags: ["безопасность", "системы"] },
            { text: "Проектирование инженерных систем", tags: ["проектирование", "инженерия"] }
        ]
    },
    {
        text: "Что для вас важнее в работе?",
        options: [
            { text: "Возможность постоянно обучаться новым технологиям", tags: ["разработка", "технологии"] },
            { text: "Конкретный видимый результат работы", tags: ["ремонт", "результат"] },
            { text: "Надёжность и безотказность системы", tags: ["безопасность", "надёжность"] },
            { text: "Стабильность и долговечность систем", tags: ["системы", "стабильность"] }
        ]
    },
    {
        text: "Как вы предпочитаете решать проблемы?",
        options: [
            { text: "Написанием кода или скриптов", tags: ["программирование", "кодирование"] },
            { text: "Физическим ремонтом или заменой деталей", tags: ["ремонт", "детали"] },
            { text: "Анализом уязвимостей и рисков", tags: ["безопасность", "анализ"] },
            { text: "Оптимизацией работы всей системы", tags: ["системы", "оптимизация"] }
        ]
    },
    {
        text: "Что вам ближе?",
        options: [
            { text: "IT-технологии и программирование", tags: ["программирование", "IT"] },
            { text: "Техническое обслуживание и ремонт", tags: ["ремонт", "обслуживание"] },
            { text: "Информационная безопасность", tags: ["безопасность", "информация"] },
            { text: "Энергетика и инженерные системы", tags: ["энергетика", "инженерия"] }
        ]
    },
    {
        text: "Какой карьерный путь вас интересует?",
        options: [
            { text: "Разработчик/Программист", tags: ["разработка", "программирование"] },
            { text: "Техник/Монтажник", tags: ["техник", "монтаж"] },
            { text: "Специалист по безопасности", tags: ["безопасность", "специалист"] },
            { text: "Инженер/Системный администратор", tags: ["инженерия", "администрирование"] }
        ]
    }
];

// Переменные состояния теста
let currentQuestion = 0;
let answers = [];
let userTags = {};

// Получаем элементы DOM
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const questionCard = document.getElementById('questionCard');
const resultCard = document.getElementById('resultCard');
const specialtyMatch = document.getElementById('specialtyMatch');
const specialtiesContainer = document.getElementById('specialtiesContainer');

// Получаем новые элементы навигации
const testNavigation = document.getElementById('testNavigation');
const resultNavigation = document.getElementById('resultNavigation');
const clearResultsBtn = document.getElementById('clearResultsBtn');
const gotoSpecialtiesBtn = document.getElementById('gotoSpecialtiesBtn');

// =========== Ключ для локального хранилища ===========
const STORAGE_KEY = 'profTestResults_v1';

// =========== Функции для работы с локальным хранилищем ===========
function saveResultsToStorage() {
    const results = {
        answers: answers,
        userTags: userTags,
        timestamp: new Date().getTime()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

function loadResultsFromStorage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            const results = JSON.parse(saved);
            // Проверяем, не устарели ли результаты (например, старше 7 дней)
            const now = new Date().getTime();
            const daysDiff = (now - results.timestamp) / (1000 * 60 * 60 * 24);
            
            if (daysDiff < 7) { // Результаты актуальны в течение 7 дней
                return results;
            } else {
                clearStorage(); // Удаляем устаревшие данные
            }
        } catch (e) {
            console.error('Ошибка при чтении сохраненных результатов:', e);
        }
    }
    return null;
}

function clearStorage() {
    localStorage.removeItem(STORAGE_KEY);
}

function initTest() {
    const savedResults = loadResultsFromStorage();
    
    if (savedResults) {
        // Если есть сохраненные результаты, показываем их
        answers = savedResults.answers;
        userTags = savedResults.userTags;
        
        // Проверяем, завершен ли тест (все вопросы отвечены)
        const isTestComplete = !answers.includes(null) && answers.length === questions.length;
        
        if (isTestComplete) {
            showResults();
            return;
        } else {
            // Если тест не завершен, продолжаем с того места, где остановились
            currentQuestion = answers.findIndex(answer => answer === null);
            if (currentQuestion === -1) currentQuestion = 0;
        }
    } else {
        // Нет сохраненных результатов - начинаем с начала
        answers = Array(questions.length).fill(null);
        userTags = {};
        currentQuestion = 0;
    }
    
    // Показываем навигацию теста, скрываем навигацию результатов
    testNavigation.style.display = 'flex';
    resultNavigation.style.display = 'none';
    
    updateQuestion();
    updateProgress();
    updateNavigation();
}

function updateQuestion() {
    const question = questions[currentQuestion];
    
    questionText.textContent = `${currentQuestion + 1}. ${question.text}`;
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.className = `option ${answers[currentQuestion] === index ? 'selected' : ''}`;
        optionElement.innerHTML = `
            <span class="option-number">${index + 1}</span>
            ${option.text}
        `;
        
        optionElement.addEventListener('click', () => {
            selectOption(index);
        });
        
        optionsContainer.appendChild(optionElement);
    });
}

function selectOption(index) {
    answers[currentQuestion] = index;
    
    const selectedTags = questions[currentQuestion].options[index].tags;
    selectedTags.forEach(tag => {
        userTags[tag] = (userTags[tag] || 0) + 1;
    });
    
    // Автосохранение при каждом ответе
    saveResultsToStorage();
    
    updateQuestion();
    updateNavigation();
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
}

function updateNavigation() {
    prevBtn.disabled = currentQuestion === 0;
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
    
    if (answers[currentQuestion] === null) {
        nextBtn.disabled = true;
        submitBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
        submitBtn.disabled = false;
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestion();
        updateProgress();
        updateNavigation();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestion();
        updateProgress();
        updateNavigation();
    }
});

function calculateResults() {
    const specialtyScores = {};
    
    Object.keys(specialties).forEach(code => {
        let score = 0;
        const specialty = specialties[code];
        
        specialty.tags.forEach(tag => {
            if (userTags[tag]) {
                score += userTags[tag] * 10;
            }
        });
        
        specialtyScores[code] = score;
    });
    
    const sortedSpecialties = Object.keys(specialties).sort((a, b) => {
        return specialtyScores[b] - specialtyScores[a];
    });
    
    return sortedSpecialties.slice(0, 3);
}

function showResults() {
    const topSpecialties = calculateResults();
    
    questionCard.style.display = 'none';
    resultCard.style.display = 'block';
    
    const topSpecialtyCode = topSpecialties[0];
    const topSpecialty = specialties[topSpecialtyCode];
    
    specialtyMatch.innerHTML = `
        <div>Ваша наиболее подходящая специальность:</div>
        <div class="main__title" style="margin-top: 10px;">${topSpecialty.name}</div>
        <p style="margin-top: 10px; color: var(--color-black);">${topSpecialty.description}</p>
    `;
    
    specialtiesContainer.innerHTML = '';
    
    topSpecialties.forEach((code, index) => {
        const specialty = specialties[code];
        const specialtyElement = document.createElement('div');
        specialtyElement.className = 'specialty-card';
        specialtyElement.innerHTML = `
            <div class="specialty-code">${code}</div>
            <h3 class="specialty-name">${specialty.name}</h3>
            <p class="specialty-desc">${specialty.description}</p>
            <div class="specialty-match-percentage">
                Совпадение: ${85 - (index * 15)}%
            </div>
        `;
        
        specialtiesContainer.appendChild(specialtyElement);
    });
    
    // Переключаем навигацию: скрываем тестовую, показываем результативную
    testNavigation.style.display = 'none';
    resultNavigation.style.display = 'flex';
    
    // Сохраняем результаты при показе
    saveResultsToStorage();
}

submitBtn.addEventListener('click', () => {
    if (answers.includes(null)) {
        alert('Пожалуйста, ответьте на все вопросы перед завершением теста.');
        return;
    }
    
    showResults();
});

// Обработчик для кнопки "Очистить результаты"
clearResultsBtn.addEventListener('click', () => {
    if (confirm('Вы уверены, что хотите очистить результаты теста и начать заново?')) {
        clearStorage();
        
        // Сбрасываем состояние
        answers = Array(questions.length).fill(null);
        userTags = {};
        currentQuestion = 0;
        
        // Возвращаемся к тесту
        resultCard.style.display = 'none';
        questionCard.style.display = 'block';
        
        // Переключаем навигацию обратно к тестовой
        resultNavigation.style.display = 'none';
        testNavigation.style.display = 'flex';
        
        // Обновляем состояние
        updateQuestion();
        updateProgress();
        updateNavigation();
    }
});

// Сохраняем прогресс при уходе со страницы
window.addEventListener('beforeunload', () => {
    if (answers.length > 0) {
        saveResultsToStorage();
    }
});

// Запуск теста при загрузке страницы
document.addEventListener('DOMContentLoaded', initTest);

// Функция для сохранения выбранной специальности в форме
document.addEventListener('DOMContentLoaded', function() {
    const specialtiesSelect = document.getElementById('specialties');
    if (specialtiesSelect) {
        // Загружаем результаты теста
        const savedResults = loadResultsFromStorage();
        
        // Если тест пройден и есть рекомендации
        if (savedResults && savedResults.answers && !savedResults.answers.includes(null)) {
            const topSpecialties = calculateResults();
            if (topSpecialties && topSpecialties[0]) {
                // Устанавливаем рекомендуемую специальность по умолчанию
                specialtiesSelect.value = topSpecialties[0];
                
                // Показываем сообщение о рекомендации
                const recommendationNote = document.createElement('div');
                recommendationNote.className = 'recommendation-note';
                recommendationNote.style.marginTop = '10px';
                recommendationNote.style.padding = '10px';
                recommendationNote.style.backgroundColor = '#f0f9ff';
                recommendationNote.style.borderRadius = '5px';
                recommendationNote.style.fontSize = '14px';
                recommendationNote.innerHTML = `
                    <strong>Рекомендация:</strong> На основе результатов теста вам подходит специальность 
                    "<strong>${specialties[topSpecialties[0]].name}</strong>". Она была выбрана автоматически.
                `;
                
                // Вставляем сообщение после селекта
                specialtiesSelect.parentNode.insertBefore(recommendationNote, specialtiesSelect.nextSibling);
            }
        }
        
        // Сохраняем выбор при изменении
        specialtiesSelect.addEventListener('change', function() {
            localStorage.setItem('selectedSpecialty', this.value);
        });
    }
});