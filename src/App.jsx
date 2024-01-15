import { useState } from "react"
/*
 Task is given that we have filtered items which work on input value comes from the input on page
 but here we not filtered items as state, which will called as derived state from items
 like if we do [filterItems, setFilterItems] = useState(items)
 this is the pointed bug because filter Items are made up using derived state.. 
 this will produce the bug. when that filtered items get changed because of items state. 
 so we use the filteredItems as variable, which will update on each render of page
 we can more optimize the filterd Items state using the useMEmo hook
*/


function App(){
const [items,setItems] = useState([1,2,3,4,5])
const [inputValue, setInputValue] = useState("")

const filteredItems = inputValue === "" ? items : items.filter(item => item < inputValue) 



  return (
    <>
     <label htmlFor="lessThan">Show less then</label>
      <input type="text" id="number" onChange={e => setInputValue(e.target.value)} value={inputValue} />
      <br />
      <br />
      <br />
      <div>{filteredItems.join(", ")}</div>
      <br />
      <button onClick={() => setItems(i=> [...i, 2.5])}>Add 2.5 to list</button>
    </>

    )

  }
export default App
