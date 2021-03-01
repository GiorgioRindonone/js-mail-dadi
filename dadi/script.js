//genero un valore casuale da 1 a 6 per l'utente e per il bot


// var datoUtente = Math.floor(Math.random() * 6) + 1;
// var datoBot = Math.floor(Math.random() * 6) + 1;
//   document.getElementById('tiro-umano').innerHTML = datoUtente;
//   document.getElementById('tiro-bot').innerHTML = datoBot;
//
// if (datoBot > datoUtente) {
//   document.getElementById('risultato').innerHTML = "Hai perso";
// } else if (datoUtente > datoBot) {
//     document.getElementById('risultato').innerHTML = "Hai vinto";
// } else {
//     document.getElementById('risultato').innerHTML = "pareggio";
// }


//variante scommessa

var datoUtente = prompt("inserisci un numero da 1 a 6, vediamo se avrai fortuna");
var datoBot = Math.floor(Math.random() * 6) + 1;
  document.getElementById('tiro-umano').innerHTML = "UOMO: " + datoUtente;
  document.getElementById('tiro-bot').innerHTML = "BOT: " + datoBot;

if (datoBot > datoUtente) {
  document.getElementById('risultato').innerHTML = "Hai perso";
} else if (datoUtente > datoBot) {
    document.getElementById('risultato').innerHTML = "Hai vinto";
} else {
    document.getElementById('risultato').innerHTML = "pareggio";
}
