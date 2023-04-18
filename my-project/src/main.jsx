import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Giohang, Home} from './compoment'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/' element={<Home/>}/>
        <Route path='list_product' element={<Giohang/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
