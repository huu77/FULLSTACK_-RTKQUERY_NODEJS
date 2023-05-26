 import {BrowserRouter ,Route,Routes,Navigate} from 'react-router-dom'
 import Login from './compoment/Login'
 import {Home} from './compoment/SiteMain'
import {MainDashBoard,Product,Staff,Client,OrderList ,Profile} from './compoment/DashBoard'
 import Err404 from '../src/ERR/ERR404';
 import {ItemCart,Main} from '../src/compoment/CartMain'
 import {dsSP as DS} from '../src/compoment/DS_SP'
function App() {
 

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace  />}></Route>
        <Route path='/login' element={<Login/>}></Route>

        <Route path='/home' element={<Home/>}>
        <Route path='' element={<Main/>}/> 
        <Route path='sanpham/:id' element={<ItemCart/>}></Route>
        <Route path='ds_sanpham' element={<DS/>}></Route>
        </Route>
       

        <Route path='/dashboard' element={<MainDashBoard/>}>
          <Route path='profile/:id' element={<Profile/>}/> 
          <Route path='product' element={<Product/>}/> 
          <Route path='staff' element={<Staff/>}/> 
          <Route path='client' element={<Client/>}/> 
          <Route path='orderList' element={<OrderList/>}/> 

        </Route>
        <Route path='*' element={<Err404/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
