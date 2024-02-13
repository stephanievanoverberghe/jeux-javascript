// Sélectionner les éléments du DOM
const userAttempt = document.querySelector('.js--user-attempt');
const insertNumber = document.querySelector('.insert__number');
const checkButton = document.querySelector('.js--btn-check');
const hint = document.querySelector('.js--hint');

let numberSecret = Math.floor(Math.random() * 101);

/**
 * Cette fonction lance le jeu
 * Elle demande à l'utilisateur d'entrer un nombre et lance la boucle de jeu
 */
export function lancerJeu() {

    /**
     * Cette fonction permet d'initialiser le jeu à zero
     */
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

    /**
     * Cette fonction est le coeur du jeu,
     * c'est la boucle qui gère les erreurs, ainsi que la partie
     * @returns number
     */
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

    /**
     * Cette fonction permet d'utiliser la touche Enter pour valider le nombre
     * @param {key} event 
     */
    function numberKeypress(event) {
        if (event.key === 'Enter') {
            checkNumber();
        }
    }

    initJeu();
}