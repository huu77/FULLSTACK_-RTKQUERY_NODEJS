import React ,{useState} from 'react';
import {ButtonMua} from '../CartMain'
const SumTT = () => {
    const count= 20000
    return (
        <div className='min-w-[100%] h-[200px] bg-white border  fixed inset-x-0 bottom-0 mx-auto flex items-center justify-end'>
            <div className=' mx-[20px]'>
                <h1 className='font-bold'>Tổng thanh toán :<span className='text-xl text-orange-500 ml-[10px]'>{count} đ</span> </h1>
            </div>
            <div className='mr-[40px]'>
            <ButtonMua />
            </div>
           
        </div>
    );
};

export default SumTT;