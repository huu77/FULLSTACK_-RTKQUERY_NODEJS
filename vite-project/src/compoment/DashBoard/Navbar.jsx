import React ,{useState}from 'react';
import { Link  } from 'react-router-dom';
import { AiFillHome ,AiOutlineGift,AiOutlineUsergroupAdd,AiOutlineUserAdd, AiOutlineOrderedList,AiFillCaretLeft} from "react-icons/ai";
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { selectLogin } from '../../redux/features/loginSlice'
import {decodeToken} from '../../decode';
const activeArr=['w-[90%] m-auto rounded text-bold my-1 h-[40px] flex  item-center    bg-slate-200 ','w-[90%] m-auto rounded text-bold my-1 h-[40px] flex  item-center   hover:bg-slate-200 ']
const activeARR2=['flex  item-center justify-start w-full my-auto      ease-out  text-blue-600  ','flex  item-center justify-start w-full my-auto   text-gray-600   ease-out hover:text-blue-600  ']
const Navbar = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (index) => {
      setActiveTab(index);
    };
  
     
    const token = localStorage.getItem('Token');
    const decodedToken = decodeToken(token);
const id = decodedToken.ID;
const role = decodedToken.ROLE;
    return (
        <div className='h-screen w-[20%] border-r-2 '>
           <div className='w-full flex justify-center'>
            <img src="http://t0320.store.nhanh.vn/img/nhanh.png" alt="" className=' '/>
           </div>
           <div className='my-5 h-[80%]'>
            <ul className='flex flex-col item-center justify-center text-center'>
                <li className={activeTab==0? activeArr[0]:activeArr[1]} onClick={() => handleTabClick(0)}>

                    <Link to={`/dashboard/profile/${id}`} className={activeTab==0? activeARR2[0]:activeARR2[1]}>
                        <AiFillHome className='w-[24px] h-[24px] mx-2'/>PROFILE </Link>
                </li>
                
                <li className={activeTab==1? activeArr[0]:activeArr[1]} onClick={() => handleTabClick(1)}>
                    <Link to='/dashboard/product' className={activeTab==1? activeARR2[0]:activeARR2[1]}>
                        <AiOutlineGift className='w-[24px] h-[24px] mx-2'/>PRODUCTS </Link>
                </li>
                <li className={activeTab==2? activeArr[0]:activeArr[1]} onClick={() => handleTabClick(2)}>
                    <Link to='/dashboard/client' className={activeTab==2? activeARR2[0]:activeARR2[1]}>
                        <AiOutlineUsergroupAdd className='w-[24px] h-[24px] mx-2'/>CLIENT </Link>
                </li>
                <li className={activeTab==3? activeArr[0]:activeArr[1]} onClick={() => handleTabClick(3)}>
                    <Link to='/dashboard/staff' className={activeTab==3? activeARR2[0]:activeARR2[1]}>
                        <AiOutlineUserAdd className='w-[24px] h-[24px] mx-2'/>STAFF </Link>
                </li>
                <li className={activeTab==4? activeArr[0]:activeArr[1]} onClick={() => handleTabClick(4)}>
                    <Link to='/dashboard/orderList' className={activeTab==4? activeARR2[0]:activeARR2[1]}>
                        <AiOutlineOrderedList className='w-[24px] h-[24px] mx-2'/>ORDERED LIST </Link>
                </li>
                
            </ul>
           </div>
           <div className='w-[90%] m-auto hover:bg-slate-200 rounded text-bold my-1 h-[40px] flex  item-center border-2 '>
           <Link to='/home' className='flex  item-center justify-start w-full my-auto   text-gray-600 hover:text-blue-600  ease-out '>
                        <AiFillCaretLeft className='w-[24px] h-[24px] mx-2'/>BACK</Link>
           </div>
        </div>
    );
};

export default Navbar;