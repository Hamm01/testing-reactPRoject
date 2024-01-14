import { useContext } from "react"
import { themecontext } from "./App"
export function GrandChild(){
 const {isDarkMode,toggleTheme} = useContext(themecontext)
 return (
    <button style={{
        backgroundColor : isDarkMode ? '#fff' : '#333',
        color: isDarkMode ? "#333" : "#fff",
        border: "none",
        padding: ".5em",
        borderRadius: ".25em",
        cursor: 'pointer',  
    }} onClick={toggleTheme}
    >
        ToggleButton</button>
    )
}