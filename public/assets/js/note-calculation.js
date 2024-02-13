
// Sélectionner éléments du DOM
const numberUser = document.querySelector('.js--number-user');
const convertButton = document.querySelector('.js--btn-convert');
const result = document.querySelector('.js--result');

let note = '';

export function lancerJeuNoteCalculation() {

    function initJeuNote() {
        note = '';
        numberUser.disabled = false;
        numberUser.value = '';
        result.textContent = '';
        result.classList.remove("information")
        convertButton.textContent = "Convertir";
        convertButton.addEventListener('click', numberNote);
        numberUser.addEventListener('keypress', numberKeypressNote);
    }

    function resultStyles(color, borderColor, message) {
        result.textContent = message;
        result.classList.add("information");
        result.style.color = color;
        result.style.borderColor = borderColor;
    }

    function numberNote() {
        note = parseInt(numberUser.value, 10);

        if (!Number.isInteger(note) || note < 0 || note > 100 || isNaN(note)) {
            resultStyles('rgb(255, 0, 0)', 'rgb(255, 0, 0)', "Veuillez entrer une note valide entre 0 et 100.");
            return;
        } else {
            let noteText = "Votre note est ";
            const gradeMapping = {
                A: [90, 100, "A - Félicitation"],
                B: [80, 89, "B - Très bien"],
                C: [70, 79, "C - Bien"],
                D: [60, 69, "D"],
                E: [50, 59, "E - Moyen"],
                F: [0, 49, "F - Peut mieux faire"]
            };

            // Trouver la tranche de notes correspondante
            for (const [grade, [min, max, message]] of Object.entries(gradeMapping)) {
                if (note >= min && note <= max) {
                    noteText += message;
                    break;
                }
            }
            resultStyles('rgb(53, 196, 13)', 'rgb(53, 196, 13)', noteText);
            numberUser.disabled = true;
            convertButton.textContent = 'Reconvertir une note';
            convertButton.removeEventListener('click', numberNote);
            convertButton.addEventListener('click', initJeuNote, { once: true });
        }
    }

    convertButton.addEventListener('click', numberNote);

    function numberKeypressNote(event) {
        if (event.key === 'Enter') {
            numberNote();
        }
    }

    initJeuNote();

}

lancerJeuNoteCalculation();
