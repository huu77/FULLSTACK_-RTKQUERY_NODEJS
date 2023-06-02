import React, { useState } from 'react';
import { AiOutlineBorder, AiFillMinusSquare, AiFillPlusSquare, AiFillCheckSquare } from "react-icons/ai";
const Updow = () => {
    const [count, SetCount] = useState(1);
    const handleMinust = () => {
        if (count - 1 <= 0) {
            SetCount(1);
        } else {
            SetCount(count - 1);
        }
    };

    const handlePlus = () => {
        SetCount(count + 1);
    };
    const [check, SetCheck] = useState(false)
    const handelClickCheck = () => {
        SetCheck(!check)
    }
    return (
        
            <tr className=''>
                <td className="border  flex justify-center items-center h-[100px] " onClick={handelClickCheck}>{!check ? <AiOutlineBorder /> : <AiFillCheckSquare />}</td>

                <td className="border  ">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Product" className="h-16 w-16 mx-auto" />
                </td>
                <td className="border text-center">product.name</td>
                <td className="border text-center">product.price</td>
                <td className="border-0 text-center flex justify-center items-center ">

                    <span className='   mr-4 block w-[120px]   h-[30px] flex justify-between items-center  border-0'>
                        <AiFillMinusSquare className='w-[50px] h-[30px] ml-[-10px] text-red-400' onClick={handleMinust} />{count} <AiFillPlusSquare className='w-[50px] h-[30px] mr-[-10px] text-red-400' onClick={handlePlus} />
                    </span>

                </td>
                <td className="border text-center">
                    <button

                        className="bg-red-500 text-white py-2 px-4 rounded"
                    >
                        Xóa
                    </button>
                </td>
            </tr>

      
    );
};

export default Updow;