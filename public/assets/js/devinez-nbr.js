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


// Sélectionner les éléments du DOM
const userAttempt = document.querySelector('.js--user-attempt');
const checkButton = document.querySelector('.js--btn-check');
const hint = document.querySelector('.js--hint');

// Générer un nombre secret aléatoire
const numberSecret = Math.floor(Math.random() * 101);

// Écouteur d'événement sur le bouton "Vérifier"
checkButton.addEventListener('click', () => {
    // Récupération et conversion de la tentative de l'utilisateur
    let devine = parseInt(userAttempt.value, 10);
    // Vérification de la validité de l'entrée
    if (!Number.isInteger(devine) || devine < 0 || devine > 100 || isNaN(devine)) {
        hint.textContent = "Veuillez entrer un nombre valide entre 0 et 100.";
        return;
    }
    // Comparaison de la tentative avec le nombre secret
    if (devine === numberSecret) {
        hint.textContent = `Félicitation ! Vous avez deviné le nombre. Le nombre secret est : ${numberSecret}`;
    } else if (devine > numberSecret) {
        hint.textContent = "Désolé, essayez encore, le nombre secret est plus petit.";
    } else {
        hint.textContent = "Désolé, essayez encore, le nombre secret est plus grand.";
    }

});


