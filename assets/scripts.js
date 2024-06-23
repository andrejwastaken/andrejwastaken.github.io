document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const modeText = document.getElementById('text-mode');

    const setModeText = () => {
        if (body.classList.contains('dark-mode')) {
            modeText.textContent = 'Dark';
        } else {
            modeText.textContent = 'Light';
        }
    };

    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    setModeText();

    toggleSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        setModeText();

        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');

    function fetchQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                quoteElement.textContent = `"${data.content}" - ${data.author}`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
            });
    }

    function fetchDailyQuote() {
        fetchQuote();
        setInterval(fetchQuote, 86400000);
    }

    fetchDailyQuote();
});

document.addEventListener('DOMContentLoaded', function() {
    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = today.getDay();
    document.getElementById('day-of-week').textContent = daysOfWeek[dayIndex];
});

document.addEventListener('DOMContentLoaded', function () {
    function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
    }
    setInterval(updateClock, 1000);
    updateClock();
});



