function creerJeu (titre, anneeSortie, genre) {
    return {
        titre: titre,
        anneeSortie: anneeSortie,
        genre: genre, 
    };
}

const jeuxRetro = [
    creerJeu("Space Adventure", 1984, "Arcade"),
    creerJeu("Castle Quest", 1990, "Aventure"),
    creerJeu("Mystery Island", 1989, "Puzzle"),
]

const jeuxModerne = [
    creerJeu("Robot Wars", 2020, "Action"),
    creerJeu("Jungle Journey", 2021, "Aventure"),
    creerJeu("Racing rush", 2022, "Course"),
    creerJeu("Pirate's Treasure", 2021, "RPG"),
]

jeuxRetro.forEach ((jeu) => {
    console.log(`Titre : ${jeu.titre}`);
    console.log(`Année de sortie : ${jeu.anneeSortie}`); 
    console.log(`Genre : ${jeu.genre}`);
}
)

const moyenneRetro = jeuxRetro.reduce ((total, jeu) => {
    return total + jeu.anneeSortie;
}, 0) / jeuxRetro.length;

const moyenneArrondie = moyenneRetro.toFixed(2);
console.log("La moyenne des années de sortie des jeux rétro est :", moyenneArrondie);

jeuxModerne.forEach ((jeu) => {
    console.log(`Titre : ${jeu.titre}`);
    console.log(`Année de sortie : ${jeu.anneeSortie}`); 
    console.log(`Genre : ${jeu.genre}`);
}
)

const moyenneModerne = jeuxModerne.reduce ((total, jeu) => {
    return total + jeu.anneeSortie;
}, 0) / jeuxModerne.length;
console.log("La moyenne des années de sortie des jeux moderne est :", moyenneModerne);