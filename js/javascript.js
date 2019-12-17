

var nomeUtente = prompt("Qual è il tuo nome?");
// console.log(nomeUtente);
// document.getElementById("nome").innerHTML = nomeUtente;

var cognomeUtente = prompt("Qual è il tuo cognome?");
// console.log(cognomeUtente);
// document.getElementById("cognome").innerHTML = cognomeUtente;

var colore = prompt("Qual è il tuo colore preferito?");
// console.log(colore);
// document.getElementById("colore").innerHTML = colore;

document.getElementById('password').innerHTML = nomeUtente + cognomeUtente + colore;
