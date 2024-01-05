/*
 This below form changed in this commit for validate the form after first submission
 it will show errors as soon the input will change. and from previous we removed the emailError to normal variable not the state, because it will render each time the component when the input got changed.
*/

import {useState} from 'react'
import {findEmailError,findPasswordError} from './Validator.js'
export default function StateForm() {
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [isFirstSubmit, setIsfirstSubmit] = useState(false)
        
        const emailError = isFirstSubmit  ?  findEmailError(email) : []
        const passwordError = isFirstSubmit ?  findPasswordError(password) : []
         

        function Submit(e){
          e.preventDefault()
          setIsfirstSubmit(true)
          const emailErrorDetails = findEmailError(email)
          const passwordErrorDetails = findPasswordError(password)
          if(emailErrorDetails.length === 0  && passwordErrorDetails.length  === 0 ){
                alert("Success in validation")
            }
        }

    return (
        <>
           <form className="form" onSubmit={Submit}>
          <div className={`form-group ${emailError.length>0 ? 'error' : ''}`}>
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" value={email} onChange={e => setEmail(e.target.value)}  />
           {emailError.length>0 && <div className="msg"> {emailError.join(", ")}</div> } 
          </div>
          <div className={`form-group ${passwordError.length>0 ? 'error' : ''}`}>
            <label className="label" htmlFor="password">Password</label>
            <input
              className="input"
              value={password}
              type="password"
              id="password"
              onChange={e => setPassword(e.target.value)} 
            />
            {passwordError.length>0 && <div className="msg"> {passwordError.join(", ")}</div> } 
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
        </>
      )
}

