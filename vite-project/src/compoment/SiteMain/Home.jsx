import React,{useState} from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { selectLogin, setLogout } from '../../redux/features/loginSlice'
import { useNavigate ,Outlet} from 'react-router-dom'
import {HeaderPage  } from './index'
import {ShowGioHang} from './HomePage'
const Home = () => {
   
    const dispatch = useAppDispatch()
    const changpage = useNavigate()

    const handelclick = () => {
        dispatch(setLogout)
        changpage("/login")
    }
 const [Open,SetOpen]=useState(false)
    return (
        <div className='w-screen h-auto relative'>
          <HeaderPage SetOpen={SetOpen}/>
         {Open && <ShowGioHang SetOpen={SetOpen}/> }
          <Outlet/> 
           
        </div>
    );
};

export default Home;