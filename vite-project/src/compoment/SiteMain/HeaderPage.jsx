import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineUser, AiFillDatabase, AiOutlineRollback, AiFillMedicineBox } from "react-icons/ai";
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'
import { decodeToken } from '../../decode'
import { setLogout } from '../../redux/features/loginSlice'
import { useDispatch } from 'react-redux';
import { useGetInfoQuery, useGetlogoutMutation } from '../../redux/services/login'


const HeaderPage = ({ SetOpen }) => {
  const count = 0;
  const dispatch = useDispatch();
  const token = localStorage.getItem('Token');
  const [ROLE, setRole] = useState('')
  const [acesstoken, setAcesstoken] = useState('')

  useEffect(() => {
    if (!token) {
      changpage("/home");

    } else {
      const decodedToken = decodeToken(token);
      setRole(decodedToken.ROLE);
      setAcesstoken(decodedToken.acesstoken);
      // continue with the rest of the code
    }

  }, [token])

  const changpage = useNavigate();
  //get info
  const { data } = useGetInfoQuery()
  const [dataUser, setDataUser] = useState(null);

  useEffect(() => {
    if (data) {
      setDataUser(data);
    }
  }, [data]);
  const [logoutData] = useGetlogoutMutation()
  const handleLogout = async () => {

    localStorage.removeItem('Token');
    localStorage.removeItem('auth');
    dispatch(setLogout());
    await logoutData()
    changpage('/login');

  };

  const handelshow = () => {
    SetOpen(true)
  }




  return (
    <>

      <div className='w-screen h-[40px] pt-[20px] flex justify-around items-center relative'>
        <div>
          <h6 className='text-xs'>Hotline : <span className='font-bold text-red-500 '>19002008</span></h6>
        </div>
        <div className=' flex items-center  '>
          <form action="" className='flex border-2 rounded-full p-1  '> <AiOutlineSearch className='w-[24px] h-[24px] mx-2' /> <input type="text" className='mx-2' placeholder='Tim kiem san pham tai day...' /></form>
          <div className=' flex items-center ml-4'>

            {dataUser === null || !acesstoken ? null:(
              <>
                <Link to="/login" className="flex items-center">
                  <AiOutlineUser className="mx-2" />
                  <span>Dang nhap</span>
                </Link>
                <Link to="/" className="ml-5">
                  <span>Dang ki</span>
                </Link>
              </>
            )  }

            {data && (<>
          
              <h1 className="text-red-400 font-bold">Welcome {data.HOTEN} </h1>
              <img className='rounded-full w-[50px] h-[50px] m-[20px]' src={data.IMG} alt="" />
              </> )}
            {ROLE === "admin" && (<>
              <h1 className="text-red-400 font-bold">Welcome Admin </h1>
              <Link to="/dashboard" className="flex items-center mx-4">
                <AiFillDatabase />Dashboard
              </Link>
              </>
            )}
            {(dataUser !== null || ROLE !== "") && (
              <button className="flex items-center mx-4" onClick={handleLogout}>
                <AiOutlineRollback />Logout
              </button>
            )}


            <Link to='/home/ds_sanpham' className='relative	ml-5' >  <FaShoppingCart className='w-[24px] h-[24px] text-red-500 text-bold' />
              {count > 0 && <span className='absolute top-[-10px] right-[-30px] text-red-500 text-bold rounded-full  w-[25px] h-[25px]  text-center '>({count})</span>}</Link>
            <span className='relative	ml-5'> <AiFillMedicineBox className='w-[24px] h-[24px] text-red-500 text-bold' onClick={handelshow} /></span>
          </div>
        </div>

      </div>

    </>
  );
};

export default HeaderPage;
