// Function to load scores from storage
function loadScores() {
    const localScore = localStorage.getItem("localScore") || 0;
    const sessionScore = sessionStorage.getItem("sessionScore") || 0;
    document.getElementById("localScore").textContent = localScore;
    document.getElementById("sessionScore").textContent = sessionScore;
}

// Function to increment scores
function incrementScores() {
    let localScore = parseInt(localStorage.getItem("localScore")) || 0;
    let sessionScore = parseInt(sessionStorage.getItem("sessionScore")) || 0;

    localScore += 1;
    sessionScore += 1;

    localStorage.setItem("localScore", localScore);
    sessionStorage.setItem("sessionScore", sessionScore);

    document.getElementById("localScore").textContent = localScore;
    document.getElementById("sessionScore").textContent = sessionScore;
}

// Load scores on page load
window.onload = loadScores;
