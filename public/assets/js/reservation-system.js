/**
 * Gestion d'un Système de Réservation
 * 
Objectif : Créer un script pour gérer les réservations d'une petite bibliothèque. Les utilisateurs peuvent 
réserver des livres s'ils sont disponibles et annuler leurs réservations. Gérez également une liste 
d'attente si un livre est déjà réservé.

Consignes :

1 - Créer un objet bibliotheque contenant des paires clé/valeur où les clés sont les noms des livres et les 
valeurs sont des objets contenant les propriétés disponible (booléen) et listeAttente (tableau 
    d'utilisateurs en attente).

2 - Écrire une fonction reserverLivre(nomDuLivre, utilisateur) qui vérifie si le livre est disponible. Si 
oui, le marque comme indisponible et affiche un message de confirmation. Sinon, ajoute l'utilisateur à la 
liste d'attente.

3 - Écrire une fonction annulerReservation(nomDuLivre, utilisateur) qui annule la réservation d'un livre 
et, si une liste d'attente existe, attribue le livre au premier utilisateur en liste d'attente.

4 - Utiliser des conditions complexes et la gestion des objets pour contrôler la logique de réservation et 
d'annulation.

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