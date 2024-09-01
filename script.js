document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('September 8, 2024 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
        
        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById('timer').textContent = "The event has started!";
        }
    }
    
    const interval = setInterval(updateCountdown, 1000);
});
