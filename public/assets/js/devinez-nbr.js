/**
 * Débutant : Devinez le Nombre entre 0 et 100
 * 
Objectif : Écrire un programme qui demande à l'utilisateur de deviner un nombre secret entre 0 et 100. Si l'utilisateur devine le nombre correctement, 
affichez un message de félicitations. Sinon, indiquez si le nombre secret est plus grand ou plus petit.

Consignes :

1 - Générer un nombre secret aléatoire entre 0 et 100.
2 - Demander à l'utilisateur de deviner le nombre.
3 - Utiliser une boucle pour répéter la demande jusqu'à ce que l'utilisateur trouve le bon nombre.
3 - Utiliser une pour vérifier si le nombre entré par l'utilisateur correspond au nombre secret.
4 - Si c'est correct, afficher "Félicitations ! Vous avez deviné le nombre.".
5 - Sinon, afficher "Désolé, essayez encore. Le nombre secret est plus [grand/petit].".
6 - Tester votre programme en entrant différents nombres.
7 - Gérer les entrées non valides.
*/


const numberSecret = Math.floor(Math.random() * 101); 
let devine = null;

while (devine !== numberSecret) {
    let inputPrompt = prompt("Devinez le nombre entre 0 et 100 : ");
    devine = parseInt(inputPrompt, 10);

    if (!Number.isInteger(devine) || devine < 0 || devine > 100 || isNaN(devine)) {
        console.log("Veuillez entrer un nombre valide entre 0 et 100.");
      }

    if (devine === numberSecret) {
            console.log(`Félicitation ! Vous avez deviné le nombre. Le nombre secret est : ${numberSecret}`);
    } else if (devine > numberSecret) {
        console.log("Désolé, essayez encore, le nombre secret est plus petit.");
    } else {
        console.log("Désolé,essayez encore, le nombre secret est plus grand.");
    }
}


