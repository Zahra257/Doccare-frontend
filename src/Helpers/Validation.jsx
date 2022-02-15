export default validation = (e) =>{

    e.preventDefault()

    // FirstName
    if (Doctor.nom.length < 4 || Doctor.nom.length > 20) {
        return "<h1>firstname should contain from 4 to 20 caracters</h1>"
      }
  
      //LastName
      if (Doctor.prénom.length < 4 || Doctor.prénom.length > 20) {
        return "<h1>lastname should contain from 4 to 20 caracters</h1>"
        
      }

       //LastName
       if (Account.login.length < 8 ) {
        return "<h1>login should be more than 8 caracter</h1>"
        
        }

      //PassWord
      let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/
  
      if ( pattern.test(Account.password) === false ) {
          
        return "<h1>The password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character</h1>"
        
      }
  
      //Username Email
      let pattern_email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  
     if ( pattern_email.test(Cabinet.email) === false  ) {
          
            return "<h1>Email Should be like : Example@Example.com</h1>"
        
      }

      var pattern_tel = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
      
      if ( pattern_tel.test(Cabinet.tel) === false  ) {
          
        return "<h1>You should enter a valide phone format</h1>"
    
      }



}