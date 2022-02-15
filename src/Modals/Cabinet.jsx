class User {

    constructor(nom = '', prenom ='', specialite='', CIN='', Tel='', email='', login='', password='', adresse=''){

        this.nom = nom;
        this.prenom = prenom;
        this.specialite = specialite;
        this.CIN = CIN;
        this.Tel = Tel;
        this.email = email;
        this.login = login;
        this.password = password;
        this.adresse = adresse;

    }
}

export default User;