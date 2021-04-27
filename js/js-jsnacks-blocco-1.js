
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

let total = 0;
for (var i = 0; i < 10; i++) {
    let numberUtent = Number(prompt('give me a number'));
    console.log(numberUtent);
    total += numberUtent;
    console.log(total, numberUtent);
}

// versione while

var i = 0;
var total = 0;
while (i < 10) {
    let numberUtent = Number(prompt('give me a number'));
    console.log(numberUtent);
    total += numberUtent;
    i++
    console.log(total, numberUtent, i);
};

// versione DO while

let total = 0;
var i = 0;

do {
    let numberUtent = Number(prompt('give me a number'));
    total += numberUtent;
    i++;
    console.log(total, numberUtent, i);

} while (i < 3);
