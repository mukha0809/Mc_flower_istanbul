document.addEventListener('DOMContentLoaded', () => {
    // 1. ФУНКЦИЯ ОПРЕДЕЛЕНИЯ СТАТУСА РАБОТЫ (10:00 - 21:00)
    function updateShopStatus() {
        const statusElement = document.getElementById('shop-status');
        if (!statusElement) return;

        // Получаем текущее время в Стамбуле (или местное время пользователя)
        const now = new Date();
        const hours = now.getHours();

        // Время работы: с 10 до 21
        const openHour = 10;
        const closeHour = 21;

        if (hours >= openHour && hours < closeHour) {
            statusElement.innerHTML = ' • <span style="color: #48bb78; font-weight: 600;">Сейчас открыто / Açık</span>';
        } else {
            statusElement.innerHTML = ' • <span style="color: #e53e3e; font-weight: 600;">Сейчас закрыто / Kapalı</span>';
        }
    }

    // 2. КРАСИВАЯ АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТОЧЕК
    const cards = document.querySelectorAll('.card');
    
    // Устанавливаем начальное состояние через JS, чтобы если у пользователя отключен JS, сайт все равно работал
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Запускаем анимацию с небольшой задержкой для каждой карточки (эффект очереди)
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200); 
    });

    // Запускаем проверку времени сразу при загрузке
    updateShopStatus();
    
    // Обновляем статус каждую минуту на случай, если пользователь долго сидит на странице
    setInterval(updateShopStatus, 60000);
});
