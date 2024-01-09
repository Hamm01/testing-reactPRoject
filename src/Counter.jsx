import { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT : 'INCREMENT',
  DECREMENT : 'DECREMENT' ,
  RESET: 'RESET',
  ADDON_5 : 'ADDON_5' 
}
function reducer(count, action){
 switch(action.type){
   case ACTIONS.DECREMENT:
     return count -1
    case ACTIONS.INCREMENT:
     return count +1 
     case ACTIONS.RESET:
     return 0 
    case ACTIONS.ADDON_5:
      return count + action.payload.value
     default: 
     return count
}
}

export function Counter({initialCount = 0 }){

   const [count,dispatch] = useReducer(reducer,initialCount)

   return (
    <>
      <button onClick={() => dispatch({type: ACTIONS.DECREMENT})}>-</button>
      {count}
      <button onClick={() => dispatch({type: ACTIONS.INCREMENT})}>+</button>
      <button onClick={() => dispatch({type: ACTIONS.RESET})}>Reset</button>
      <button onClick={() => dispatch({type: ACTIONS.ADDON_5, payload:{ value: 5}})}>ADDON-5</button>
    </>
    )
}