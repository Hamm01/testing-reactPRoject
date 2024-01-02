import {useRef, useState} from 'react'
import {findEmailError,findPasswordError} from './Validator.js'

export default function RefForm() {
  
  const inputEmailRef = useRef()
  const inputPasswordRef = useRef()
  
  
  const [emailError,setEmailError] = useState([])
  const [passwordError,setPasswordError] = useState([])
  const [isAfterFirstSubmit, setisAfterFirstSubmit] = useState(false)

  
  function Submit(e){
    e.preventDefault()
    setisAfterFirstSubmit(true)
    const emailErrorDetails = findEmailError(inputEmailRef.current.value)
    const passwordErrorDetails = findPasswordError(inputPasswordRef.current.value)
      
    setEmailError(emailErrorDetails)
    setPasswordError(passwordErrorDetails)
    
    if(emailErrorDetails.length === 0  && passwordErrorDetails.length  === 0 ){
          alert("Success in validation")
      }
  }
    
    

return (
  <>
     <form className="form" onSubmit={Submit}>
    <div className={`form-group ${emailError.length>0 ? 'error' : ''}`}>
      <label className="label" htmlFor="email">Email</label>
      <input className="input" type="email" id="email" ref={inputEmailRef} onChange={isAfterFirstSubmit && ((e) => setEmailError(findEmailError(e.target.value)))} />
     {emailError.length>0 && <div className="msg"> {emailError.join(", ")}</div> } 
    </div>
    <div className={`form-group ${passwordError.length>0 ? 'error' : ''}`}>
      <label className="label" htmlFor="password">Password</label>
      <input
        className="input"
        type="password"
        id="password"
        ref={inputPasswordRef}
        onChange={isAfterFirstSubmit && ((e) => setPasswordError(findPasswordError(e.target.value)))}
      />
      {passwordError.length>0 && <div className="msg"> {passwordError.join(", ")}</div> } 
    </div>
    <button className="btn" type="submit">Submit</button>
  </form>
  </>
)
}
