let inventaire = ["manette", "Xbox", "Ps5", "GameCube", "câble"]

inventaire.push ("Xbox360", "USB")
console.log(inventaire);

inventaire.shift ()
console.log(inventaire);


inventaire.forEach (articles => 
{ console.log("Voici les articles : " + articles);
})