import React ,{useState}from 'react';
import {  AiOutlineShoppingCart,AiOutlineClose} from "react-icons/ai";
const ShowGioHang = ({SetOpen}) => {
const handelOpen=()=>{
    SetOpen(false)
}
    return (
        <div className='  fixed inset-0 w-screen h-screen  z-10 flex  transition duration-700 ease-in-out'>
            <div className='bg-gray-500 w-[75%] opacity-40' onClick={handelOpen}></div>
            <AiOutlineClose className='absolute top-[10px] right-[30px]' onClick={handelOpen}/>
            <div className='w-[25%] bg-white flex flex-col scroll-smooth overflow-scroll  '>
                <h1 className=' font-bold mx-auto  my-[20px]'>Giỏ Hàng</h1>

                <div className="flex items-center border p-4 mb-4">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" className="w-20 h-20 mr-4" />
                    <div>
                        <h3 className="text-lg font-bold">name</h3>
                        <p className="text-gray-600">$10.000 đ</p>
                        <p className="text-gray-600">Quantity: chat luong</p>
                    </div>

                </div>
                <div className="flex items-center border p-4 mb-4">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" className="w-20 h-20 mr-4" />
                    <div>
                        <h3 className="text-lg font-bold">name</h3>
                        <p className="text-gray-600">$10.000 đ</p>
                        <p className="text-gray-600">Quantity: chat luong</p>
                    </div>

                </div>
                <div className="flex items-center border p-4 mb-4">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" className="w-20 h-20 mr-4" />
                    <div>
                        <h3 className="text-lg font-bold">name</h3>
                        <p className="text-gray-600">$10.000 đ</p>
                        <p className="text-gray-600">Quantity: chat luong</p>
                    </div>

                </div>
                <div className="flex items-center border p-4 mb-4">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" className="w-20 h-20 mr-4" />
                    <div>
                        <h3 className="text-lg font-bold">name</h3>
                        <p className="text-gray-600">$10.000 đ</p>
                        <p className="text-gray-600">Quantity: chat luong</p>
                    </div>

                </div>
                <div className="flex items-center border p-4 mb-4">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" className="w-20 h-20 mr-4" />
                    <div>
                        <h3 className="text-lg font-bold">name</h3>
                        <p className="text-gray-600">$10.000 đ</p>
                        <p className="text-gray-600">Quantity: chat luong</p>
                    </div>

                </div>
                <div className="flex items-center border p-4 mb-4">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" className="w-20 h-20 mr-4" />
                    <div>
                        <h3 className="text-lg font-bold">name</h3>
                        <p className="text-gray-600">$10.000 đ</p>
                        <p className="text-gray-600">Quantity: chat luong</p>
                    </div>

                </div>
                <button className='w-[220px] h-[50px] border flex items-center rounded-sm border-orange-400 bg-red-100 text-orange-500 hover:bg-red-50 mx-auto mb-[50px]'>
                 <AiOutlineShoppingCart className='w-[50px] h-[30px]'/>Thêm Vào Giỏ Hàng
              </button>
            </div>
        </div>
    );
};

export default ShowGioHang;