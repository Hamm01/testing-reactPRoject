export function findEmailError(email){
    const Errors =[]
    if(email.length === 0){
     Errors.push("Required")   
    }
    if(!email.endsWith('hotmail.com')){
        Errors.push("Ends with hotmail.com" )   
   
      }
    return Errors
  }
  export function findPasswordError(password){
    const Errors =[]
      if(password.length < 10){
        Errors.push("Must Be 10 characters or longer") 

     }
      if(!password.match(/[a-z]/)){
        Errors.push("Must include a lowercase letter")
        }
      if(!password.match(/[A-Z]/)){
        Errors.push("Must include a uppercase letter")
         
      }
      if(!password.match(/[0-9]/)){
        Errors.push("Must include a number")
         
      }
      return Errors
  
}