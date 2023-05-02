export default class Booking {
  /**
   * Constructeur
   * @constructor
   *
   * @param {String} id         - Identifiant de la location
   * @param {String} rentDate   - Date de location
   * @param {String} returnDate - Date de retour
   * @param {String}   book       - Elément loué, book id
   * @param {String}   user       - Utilisateur qui loue l'élément, user id
   */
  constructor(id, rentDate, returnDate, book, user) {
    this.id         = id;
    this.rentDate   = rentDate;
    this.returnDate = returnDate;
    this.book       = book;
    this.user       = user;
  }
}
