import React from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { selectLogin  } from '../../redux/features/loginSlice'

 
const HeaderDashboard = () => {
     
    // const { user,   ROLE } = useAppSelector(selectLogin)
     const user=JSON.parse(localStorage.getItem("auth"))?.user
     const ROLE=JSON.parse(localStorage.getItem("auth"))?.ROLE
     
    return (
        <div className='w-[100%] h-[70px] border-b-2 flex justify-end ' >
            <div className='w-[50px] rounded-full mx-3 m-auto'>
                <img className='rounded-full' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className='mx-5 m-auto'> 
            <h3 className='text-xs font-bold'>{user}</h3>
            <span>{ROLE}</span>
            </div>
        </div>
    );
};

export default HeaderDashboard;