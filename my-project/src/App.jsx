import { useState } from 'react'
import {Header,Footer} from './compoment'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  >
      
      <Header/>
     <Outlet/>
     <Footer/>
    </div>
  )
}

export default App
