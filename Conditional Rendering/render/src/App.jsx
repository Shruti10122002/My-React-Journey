
import { useState } from 'react'
import './App.css'
import LogOutBtn from './Components/LogOutBtn';
import LoginBtn from './Components/LoginBtn';

function App() {
  //const [count, setCount] = useState(0)
  const[isLoggedIn, setLoggedIn]= useState(false);

  if(!isLoggedIn){
    return(
      <LoginBtn/>
    )
  }

  // if(isLoggedIn){
  //   return (
  //     <LogOutBtn/>
  //   )

  // }
  // else{
  //   return(
  //     <LoginBtn/>
  //   )

  // }
//   return (
//     <div>
//       {isLoggedIn ? <LogOutBtn/> : <LoginBtn/>}
//     </div>
//   )
return(
  <div>
    <h1>WELCOME EVERYONE IN REACT JOURNEY</h1>
    <div>
      {isLoggedIn && <LogOutBtn/>}
    </div>
  </div>
)
}



// }

export default App
