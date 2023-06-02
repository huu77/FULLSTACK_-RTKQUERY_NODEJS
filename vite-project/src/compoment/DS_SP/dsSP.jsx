import React, { useState } from 'react';
import { AiOutlineBorder, AiFillMinusSquare, AiFillPlusSquare, AiFillCheckSquare } from "react-icons/ai";
import {SumTT,Updow} from './index'
const dsSP = () => {
  const [check, SetCheck] = useState(false)
  const handelClickCheck = () => {
      SetCheck(!check)
  }
  return (
    <>
      <div className='w-screen h-auto bg-gray-50  '>
        <div className='w-[70%] h-auto  bg-white m-auto  mb-[220px]'>
          <table className="min-w-full border ">
            <thead>
              <tr>
                <th className="border flex justify-center items-center h-[30px]" onClick={handelClickCheck} >{!check ? <AiOutlineBorder /> : <AiFillCheckSquare />}</th>
                <th className="border">Hình ảnh</th>
                <th className="border">Tên</th>
                <th className="border">Giá</th>
                <th className="border">Số Lương</th>
                <th className="border"></th>
              </tr>
            </thead>
            <tbody  className=''>

            <Updow/>
            <Updow/>
            <Updow/>
            <Updow/>
            <Updow/>
            <Updow/>
            <Updow/>
            <Updow/>
            <Updow/>
            <Updow/>
            </tbody>
          </table>
          
        </div>
        <SumTT/>
      </div>
    </>
  );
};

export default dsSP;