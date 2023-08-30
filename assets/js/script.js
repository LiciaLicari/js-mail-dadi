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


/*
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

//form btn
const button = document.getElementById('submit');

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


//schiaccio il bottone 
button.addEventListener('click', function () {
    //user email?
    const userEmail = document.getElementById('email').value;
    let canAccess = false;

    //loop
    for (let i = 0; i < emailList.length; i++) {
        const thisUserEmail = emailList[i];
        console.log(thisUserEmail);

        if (thisUserEmail === userEmail) {
            canAccess = true;
        }
    };

    //console.log(canAccess);

    if (canAccess === true) {
        console.log('You are in!');
        document.getElementById('email_check').innerHTML = 'You are in!'
    } else {
        console.log('You are an intruder');
        document.getElementById('email_check').innerHTML = 'You are an intruder'
    };
});
