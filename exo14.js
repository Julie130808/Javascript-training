let collection = [
    {
        titre: "Space Adventure",
        anneeSortie: 1984,
        genre: "Arcade",
        scores: [85, 87, 90, 78, 88]
    },
    {
        titre: "Castle Quest",
        anneeSortie: 1990,
        genre: "Aventure",
        scores: [92, 91, 89, 95, 94] 
    },
    {
        titre: "Jungle Journey",
        anneeSortie: 2021,
        genre: "Aventure",
        scores: [88, 90, 85, 87, 89] 
    },
];

const jeuxRecents = collection.filter (jeu => jeu.anneeSortie>2000);
console.log("Jeux sortis aprés 2000 : ", jeuxRecents);

const jeuxAventure = collection.filter (jeu => jeu.genre==="Aventure");
console.log("Jeux de genre 'Aventure' : ", jeuxAventure);