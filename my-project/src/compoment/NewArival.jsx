import React from 'react';
import {Cart} from '../compoment'
import { AiFillCaretRight } from "react-icons/ai";
const NewArival = () => {
    return (
        <div className='w-full mt-[60px]'>
            <div className='w-[70%] flex mx-auto'>
                <h2 className=" w-full mx-auto   text-center h-[32px] leading-[32px] relative before:content-[''] before:h-1 before:bg-gray-300 before:w-full before:absolute before:left-0 before:top-[50%]">
                    <span className='font-bold uppercase relative inline-block bg-white px-4'>NEW ARRIVALS</span>
                </h2>
            </div>

            <div className='grid grid-rows-2 grid-cols-4 gap-4 w-[70%] flex mx-auto my-[20px]'>
               <Cart/>
               <Cart/>
               <Cart/>
               <Cart/>
               <Cart/>
               <Cart/>
            </div>


            <div className='w-full flex justify-center items-center '>
                <button className='w-[150px] h-[40px]  border-zinc-950 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-black ease-in-out duration-500 m-[50px]'>XEM TẤT CẢ  <AiFillCaretRight/></button>
            </div>

        </div>
    );
};

export default NewArival;