
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ParamComponent from './Components/ParamComponent';
import Courses from './Components/Courses';
import MockTest from './Components/MockTest';
import Reports from './Components/Reports';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element :
      <div>
        <Navbar/>
        <Home/>
      </div>

    },
    {
      path:"/about",
      element :
      <div>
        <Navbar/>
        <About/>
      </div>

    },
    {
      path:"/dashboard",
      element :
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path:'courses',
          element:<Courses/>
        },{
          path:'mock-tests',
          element:<MockTest/>
        },{
          path:'reports',
          element:<Reports/>
        }
      ]
    

    },
    {
     path:"student/:id" ,
     element:
     <div>
        <Navbar/>
        <ParamComponent/>
      </div>
     

    }

  ]
);

function App() {
  //const [count, setCount] = useState(0)


  return (
    <div>
   <RouterProvider router={router}/>
   </div>
  
      
    
  )
}

export default App
