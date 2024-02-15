/**
 * Gestion d'un Système de Réservation
 * 
Objectif : Créer un script pour gérer les réservations d'une petite bibliothèque. Les utilisateurs peuvent 
réserver des livres s'ils sont disponibles et annuler leurs réservations. Gérez également une liste 
d'attente si un livre est déjà réservé.

Consignes :

5 - Tester le système avec plusieurs scénarios de réservation et d'annulation.
 */


// Objet contenant les livres
let library = {
    "Le Petit Prince": { disponibility: true, waitingList: [] },
    "Harry Potter à l'école des sorciers": { disponibility: true, waitingList: [] },
    "Les aventures d'Alice au pays des merveilles": { disponibility: true, waitingList: [] },
    "Da Vinci Code": { disponibility: true, waitingList: [] },
    "Réfléchissez et devenez riche": { disponibility: true, waitingList: [] },
};

/**
 * Fonction qui vérifie si le livre est diponible. Si oui, le marqué comme indisponible et affiche le 
 * message de confirmation.
 * Si non, ajoute l'utilisateur à la liste d'attente
 * 
 * @param {string} nameBook 
 * @param {string} user 
 */
function reserveBooks(nameBook, user) {
    let book = library[nameBook];
    if (book.disponibility) {
        book.disponibility === false;
        console.log(`La réservation du livre "${nameBook}" par ${user} a été effectué avec succès.`);
    } else {
        book.waitingList.push(user);
        console.log(`Le livre "${nameBook}" est actuellement indisponible. ${user} a été ajouter à la liste d'attente.`);
    }
}

/**
 * Fonction qui annule la réservation d'un livre.
 * Si une liste d'attente existe, attribue le livre au premier utilisateur en liste d'attente.
 * 
 * @param {string} nameBook 
 * @param {string} user 
 */
function cancelReservation(nameBook, user) {
    let book = library[nameBook];
    if (!book.disponibility && book.waitingList.length > 0) {
        if (book.waitingList.includes(user)) {
            book.waitingList = book.waitingList.filter(u => u !== user);
            console.log(`Le réservation du livre "${nameBook}" a été annulé par ${user}.`);
            if (book.waitingList.length > 0) {
                let nextUser = book.waitingList.shift();
                console.log(`Le livre "${nameBook}" est maintenant reservé pour ${nextUser}.`);
            } else {
                book.disponibility === true;
            }
        } else {
            console.log(`Aucune réservation trouvée pour ${user} sur le livre "${nameBook}".`);
        }
    } else {
        book.disponibility === true;
        console.log(`La réservation du livre "${nameBook}" a été annulé et le livre est maintenant disponible.`);
    }
}