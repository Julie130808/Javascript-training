// import readlineSync from 'readline-sync';
// const nom = readlineSync.question('Quel est votre nom ? ');
// console.log('Bonjour, ' + nom + ' !');

const nom_magasin = "PixelBay"
console.log(nom_magasin);
let stock = 500;
console.log(stock);
let newstock = 500 - (30*500)/100;
console.log(newstock);
let prix = 15
console.log(prix);
let CA = newstock * prix
console.log(CA);
console.log("Nom de la boutique :" + nom_magasin + ", stock de départ :" + stock + ", nouveau stock :" + newstock + ", revenus de la vente :" + CA);
