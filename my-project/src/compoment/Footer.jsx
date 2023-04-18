import React from 'react';
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
            <hr/>
            <div className='w-full shadow-xl  -mb-4'>
                <div className='w-[70%] h-[100px] flex justify-between items-center m-auto '>
                    <h2 className='font-bold'>ĐĂNG KÍ NHẬN ƯU ĐÃI TỪ SNEAKERHOME</h2>
                    <div className=''>
                        <input type="text" placeholder='Your mail...' name="" id="" className='w-[400px] h-[36px] p-2 rounded-[15px] border-none' />
                        <button className='mx-4 hover:bg-red-300 p-3 rounded-lg bg-gray-300 ease-in-out duration-300'>Nhận ngay</button>
                    </div>
                </div>
            </div>
            <div className='flex w-[75%] m-auto items-center justify-center mt-[30px]  '>
                <div className=''>
                    <img src="https://pos.nvncdn.net/eb9ddb-116318/store/20220301_M6gPcIeoQ8cwvJrojaQ7a688.png" alt=" logo" className='w-[210px] cursor-pointer' />
                </div>
                <div className='flex flex-col p-[10px] m-[10px] '>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>THÔNG TIN LIÊN HỆ </Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''> ĐỊA CHỈ: 102 THÁI THỊNH, ĐỐNG ĐA, HÀ NỘI</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>EMAIL: CONTACT@NHANH.VN</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>HOTLINE: 1900.2818 </Link></p>
                </div>
                <div className='flex flex-col p-[10px] m-[10px] '>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>THÔNG TIN LIÊN HỆ </Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''> ĐỊA CHỈ: 102 THÁI THỊNH, ĐỐNG ĐA, HÀ NỘI</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>EMAIL: CONTACT@NHANH.VN</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>HOTLINE: 1900.2818 </Link></p>
                </div>
                 <div className='flex flex-col p-[10px] m-[10px] '>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>THÔNG TIN LIÊN HỆ </Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''> ĐỊA CHỈ: 102 THÁI THỊNH, ĐỐNG ĐA, HÀ NỘI</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>EMAIL: CONTACT@NHANH.VN</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>HOTLINE: 1900.2818 </Link></p>
                </div>
                 <div className='flex flex-col p-[10px] m-[10px] '>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>THÔNG TIN LIÊN HỆ </Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''> ĐỊA CHỈ: 102 THÁI THỊNH, ĐỐNG ĐA, HÀ NỘI</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>EMAIL: CONTACT@NHANH.VN</Link></p>
                    <p className='m-[5px] uppercase font-bold text-gray-500 hover:text-gray-900'><Link to=''>HOTLINE: 1900.2818 </Link></p>
                </div>


            </div>
            <div className='w-full h-[50px] bg-zinc-800 flex '>
                <p className='text-white font-bold m-auto'>THIẾT KẾ BỞI HỮU 77</p>
            </div>
        </>
    );
};

export default Footer;