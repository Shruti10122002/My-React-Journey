import React,{useContext} from 'react'
import { ThemeContext } from '../App'

const ChildC = () => {
   // const user = useContext(UserContext);

   const theme = useContext(ThemeContext);
   function handleClick(){

   }


  return (
    <div>
     <button>
        Change Theme
     </button>
    </div>
  )
}

export default ChildC
