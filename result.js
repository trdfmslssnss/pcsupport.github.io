document.addEventListener('DOMContentLoaded', function () {
    const resultTitle = document.getElementById('result-title');
    const resultDescription = document.getElementById('result-description');
    const recommendationsList = document.getElementById('recommendations');

    // Получаем результат из URL
    const urlParams = new URLSearchParams(window.location.search);
    const resultKey = urlParams.get('result');

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

    // Отображение результата
    if (resultKey && results[resultKey]) {
        const result = results[resultKey];
        resultTitle.textContent = result.title;
        resultDescription.textContent = result.description;

        // Добавляем рекомендации
        result.recommendations.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            recommendationsList.appendChild(li);
        });
    } else {
        resultTitle.textContent = "Ошибка";
        resultDescription.textContent = "Результат не найден. Пожалуйста, пройдите тест еще раз.";
    }
});