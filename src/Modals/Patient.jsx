export class Patient{


    constructor(Nom='', prénom='', Civilité='', CIN='', Date_naissance , Tel ='', Situation_familiale = '', Adresse ='', Email='', Mutuelle = '', Avatar = '',
    login = '', password = '', Poids = 0, Taille = 0, Maladie_chronique = '', Groupe_sanguin = '', Maladie_infectueuse = '', Allergie = '', 
    Habitude_toxique = '', Chirurgie_antérieure = '', Maladie_héréditaire = '', Autre_antécédants = '', id = null
    
    ){

        this.Nom  = Nom ;
        this.prénom = prénom;
        this.Civilité = Civilité;
        this.CIN = CIN;
        this.Date_naissance  = Date_naissance ;
        this.Tel  = Tel ;
        this.Situation_familiale = Situation_familiale;
        this.Adresse   = Adresse  ;
        this.Email  = Email ;
        this.Mutuelle  = Mutuelle ;
        this.Avatar   =  Avatar  ;
        this.login = login;
        this.password = password;
        this.Poids  =  	Poids;
        this.Taille  = Taille ;
        this.Maladie_chronique = Maladie_chronique;
        this.Groupe_sanguin = Groupe_sanguin;
        this.Maladie_infectueuse   = Maladie_infectueuse  ;
        this.Allergie   = Allergie  ;
        this.Habitude_toxique  = Habitude_toxique ;
        this.Chirurgie_antérieure   = Chirurgie_antérieure ;
        this.Maladie_héréditaire   = Maladie_héréditaire  ;
        this.Autre_antécédants  = Autre_antécédants ;
        this.id = id


    }


}

