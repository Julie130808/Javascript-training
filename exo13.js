let collection = [
    {
        titre: "Space Adventure",
        anneeSortie: 1984,
        scores: [85, 87, 90, 78, 88]
    },
    {
        titre: "Castle Quest",
        anneeSortie: 1990,
        scores: [92, 91, 89, 95, 94] 
    },
    {
        titre: "Jungle Journey",
        anneeSortie: 2021,
        scores: [88, 90, 85, 87, 89] 
    },
];

collection.forEach ((jeu, index) => {
    if (index === 0) {
    console.log(`Titre : ${jeu.titre}`);
    console.log(`Année de sortie : ${jeu.anneeSortie}`); 
    console.log(`Scores : ${jeu.scores}`);
}
});

collection.forEach ((jeu) => {
    console.log(`Titre : ${jeu.titre}`);
    console.log(`Année de sortie : ${jeu.anneeSortie}`); 
    console.log(`Scores : ${jeu.scores}`);
});

const scoresJeu1 = collection [0].scores;

const moyenneScoresJeu1 = scoresJeu1.reduce ((total, scores) => total + scores, 0) / scoresJeu1.length;
console.log("Score moyen du jeu Space Adventure : ", moyenneScoresJeu1);

const totalscores = collection.reduce ((total, jeu) => {
    return total + jeu.scores.reduce ((t, s) => t + s, 0);
}, 0);

const nbrscores = collection.reduce ((total, jeu) => {
    return total + jeu.scores.length;
}, 0);

const moyenneJeux = totalscores / nbrscores;
console.log("Score moyen de la collection : ", moyenneJeux);