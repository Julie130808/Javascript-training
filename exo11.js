let jeu1 = {
    Titre : "Mario64",
    AnnéeDeSortie : 1993,
    Genre : "Ludique", 
    Score : 98,
    afficherJeu () {
        console.log(`Le titre est : ${this.Titre}, l'Année de sortie est : ${this.AnnéeDeSortie}, le Genre est : ${this.Genre}, le Score est de : ${this.Score}.`);
    },
    getPopularite () {
        return (this.Score*this.AnnéeDeSortie)/100
    },
    }


let jeu2 = {
    Titre : "Résident Evil",
    AnnéeDeSortie : 1983,
    Genre : "Horreur", 
    Score : 90,
    afficherJeu () {
        console.log(`Le titre est : ${this.Titre}, l'Année de sortie est : ${this.AnnéeDeSortie}, le Genre est : ${this.Genre}, le Score est de : ${this.Score}.`);
    },
    getPopularite () {
        return (this.Score*this.AnnéeDeSortie)/100
    },
}

jeu1.afficherJeu ();
jeu2.afficherJeu ();

if (jeu1.getPopularite () > jeu2.getPopularite ()) {
    console.log("Le jeu le plus populaire est : ");
    jeu1.afficherJeu ();
    console.log("Sa popularité est de : " + jeu1.getPopularite ());
    
} else {
    console.log("Le jeu le plus populaire est : ");
    jeu2.afficherJeu ();
    console.log("Sa popularité est de : " + jeu2.getPopularite ());
    
}