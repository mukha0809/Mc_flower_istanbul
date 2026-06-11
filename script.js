document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ДИНАМИЧЕСКИЙ СТАТУС РАБОТЫ МАГАЗИНА (10:00 - 21:00 по времени Стамбула)
    function updateShopStatus() {
        const statusElement = document.getElementById('shop-status');
        if (!statusElement) return;

        // Определяем текущее время в Стамбуле (UTC+3)
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const istanbulTime = new Date(utc + (3600000 * 3));
        
        const hours = istanbulTime.getHours();
        const openHour = 10;
        const closeHour = 21;

        if (hours >= openHour && hours < closeHour) {
            statusElement.innerHTML = ' • <span style="color: #48bb78; font-weight: 600; font-size: 14px;">Açık / Открыто</span>';
        } else {
            statusElement.innerHTML = ' • <span style="color: #e53e3e; font-weight: 600; font-size: 14px;">Kapalı / Закрыто</span>';
        }
    }

    // 2. АНИМАЦИЯ ПОЯВЛЕНИЯ КАРТОЧЕК ПРИ СКРОЛЛЕ
    const sections = document.querySelectorAll('.card, .about-card');
    
    const observerOptions = {
        root: null,
        threshold: 0.1, // Анимация сработает, когда 10% карточки покажется на экране
        rootMargin: "0px 0px -5px 0px"
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Запускаем анимацию только один раз
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        sectionObserver.observe(section);
    });

    // Инициализация статуса работы
    updateShopStatus();
    setInterval(updateShopStatus, 60000); // Обновление каждую минуту
});
