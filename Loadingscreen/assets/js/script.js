// Steam-Integration
const steamID = "76561198864421015"; // Deine Steam-ID
const apiKey = "YOUR_STEAM_API_KEY"; // Steam API Key

fetch(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamID}`)
    .then(response => response.json())
    .then(data => {
        const player = data.response.players[0];
        document.querySelector('.steam-info img').src = player.avatarfull;
        document.querySelector('.steam-info .name').innerText = player.personaname;
    })
    .catch(error => console.error("Steam API Error:", error));

// Fortschrittsbalken-Simulation (Mockup)
let totalFiles = 50; // Anzahl der Dateien
let downloadedFiles = 0;

function updateProgress() {
    const progress = (downloadedFiles / totalFiles) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
    document.getElementById("file-name").innerText = `Downloading file ${downloadedFiles} of ${totalFiles}`;
    if (downloadedFiles < totalFiles) {
        downloadedFiles++;
        setTimeout(updateProgress, 100); // Simulierte Geschwindigkeit
    } else {
        document.getElementById("file-name").innerText = "Download complete!";
    }
}

updateProgress();
