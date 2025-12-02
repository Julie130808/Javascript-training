const F = 98.6;

//Première possibilité
// const C = (F-32) * 5/9
// console.log(C);

//Deuxième possibilité
// function FtoC () {
//     console.log((F-32) * 5/9);
// }
// FtoC ();

//Troisième possibilité
// function FtoC (Value) {
//     console.log((Value-32) * 5/9);
// }
// FtoC (98.6);

//Quatrième possibilité
// function FtoC (F) {
//     if (typeof F !== "number") {
//        console.log("Entrez un nombre");
        
//     } else {
//         console.log((F-32) * 5/9);
//     }
// }
// FtoC (98.6);

//Cinquième possibilité
import readlineSync from 'readline-sync';

const temperature = Number(readlineSync.question('Quel temperature ? nombre : '));

console.log(typeof temperature);


function fToC( F, symbol ){
  if (typeof F !== "number") {
    console.log("ERREUR");
  } else {
    console.log( `${(F - 32) * 5 / 9} ${symbol}` );
  }
}
fToC (98.6, '°');