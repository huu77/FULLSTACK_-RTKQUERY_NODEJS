import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { selectLogin, setLogout } from '../../redux/features/loginSlice'
import { useNavigate ,Outlet} from 'react-router-dom'
import {HeaderPage  } from './index'
const Home = () => {
   
    const dispatch = useAppDispatch()
    const changpage = useNavigate()

    const handelclick = () => {
        dispatch(setLogout)
        changpage("/login")
    }
 
    return (
        <div className='w-screen h-auto'>
          <HeaderPage/>
          <Outlet/> 
           
        </div>
    );
};

export default Home;