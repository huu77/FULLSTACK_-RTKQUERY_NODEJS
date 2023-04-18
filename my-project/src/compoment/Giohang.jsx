import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineDelete,AiOutlineArrowLeft } from "react-icons/ai";
const Giohang = () => {
    return (
        <div className='flex flex-col m-[30px]'>
            <div className='flex m-auto'>
                <h2 className='text-center font-bold mb-[30px]'>GIỎ HÀNG</h2>
            </div>
            <div className='flex justify-center items-center w-full'>
                <table class="table-auto w-[60%]">
                    <thead className='bg-gray-400 boder-2 h-[50px] align-middle'>
                        <tr className='text-center'>
                            <th>HÌNH ẢNH</th>
                            <th>TÊN SẢN PHẨM </th>
                            <th>SỐ LƯỢNG</th>
                            <th>GIÁ TIỀN </th>
                            <th>XÓA</th>
                        </tr>
                    </thead>
                    <tbody className='boder-2 align-middle' >
                        <tr className='boder-2 text-center my-[2px]'>
                            <td className='flex justify-center items-center '>
                                <div className='w-[100px] boder-2 h-[100px]'>
                                    <img src="https://bucket.nhanh.vn/eb9ddb-116318/ps/20220323_1repDzzF1eYlsGJydnNojlBI.png" alt="" />
                                </div>
                            </td>
                            <td className='text-gray-500 font-bold hover:text-black h-[100px]'><Link to="#">Kính Gucci Shiny Black Red - 40</Link></td>
                            <td><span className='block px-[2px] py-[1px] border-2'>1</span></td>
                            <td className='w-[250px]'><span className='text-red-500 font-bold'>3.5000.000đ</span></td>
                            <td><AiOutlineDelete className='m-[3px] hover:text-red-500 font-bold' /></td>
                        </tr>

                        <tr className='boder-2 text-center'>
                            <td className='flex justify-center items-center'>
                                <div className='w-[100px] boder-2 h-[100px]'>
                                    <img src="https://bucket.nhanh.vn/eb9ddb-116318/ps/20220323_1repDzzF1eYlsGJydnNojlBI.png" alt="" />
                                </div>
                            </td>
                            <td className='text-gray-500 font-bold hover:text-black h-[100px]'><Link to="#">Kính Gucci Shiny Black Red - 40</Link></td>
                            <td><span className='block px-[2px] py-[1px] border-2'>1</span></td>
                            <td className='w-[250px]'><span className='text-red-500 font-bold'>3.5000.000đ</span></td>
                            <td><AiOutlineDelete className='m-[3px] hover:text-red-500 font-bold' /></td>
                        </tr>

                    </tbody>

                </table>

            </div>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className='w-[60%] justify-end flex'>
                <span>Tổng tiền : </span>
                <span className='font-bold text-black'> 3.5000.000đ</span>
                </div>
                <div className='w-[60%] justify-end flex'>
                <button className='w-[200px] h-[30px]  border-zinc-950 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-black ease-in-out duration-500 m-[10px]'> <AiOutlineArrowLeft/>TIẾP TỤC MUA SẮM  </button>
                <button className='w-[150px] h-[30px]  border-zinc-950 border-2 flex justify-center items-center font-bold text-white  bg-black ease-in-out duration-500 m-[10px]'>THANH TOÁN   </button>

                </div>

            </div>
        </div>
    );
};

export default Giohang;