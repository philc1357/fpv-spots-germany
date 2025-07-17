// Funktion zum Setzen eines Cookies
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + "; path=/" + expires;
}

// Funktion zum Lesen eines Cookies
function getCookie(name) {
    let nameEQ = name + "=";
    let cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length);
        }
    }
    return null;
}

// Funktion für Cookie-Zustimmung
function acceptCookies() {
    document.getElementById("map").style.opacity = 1;
    setCookie("cookie_consent", "accepted", 365);
    document.getElementById("cookie_banner").style.display = "none";
    loadTrackingScripts(); // Tracking aktivieren
}

// Funktion für Cookie-Ablehnung
function rejectCookies() {    
    document.getElementById("map").style.opacity = 1;
    setCookie("cookie_consent", "denied", 365);
    document.getElementById("cookie_banner").style.display = "none";
}

// Beim Laden prüfen, ob der Nutzer bereits zugestimmt oder abgelehnt hat
window.onload = function() {
    let consent = getCookie("cookie_consent");
    if (consent === "accepted") {
        document.getElementById("cookie_banner").style.display = "none";
        loadTrackingScripts(); // Tracking aktivieren
    } else if (consent === "denied") {
        document.getElementById("cookie_banner").style.display = "none";
    }
};

// Funktion zum Laden von Tracking-Skripten
function loadTrackingScripts() {
    let script = document.createElement("script");
    // script.src = "https://www.example.com/tracking.js"; // Hier dein Tracking-Skript einfügen
    document.body.appendChild(script);
}