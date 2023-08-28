//console.log("Hello world");

/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: 
Che ci sia un array da qualche parte? 
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Mail
Chiedi all'utente la sua email 
controlla che sia nella lista di chi può accedere
stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/



// DICE

let playerDie = Math.floor((Math.random() * 6) + 1);
//console.log("Dado giocatore: "+ playerDie);

let botDie = Math.floor((Math.random() * 6) + 1);
//console.log("Dado BOT: "+ botDie);

let outcome = "Alas, a tied score. Let's throw the dice again!";

const playerDieElement = document.getElementById("player_die")
playerDieElement.append("Your die say: " + " ' " , + playerDie + " ' ");

const botDieElement = document.getElementById("BOT_die")
botDieElement.append("My die say: " + " ' " , + botDie + " ' " );

const outcomeElement = document.getElementById('outcome');



if (playerDie > botDie) {
    //console.log("Player win!");
   outcomeElement.append("You rock mate!");

} else if (botDie > playerDie) {
    //console.log("BOT win!");
    outcomeElement.append("ahah AI win!(pun intended 😃)"); //pessima battuta
} else {
    //console.log("Alas, a tied score. Let's throw the dice again!");
    outcomeElement.append("Alas, a tied score. Let's throw the dice again!");
}


/*
MAIL

Chiedi all'utente la sua email 
controlla che sia nella lista di chi può accedere
stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
si ma noi cosa vogliamo fare?
torniamo a scrivere in italiano
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
*/

//lista email
const emailList = [];

//finte mail
emailList.push('vega@gmail.com');
emailList.push('arturo@gmail.com');
emailList.push('sirio@gmail.com');
emailList.push('altair@ogmail.com');
emailList.push('deneb@gmail.com');
emailList.push('bellatrix@gmail.com');
emailList.push('antares@gmail.com');
emailList.push('betelgeuse@gmail.com');
emailList.push('rigel@gmail.com');

//definisco la costante per il bottone perché voglio al click voglio generare una reazione
const buttonElement = document.querySelector("button[type='submit']");
console.log(buttonElement);

const formElement = document.querySelector('form');

//al click del bottone voglio una reazione
buttonElement.addEventListener ('submit', function (e) {
    //prevengo il comportamento di default del buttone submit, perciò prevengo il refresh della pagina
    e.preventDefault();
})

const emailElement = document.getElementById('email');
const userEmail = emailElement.value;
let emailCheck

//l'email è presente in lista?vediamo.

if (emailList.includes(userEmail)) {
    emailCheck = `welcome back ${userEmail}! Take your time`;
    console.log(`user ${userEmail} is rightfully here`);
} else {
    emailCheck = `You shall not pass!Sorry, not sorry`;
    console.log(`Warning, ${userEmail} shouldn't be here`);
}

 //scrivo in pagina il risultato della ricerca
 const emailCheckElement = document.getElementById('email_check');
 console.log(emailCheckElement);
 emailCheckElement.innerHTML = " ";
 emailCheckElement.append(emailCheck);
