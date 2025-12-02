function promotionEté (prixJeu) {
    return prixJeu = ((prixJeu*80)/100)
}
function promotionHiver (prixJeu) {
    return prixJeu = ((prixJeu*70)/100)
}
function promotionSpéciale (prixJeu, réduction){
    return prixJeu = ((prixJeu*réduction)/100)
}
let prixJeu = 50;
console.log(`Pendant la promotion été le jeu coute : ${promotionEté (prixJeu)} €`);
console.log(`Pendant la promotion hiver le jeu coute : ${promotionHiver (prixJeu)} €`);
console.log(`Pendant la promotion spéciale le jeu coute : ${promotionSpéciale (prixJeu, 50)} €`);