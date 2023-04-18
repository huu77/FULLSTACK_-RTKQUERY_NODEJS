import React ,{Fragment, useState}from 'react';
 import {Link} from 'react-router-dom'
import { AiOutlineUser,AiFillShopping,AiOutlineSearch } from "react-icons/ai";
import {Login_Register} from '../compoment';
 
const Header = () => {
const [checked,SetChecked]=useState(false);
const handleClick=()=>{
    SetChecked(!checked)
}

    return (
        <>
         {checked?<Login_Register checked={checked} setChecked={SetChecked} />:<Fragment></Fragment>}
        <div className='w-[97%] m-auto  '>
            <div className='flex justify-between items-center'>
                <p className='cursor-pointer'>102, Man Thien, Quan 9 HCM</p>
               
                <img src="https://pos.nvncdn.net/eb9ddb-116318/store/20220301_M6gPcIeoQ8cwvJrojaQ7a688.png" alt=" logo" className='w-[105px] cursor-pointer'/>
                <div className='flex justify-center items-center h-full'> 
                    
               < AiOutlineUser className='w-[30px] h-[30px] mx-4 cursor-pointer hover:bg-black rounded-full p-1 border-2 hover:text-white ease-in-out duration-500' onClick={handleClick}/>
               <span className='text-gray-400'>|</span>
               <Link to='/list_product'>
              < AiFillShopping className='w-[30px] h-[30px] mx-4 cursor-pointer hover:bg-black rounded-full p-1 border-2  hover:text-white ease-in-out duration-500' />
               </Link>
                </div>
              
            </div>
            <hr/>
            <div className='flex items-center justify-center'>
                <ul className='flex mt-3'>
                    <li className='mx-4 hover:text-red-300 hover:border-b-4 border-indigo-500 ease-in-out duration-300 font-bold'><Link to="">HOME</Link></li>
                    <li className='mx-4 hover:text-red-300 hover:border-b-4 border-indigo-500 ease-in-out duration-300 font-bold'><Link to="">SAN PHAM</Link></li>
                    <li className='mx-4 hover:text-red-300 hover:border-b-4 border-indigo-500 ease-in-out duration-300 font-bold'><Link to="">PHU KIEN</Link></li>
                    <li className='mx-4 hover:text-red-300 hover:border-b-4 border-indigo-500 ease-in-out duration-300 font-bold'><Link to="">KHUYEN MAI</Link></li>
                    <li className='mx-4 hover:text-red-300 hover:border-b-4 border-indigo-500 ease-in-out duration-300 font-bold'><Link to="">CONTACT</Link></li>
                    <li className='mx-4 hover:text-red-300 hover:border-b-4 border-indigo-500 ease-in-out duration-300 font-bold'><Link to="">ABOUT</Link></li>
                    
                </ul>
            </div>
            <div className='w-full flex items-center justify-center mt-5'>
                <input type="text" placeholder='search...' className='bg-slate-200 w-[50%] rounded-[15px] px-2 py-1 relative block'/>
                <AiOutlineSearch className='mx-3 cursor-pointer  hover:bg-red-300 rounded-full p-1 w-[30px] h-[30px] '  />
            </div>
        </div>
       
        </>
    );
};

export default Header;