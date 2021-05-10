/**********************************
FARE NUOVA CARTELLA SNAKS BLOCCO 4*
**********************************/

/*******
SNAKS-1*
*******/
/*
creare un oggetto palla che abbia le seguenti proprietà.
nome = palla;
peso = 10;
*/
/*
var PallaOgg = {
    nome : 'palla',
    peso : 10,
};
*/
/*******
SNAKS-2*
*******/
// attraverso un prompt dare la possibilità all'utente
// di modificare il peso della palla
/*
var nuovoPeso = Number(prompt('dimmi un peso'));
console.log(nuovoPeso);
PallaOgg.peso = nuovoPeso;//sintassi 1
PallaOgg[peso] = nuovoPeso;//sintassi 2
PallaOgg.nuovoPeso = Number(prompt('dimmi un peso'));//sintassi 3
console.log(PallaOgg);
*/
/*******
SNAKS-3*
*******/
/*
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D )
*/

var TriangoloRett = {
    base : 2,
    altezza : 10
};

var base = TriangoloRett.base;
var altezza = TriangoloRett.altezza;

var area = (base * altezza) / 2;
console.log('l\'oggetto ' + TriangoloRett + ' la base ' +  base + ' l\altezza ' + altezza + ' il risultato ' + area);
