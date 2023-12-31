import { useState } from "react"
import "./styles.css"
function App() {
  

  return (
    <>
       <form className="form">
      <div className="form-group error">
        <label className="label" for="email">Email</label>
        <input className="input" type="email" id="email" value="test@test.com" />
        <div className="msg">Must end in @hotmail.com</div>
      </div>
      <div className="form-group">
        <label className="label" for="password">Password</label>
        <input
          className="input"
          value="Password123!"
          type="password"
          id="password"
        />
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
    </>
  )
}

export default App
