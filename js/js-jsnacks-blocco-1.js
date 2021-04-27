
/*****************************
QUARTA LEZIONE SNACK BLOCCO 1*
*****************************/

// PRIMO ESERCIZIO
// l'utente inserisce due numeri in successione con due prompt
/*
let first = Number(prompt('dammi un numero'));
let second = Number(prompt('dammi un\'altro numero'));
// il software stampa il maggiore

if (first > second) {
    console.log(first + ' più grande di ' + second);
} else if(first < second) {
    console.log(second + ' più grande di ' + first);

}else {
    console.log(first + ' i numeri sono uguali ' + second);
};
*/

//SECONDO ESERCIZIO
// L’utente inserisce due parole in successione, con due prompt.
/*
let firstWord = prompt('dammi una parola');
let secondWord = prompt('dammi un\'altra parola');
console.log(firstWord, secondWord);
// Il software stampa prima la parola più corta, poi la parola più lunga.
let firstLng = firstWord.length;
let secondLng = secondWord.length;
console.log('la prima parola è lunga ' + firstLng + ' la seconda parola è linga ' + secondLng);

if (firstLng > secondLng) {
    console.log('la prima parola e più lunga' + firstLng);
} else if(firstLng < secondLng){
    console.log('la seconda parola e più lunga ' + secondLng);

}else {
    console.log('le parole sono lunghe uguali');
}
*/

//TERZO ESERCIZIO
//Il software deve chiedere per 10 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.

// versione for
/*
let total = 0;
for (var i = 0; i < 10; i++) {
    let numberUtent = Number(prompt('give me a number'));
    console.log(numberUtent);
    total += numberUtent;
    console.log(total, numberUtent);
}
*/

// versione while
/*
var i = 0;
var total = 0;
while (i < 10) {
    let numberUtent = Number(prompt('give me a number'));
    console.log(numberUtent);
    total += numberUtent;
    i++
    console.log(total, numberUtent, i);
};
*/

// versione DO while
/*
let total = 0;
var i = 0;

do {
    let numberUtent = Number(prompt('give me a number'));
    total += numberUtent;
    i++;
    console.log(total, numberUtent, i);

} while (i < 3);
*/


/******************
//QUARTO ESERCIZIO*
******************/

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const listNameGatsby = ['anna', 'ariel', 'michele', 'john', 'stephen'];
console.log(listNameGatsby);

let nameUtentGatsby = prompt('give me your name');

let present = false;

for (var i = 0; i < listNameGatsby.length; i++) {
    let nameInList = listNameGatsby[i];

    if (nameUtentGatsby === nameInList) {
        present = true;
    }
}

if (present) {
    console.log('ok puoi entrare sei nella lista');
}else {
    console.log('non sei nella lista mi dispiace');
}

// seconda versione

if (listNameGatsby.includes(nameUtentGatsby)) {
    console.log('ok puoi entrare sei nella lista');

}else {
    console.log('non sei nella lista mi dispiace');


}

/******************
//QUINTO ESERCIZIO*
******************/

//Crea un array vuoto.
// chiedi per 6 volte all'utente di inserire un numero.
// se è dispari inseriscilo nell'array

var listNumber = [];
console.log(listNumber);
for (var i = 0; i < 6; i++) {

    var numberUtente = prompt('dammi un numero');
        console.log(numberUtente);

    if (numberUtente % 2 == 1) {
        listNumber.push(numberUtente);
        console.log(listNumber, 'questo numero è dispari quindi entra ' + numberUtente);
    }else {
        console.log(numberUtente + ' questo numero è pari, quindi non entra');
    }
}
