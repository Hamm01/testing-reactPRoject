import { useEffect, useState, createContext } from "react"
import {Child} from  './Child'

export const themecontext = createContext()
function App() {
  const [isDarkMode, SetIsDarkmode] = useState(false)

  useEffect(() => {
     document.body.style.backgroundColor = isDarkMode ? "#333" : "#fff"
     document.body.style.color = isDarkMode ? "#fff" : "#333"
    
  },[isDarkMode])

  function toggleTheme(){
     SetIsDarkmode(d => !d)
  }

  return (
    <themecontext.Provider value={{isDarkMode,toggleTheme}}>
    <Child />
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium ducimus, ut mollitia quam cumque fugit.</p>
    </themecontext.Provider>

    )
}

export default App
