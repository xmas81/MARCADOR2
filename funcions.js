let puntsA = 0;
let puntsB = 0;
function marcador(equip, punts) {
    if (equip=='A') {
        puntsA += punts;
        document.getElementById('points-a').innerHTML = puntsA;
    }
    if (equip=='B') {
        puntsB += punts;
        document.getElementById('points-b').innerHTML = puntsB;
    }
    document.getElementById('historic').innerHTML += "<p>" + puntsA + "-" + puntsB + "</p>";
}

function inici() {
    puntsA = 0;
    puntsB = 0;
    document.getElementById('historic').innerHTML = "<h2>Historial de la Partida</h2>";
    document.getElementById('points-a').innerHTML = 0;
    document.getElementById('points-b').innerHTML = 0;
}