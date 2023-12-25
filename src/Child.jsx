import { useEffect, useState } from "react"

function Child() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    
    useEffect(() =>{
     console.log("Gered")
    })
  
    return (
      <>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <br />
        <br />
        <button onClick={() => setAge(curAge => curAge-1)}>-</button>
            {age}
        <button onClick={() => setAge(curAge => curAge+1)}>+</button>
        <br />
        <br />
        My name is {name} and age is {age} years old
        
      </>
    )
  }
  
  export default Child
  