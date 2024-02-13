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
const insertNumber = document.querySelector('.insert__number');
const checkButton = document.querySelector('.js--btn-check');
const hint = document.querySelector('.js--hint');

// Écouteur d'événement sur le bouton "Vérifier"
let numberSecret = Math.floor(Math.random() * 101);

export function lancerJeu() {

    function initJeu() {
        numberSecret = Math.floor(Math.random() * 101);
        userAttempt.disabled = false;
        userAttempt.value = '';
        hint.textContent = '';
        hint.classList.remove("information")
        insertNumber.textContent = "Insèrez un numéro ci-dessous";
        checkButton.textContent = "Vérifiez";
        checkButton.addEventListener('click', checkNumber);
        userAttempt.addEventListener('keypress', numberKeypress);
    }

    function checkNumber() {
        // Récupération et conversion de la tentative de l'utilisateur
        let devine = parseInt(userAttempt.value, 10);
        // Vérification de la validité de l'entrée
        if (!Number.isInteger(devine) || devine < 0 || devine > 100 || isNaN(devine)) {
            hint.textContent = "Veuillez entrer un nombre valide entre 0 et 100.";
            hint.classList.add("information");
            hint.style.color = 'rgb(255, 0, 0)';
            hint.style.borderColor = 'rgb(255, 0, 0)';
            return;
        } else if (devine === numberSecret) {
            hint.textContent = `Félicitation ! Vous avez deviné le nombre. Le nombre secret est : ${numberSecret}`;
            hint.classList.add("information");
            hint.style.color = 'rgb(53, 196, 13)';
            hint.style.borderColor = 'rgb(53, 196, 13)';
            insertNumber.textContent = "";
            userAttempt.disabled = true;
            checkButton.textContent = 'Rejouez';
            // Modifier les écouteurs pour rejouer
            checkButton.removeEventListener('click', checkNumber);
            checkButton.addEventListener('click', initJeu);
        } else {
            hint.textContent = devine > numberSecret ? "C'est moins" : "C'est plus";
            hint.classList.add("information");
            hint.style.color = 'rgb(231, 228, 216)';
            hint.style.borderColor = 'rgb(231, 228, 216)';
            insertNumber.textContent = "Réessayez avec un autre numéro";
        }
        userAttempt.value = '';
    }

    function numberKeypress(event) {
        if (event.key === 'Enter') {
            checkNumber();
        }
    }

    initJeu();
}