// Countdown
const weddingDate = new Date("May 23, 2026 13:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const diff = weddingDate - now;

    if (diff <= 0) return;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Calendar for May 2026
function generateCalendar() {
    const container = document.getElementById("calendarDates");
    container.innerHTML = "";

    const firstDay = new Date(2026, 4, 1).getDay(); // 0 = неділя
    const daysInMonth = 31;

    let start = firstDay === 0 ? 6 : firstDay - 1; // зміщення до понеділка

    for (let i = 0; i < start; i++) {
        container.innerHTML += "<div></div>";
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const day = document.createElement("div");

        if (d === 23) {
            day.classList.add("highlight-heart-image");
            day.innerText = "23";
        } else {
            day.innerText = d;
        }

        container.appendChild(day);
    }
}

// Викликаємо календар на load
window.addEventListener("load", generateCalendar);

/* ==========================
   FORCE LANDSCAPE MODE
========================== */
function checkOrientation() {
    const rotateWarning = document.getElementById("rotate-warning");
    if (window.innerHeight > window.innerWidth) {
        // Портрет — показуємо overlay
        rotateWarning.style.display = "flex";
        document.body.style.overflow = "hidden"; // блокуємо прокрутку
    } else {
        // Ландшафт — ховаємо overlay
        rotateWarning.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Перевірка при завантаженні та зміні розміру/повороті
window.addEventListener("load", checkOrientation);
window.addEventListener("resize", checkOrientation);
window.addEventListener("orientationchange", checkOrientation);
