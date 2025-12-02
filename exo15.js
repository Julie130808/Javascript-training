import readlineSync from 'readline-sync'

const annee = readlineSync.question("Veuillez entrer une annee : ");

function isBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)){
        console.log(annee, "est une année bisextile.");
    }
    else {
        console.log( annee, "n'est pas une année bisextile.");
    }
}
isBissextile (annee);