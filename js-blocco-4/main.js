/**********************************
FARE NUOVA CARTELLA SNAKS BLOCCO 4*
**********************************/

/*******
SNAKS-1*
*******/
/*
creare un oggetto palla che abbia le seguenti propriet√†.
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
// attraverso un prompt dare la possibilit√† all'utente
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
Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti propriet√†: base e altezza.
Calcolare perimetro e area.
(ripassiamo il Teorema di Pitagora ;D )
*/

var TriangoloRett = {
    base : 2,
    altezza : 5
};

var base = TriangoloRett.base;
var altezza = TriangoloRett.altezza;
TriangoloRett.area = (base * altezza) / 2;

var ipotenusa = Number(Math.pow(2,base)) + Number(Math.pow(2,altezza));
console.log('ipotenusa ' + Math.sqrt(ipotenusa));
TriangoloRett.perimetro = base + altezza + Math.sqrt(ipotenusa);
console.log(TriangoloRett);
