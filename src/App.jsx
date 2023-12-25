import { useState } from 'react'
import Appcounter from './appCounterClass'
import Child from './Child'


function App() {
  const [count, setCount] = useState(0)
  function counterCount(){
    setCount(prevcount => prevcount+1)
  }

  return (
    <>
      {/* <div className="container" onClick={counterCount}>{count}</div> */}
      <Child />
    </>
  )
}

export default App
