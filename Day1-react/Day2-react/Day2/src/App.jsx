import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './Components/UserCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
     <UserCard/>
     <UserCard/>
     <UserCard/>
     </div>
    </>
  )
}

export default App
