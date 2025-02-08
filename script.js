document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const startButton = document.getElementById('start-button');

    // Проверяем, был ли уже показан экран загрузки
    if (localStorage.getItem('skipLoadingScreen') === 'true') {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }

    // Обработка нажатия кнопки "Начать"
    if (startButton) {
        startButton.addEventListener('click', function () {
            // Сохраняем в localStorage, что экран загрузки был пройден
            localStorage.setItem('skipLoadingScreen', 'true');

            // Анимация исчезновения экрана загрузки
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 1s ease';

            // Показ основного контента после завершения анимации
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.style.animation = 'fadeIn 1s ease';
            }, 1000);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    const resultText = document.getElementById('result-text');
    const restartButton = document.getElementById('restart-quiz');

    // Результаты теста
    const results = {
        office: {
            title: "Офисный компьютер",
            description: "Вам подойдет бюджетный компьютер с процессором начального уровня (например, Intel Core i3 или AMD Ryzen 3), 8 ГБ оперативной памяти и SSD для быстрой загрузки системы."
        },
        games: {
            title: "Игровой компьютер",
            description: "Вам нужен мощный компьютер с процессором среднего или высокого уровня (например, Intel Core i5/i7 или AMD Ryzen 5/7), видеокартой NVIDIA RTX 3060 или выше и 16 ГБ оперативной памяти."
        },
        creative: {
            title: "Компьютер для творчества",
            description: "Выберите компьютер с мощным процессором (например, Intel Core i7/i9 или AMD Ryzen 7/9), видеокартой NVIDIA RTX 3070 или выше, 32 ГБ оперативной памяти и быстрым SSD."
        },
        programming: {
            title: "Компьютер для программирования",
            description: "Вам подойдет компьютер с процессором среднего уровня (например, Intel Core i5 или AMD Ryzen 5), 16 ГБ оперативной памяти и SSD для быстрой работы с кодом."
        }
    };

    // Обработка отправки формы
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Сбор ответов
        const answers = {
            q1: quizForm.querySelector('input[name="q1"]:checked')?.value,
            q2: quizForm.querySelector('input[name="q2"]:checked')?.value,
            q3: quizForm.querySelector('input[name="q3"]:checked')?.value,
            // Добавьте остальные вопросы
        };

        // Определение результата
        let resultKey = 'office'; // По умолчанию
        if (answers.q1 === 'games') {
            resultKey = 'games';
        } else if (answers.q1 === 'creative') {
            resultKey = 'creative';
        } else if (answers.q1 === 'programming') {
            resultKey = 'programming';
        }

        // Показ результата
        resultText.innerHTML = `<strong>${results[resultKey].title}</strong><br>${results[resultKey].description}`;
        quizForm.classList.add('hidden');
        quizResult.classList.remove('hidden');
    });

    // Кнопка "Пройти тест еще раз"
    restartButton.addEventListener('click', function () {
        quizForm.reset();
        quizForm.classList.remove('hidden');
        quizResult.classList.add('hidden');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');
    const quizResult = document.getElementById('quiz-result');
    const resultText = document.getElementById('result-text');
    const restartButton = document.getElementById('restart-quiz');

    // Результаты теста
    const results = {
        office: {
            title: "Офисный компьютер",
            description: "Вам подойдет бюджетный компьютер с процессором начального уровня (например, Intel Core i3 или AMD Ryzen 3), 8 ГБ оперативной памяти и SSD для быстрой загрузки системы."
        },
        games: {
            title: "Игровой компьютер",
            description: "Вам нужен мощный компьютер с процессором среднего или высокого уровня (например, Intel Core i5/i7 или AMD Ryzen 5/7), видеокартой NVIDIA RTX 3060 или выше и 16 ГБ оперативной памяти."
        },
        creative: {
            title: "Компьютер для творчества",
            description: "Выберите компьютер с мощным процессором (например, Intel Core i7/i9 или AMD Ryzen 7/9), видеокартой NVIDIA RTX 3070 или выше, 32 ГБ оперативной памяти и быстрым SSD."
        },
        programming: {
            title: "Компьютер для программирования",
            description: "Вам подойдет компьютер с процессором среднего уровня (например, Intel Core i5 или AMD Ryzen 5), 16 ГБ оперативной памяти и SSD для быстрой работы с кодом."
        }
    };

    // Обработка отправки формы
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Сбор ответов
        const answers = {
            q1: quizForm.querySelector('input[name="q1"]:checked')?.value,
            q2: quizForm.querySelector('input[name="q2"]:checked')?.value,
            q3: quizForm.querySelector('input[name="q3"]:checked')?.value,
            // Добавьте остальные вопросы
        };

        // Проверка, что все вопросы отвечены
        if (!answers.q1 || !answers.q2 || !answers.q3) {
            alert("Пожалуйста, ответьте на все вопросы!");
            return;
        }

        // Определение результата
        let resultKey = answers.q1; // Используем ответ на первый вопрос как ключ

        // Показ результата
        resultText.innerHTML = `<strong>${results[resultKey].title}</strong><br>${results[resultKey].description}`;
        quizForm.classList.add('hidden');
        quizResult.classList.remove('hidden');
    });

    // Кнопка "Пройти тест еще раз"
    restartButton.addEventListener('click', function () {
        quizForm.reset();
        quizForm.classList.remove('hidden');
        quizResult.classList.add('hidden');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const startButton = document.getElementById('start-button');

    // Проверяем, был ли уже показан экран загрузки
    if (localStorage.getItem('skipLoadingScreen') === 'true') {
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    }

    // Обработка нажатия кнопки "Начать"
    if (startButton) {
        startButton.addEventListener('click', function () {
            // Сохраняем в localStorage, что экран загрузки был пройден
            localStorage.setItem('skipLoadingScreen', 'true');

            // Анимация исчезновения экрана загрузки
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 1s ease';

            // Показ основного контента после завершения анимации
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.style.animation = 'slideIn 1s ease';
            }, 1000);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const startButton = document.getElementById('start-button');

    // Проверяем, была ли уже показана анимация
    if (localStorage.getItem('animationShown') === 'true') {
        // Если анимация уже была показана, сразу показываем основную часть
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    } else {
        // Если анимация еще не была показана, включаем ее
        loadingScreen.style.display = 'flex'; // Показываем экран загрузки
        mainContent.classList.add('hidden'); // Скрываем основную часть
    }

    // Обработка нажатия кнопки "Начать"
    if (startButton) {
        startButton.addEventListener('click', function () {
            // Сохраняем в localStorage, что анимация была показана
            localStorage.setItem('animationShown', 'true');

            // Анимация исчезновения экрана загрузки
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 1s ease';

            // Показ основного контента после завершения анимации
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.style.animation = 'slideIn 1s ease';
            }, 1000);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const startButton = document.getElementById('start-button');

    // Проверяем, была ли уже показана анимация
    if (localStorage.getItem('animationShown') === 'true') {
        // Если анимация уже была показана, сразу показываем основную часть
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.style.animation = 'none'; // Отключаем анимацию
    } else {
        // Если анимация еще не была показана, включаем ее
        loadingScreen.style.display = 'flex'; // Показываем экран загрузки
        mainContent.classList.add('hidden'); // Скрываем основную часть
    }

    // Обработка нажатия кнопки "Начать"
    if (startButton) {
        startButton.addEventListener('click', function () {
            // Сохраняем в localStorage, что анимация была показана
            localStorage.setItem('animationShown', 'true');

            // Анимация исчезновения экрана загрузки
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 1s ease';

            // Показ основного контента после завершения анимации
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.style.animation = 'slideIn 1s ease';
            }, 1000);
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');
    const startButton = document.getElementById('start-button');

    // Проверяем, была ли уже показана анимация
    if (localStorage.getItem('animationShown') === 'true') {
        // Если анимация уже была показана, сразу показываем основную часть
        loadingScreen.style.display = 'none';
        mainContent.classList.remove('hidden');
    } else {
        // Если анимация еще не была показана, включаем ее
        loadingScreen.style.display = 'flex';
        mainContent.classList.add('hidden');
    }

    // Обработка нажатия кнопки "Начать"
    if (startButton) {
        startButton.addEventListener('click', function () {
            // Сохраняем в localStorage, что анимация была показана
            localStorage.setItem('animationShown', 'true');

            // Анимация исчезновения экрана загрузки
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 1s ease';

            // Показ основного контента после завершения анимации
            setTimeout(function () {
                loadingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');
                mainContent.style.animation = 'fadeIn 1s ease';
            }, 1000);
        });
    }
});