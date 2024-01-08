import { useReducer, useState } from "react";

function reducer(count, action){
 switch(action.type){
   case 'DECREMENT':
     return count -1
    case 'INCREMENT':
     return count +1 
     default: 
     return count
}
}

export function Counter({initialCount = 0 }){

   const [count,dipatch] = useReducer(reducer,initialCount)

   return (
    <>
      <button onClick={() => dipatch({type: "DECREMENT"})}>-</button>
      {count}
      <button onClick={() => dipatch({type: "INCREMENT"})}>+</button>
    </>
    )
}