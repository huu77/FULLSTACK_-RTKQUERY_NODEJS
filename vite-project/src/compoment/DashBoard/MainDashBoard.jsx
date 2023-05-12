import React from 'react';
import {Navbar,HeaderDashboard} from './index';
import { Outlet } from 'react-router-dom';

const MainDashBoard = () => {
   
    return (
        <div className='w-[90%] h-[90%] m-auto border-2 rounded flex'>
            <Navbar/>
            <div className='w-[80%]'>
            <HeaderDashboard/> 
            <Outlet/>
            </div>
          
        </div>
    );
};

export default MainDashBoard;