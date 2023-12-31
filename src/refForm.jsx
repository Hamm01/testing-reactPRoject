import React from 'react'

export default function RefForm() {
    return (
        <>
           <form className="form">
          <div className="form-group error">
            <label className="label" htmlFor="email">Email</label>
            <input className="input" type="email" id="email" defaultValue="test@test.com" />
            <div className="msg">Must end in @hotmail.com</div>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">Password</label>
            <input
              className="input"
              defaultValue="Password123!"
              type="password"
              id="password"
            />
          </div>
          <button className="btn" type="submit">Submit</button>
        </form>
        </>
      )
}
