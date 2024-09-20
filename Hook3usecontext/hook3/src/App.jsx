import './App.css'
import { createContext, useState } from "react"
import ChildA from "./Components/ChildA";

// step:1 create context
//const UserContext =createContext();

//step:2 wrap all thr child inside a provider

//step:3 pass value
//step:4 consumer k andar consume kar lo
const ThemeContext = createContext();


function App() {
  //const [count, setCount] = useState(0)
  //const[user,setUser] = useState({name:"shruti"});
  const[theme,setTheme] = useState('Light');

  return (
    <ThemeContext.Provider value={theme}>
      <div id='container'>
      <ChildA/>
      </div>
    
    </ThemeContext.Provider>



    
    
  )
}

export default App

export{ThemeContext}
