document.addEventListener('DOMContentLoaded', function () {
    const welcomeScreen = document.getElementById('welcome-screen');
    const welcomeButton = document.getElementById('welcome-button');

    // Обработка нажатия кнопки "Начать"
    welcomeButton.addEventListener('click', function () {
        // Анимация исчезновения экрана приветствия
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.transition = 'opacity 1s ease';

        // Переход на главную страницу после завершения анимации
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 1000);
    });
});