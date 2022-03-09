export const Uservalidation = (e) =>{

  // FirstName
  if (NewUser.nom.length < 4 || NewUser.nom.length > 20) {
    return "le nom doit contenir entre 4 et 20 caractéres";
  
  }

  //LastName
  if (NewUser.prenom.length < 4 || NewUser.prenom.length > 20) {
    return "le prénom doit contenir entre 4 et 20 caractéres";
  }

  //LastName
  if (NewUser.login.length < 8) {
    return "login doit contenir plus de 8 caractéres";  
  }

  //PassWord
  let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

  if (pattern.test(NewUser.password) === false) {
    return
      "Le mot de passe doit contenir au moin 8 caractéres, une lettre majiscule, une miniscule, un nombre et un caractére spécial";
    }

  //Username Email
  let pattern_email =
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (pattern_email.test(NewUser.email) === false) {
    return "Email doit être commz suit : Example@Example.com";
  }

  var pattern_tel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (pattern_tel.test(NewUser.tel) === false) {
    return "Vous devez entrer un numero de téléphone valide";
  }

};

export const loginvalidation = (username, password) => {

  if(username === "" || password === ""){

    return " vous devez donner des informations valide"
  }

   //LastName
   if (username.length < 8) {
    return "login doit contenir plus de 8 caractéres";
  }

  //PassWord
  let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

  if (pattern.test(password) === false) {
   return
      "Le mot de passe doit contenir au moin 8 caractéres, une lettre majiscule, une miniscule, un nombre et un caractére spécial";
    }

}