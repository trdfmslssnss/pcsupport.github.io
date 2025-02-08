document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quiz-form');

    // Результаты теста
    const results = {
        office: {
            title: "Офисный компьютер",
            description: "Вам подойдет бюджетный компьютер для работы с документами, интернетом и легкими приложениями.",
            recommendations: [
                "Процессор: Intel Core i3 или AMD Ryzen 3",
                "Оперативная память: 8 ГБ",
                "Накопитель: SSD на 256 ГБ",
                "Видеокарта: Интегрированная (встроенная в процессор)"
            ]
        },
        games: {
            title: "Игровой компьютер",
            description: "Вам нужен мощный компьютер для комфортной игры в современные игры на высоких настройках.",
            recommendations: [
                "Процессор: Intel Core i5/i7 или AMD Ryzen 5/7",
                "Оперативная память: 16 ГБ",
                "Накопитель: SSD на 512 ГБ",
                "Видеокарта: NVIDIA RTX 3060 или выше"
            ]
        },
        creative: {
            title: "Компьютер для творчества",
            description: "Выберите мощный компьютер для работы с графикой, видео и 3D-моделированием.",
            recommendations: [
                "Процессор: Intel Core i7/i9 или AMD Ryzen 7/9",
                "Оперативная память: 32 ГБ",
                "Накопитель: SSD на 1 ТБ",
                "Видеокарта: NVIDIA RTX 3070 или выше"
            ]
        },
        programming: {
            title: "Компьютер для программирования",
            description: "Вам подойдет компьютер с хорошей производительностью для работы с кодом и виртуальными машинами.",
            recommendations: [
                "Процессор: Intel Core i5 или AMD Ryzen 5",
                "Оперативная память: 16 ГБ",
                "Накопитель: SSD на 512 ГБ",
                "Видеокарта: NVIDIA GTX 1660 или выше"
            ]
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
        const resultKey = answers.q1; // Используем ответ на первый вопрос как ключ

        // Переход на страницу результата с передачей данных
        window.location.href = `result.html?result=${resultKey}`;
    });
});