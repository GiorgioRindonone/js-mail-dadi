// validare la mail inserita dall'utente se presente nell'elenco


var listaMail = ["gigio.gmail.com", "francocarla@gmail.com", "boolean@gmail.com", "vip@gmail.com"];
var mailUtente = prompt("scrivi la mail e controllo se farti entrare");
var validato = 0;

for (var i = 0; i < listaMail.length; i++) {
  if (mailUtente === listaMail[i]) {
    console.log("ok entra");
    validato = 1;

  }
}

if (validato == 1) {
  document.getElementById("box").style.backgroundImage = "url('img/accessoconsentito.jpg')";
  document.getElementById('testo').innerHTML = "Puoi entrare";

} else {
  document.getElementById("box").style.backgroundImage = "url('img/accessonegato.png')";
  document.getElementById('testo').innerHTML = "Non puoi entrare";

}
