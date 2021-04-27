
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
    console.log('la seconda parola e più lunga' + secondLng);

}else {
    console.log('le parole sono lunghe uguali');
}
