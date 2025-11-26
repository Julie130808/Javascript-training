const nom_magasin = "pixelBay ";
let jeux_vendus = 50;
if (jeux_vendus>100) {
    console.log(nom_magasin + "organise une grande promotion");
} else if (jeux_vendus<=100 && jeux_vendus>=50) {
    console.log(nom_magasin + "effectue une réorganisation de l'espace de vente");
} else {
    console.log(nom_magasin + "lance une campagne de publicité");
}