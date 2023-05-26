export default class User {
    /**
   * Constructeur
   * @constructor
   *
   * @param {Number} id - Id
   * @param {String} lastName - Nom de famille
   * @param {String} firstName - Prénom
   * @param {String} birthDate - Date de naissance utilisateurice
   * @param {String} address - Adresse postale utilisateurice
   * @param {String} phone - Téléphone utilisateurice
   * @param {String} email - Email utilisateurice
   */

    constructor(id, lastName, firstName, birthDate, address, phone, email) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
}