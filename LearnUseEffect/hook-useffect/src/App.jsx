import { useEffect ,useLayoutEffect,useState} from 'react'
import './App.css'

function App() {
  const[count,setCount] = useState(0);
  const[total,setoatal] = useState(1);
  // first -> side effect function hai
  //second -> cleanup function
  // third -> comma seperated dep list

 // variation:1
 // runs on every render
//  useEffect(() => {
//   alert("I will run on each render")
   
//  })



//variation:2
//that runs on only first render
// useEffect(() => {
//   alert("Run Render")
  
// }, [])



// variation:3
// useEffect(() => {
//   alert("I will run every time when count is updated")
 
// }, [count])



//variation:4
//muiltiple dependencies
// useEffect(() => {
//   alert("I will render if you click me")
  
// }, [count,total])



// variation:5
// iss baar let's add clean up function

useEffect(() => {
  alert("Count is Updated")

  return () => {
    alert("count is unmounted form ui")
  }
}, [count])








 function handleClick(){
  setCount(count+1);
 
 }

 function handleClickTotal(){
  setoatal(total+1);
 }
 
 

  return (
    <div>
     <button onClick ={handleClick}>
      update count
     </button>
     <br/>
     count is:{count}

     <br/>
     <button onClick ={handleClickTotal}>
      Update Total
     </button>
     <br/>
     total is:{total}


    </div>
  
  )
}

export default App
