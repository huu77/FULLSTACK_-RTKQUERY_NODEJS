import React, { useState } from 'react';
import { AiFillStar, AiFillMinusSquare, AiFillPlusSquare, AiOutlineShoppingCart } from "react-icons/ai";
import { ButtonMua } from './index'
import { useGetOneProductQuery } from '../../redux/services/product'
import { useParams } from 'react-router-dom'
const ItemCart = () => {
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
  const { id } = useParams();
  const { data } = useGetOneProductQuery(id);

  const [isClickable, setIsClickable] = useState(true);

  const handleAddToCart = (id) => {
    console.log(id);
    setIsClickable(false);
  
    setTimeout(() => {
      setIsClickable(true);
    }, 5000);
  };

  return (
    <>
      <div className=" w-[80%] mx-auto mt-8 flex ">
        <div className='w-[40%] h-[400px] mr-[20px] bg-white rounded-lg shadow-md overflow-hidden'>
          <img src={data?.IMG} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center" />

        </div>
        <div className='mx-[30px]'>
          <h2 className="text-gray-800 text-xl font-semibold">{data?.TENSP} </h2>
          <p className="text-gray-600 mt-2 flex items-center">4.7 <AiFillStar /> </p>
          <div className='flex items-center'>
            <span className='text-gray-400 '> ₫55.000
              <span className='text-orange-500 text-bold text-3xl mx-[10px]'>₫{data?.GIA} </span>
              <span className='bg-orange-500 text-white px-1 py-1 rounded-sm'>45% giảm</span>
            </span>
          </div>
          <div className='mt-[40px] flex items-center'>
            <span className='  p-5 mr-4 block w-[150px] '>MÃ Giảm Giá: </span>
            <span className='bg-orange-100 text-orange-500 p-1 mr-4  '>5 % Giảm</span>
            <span className='bg-orange-100 text-orange-500 p-1 mr-4'>5 % Giảm</span>
          </div>
          <div className='mt-[10px] flex items-center'>
            <span className='  p-5 mr-4 block w-[150px]'>Phí Vận Chuyển : </span>
            <span className=' p-1 mr-4 hover:text-orange-400'>17.000 đ</span>
            <span className='  p-5 mr-4 block w-[150px]'>Số Lượng: </span>
            <span className='   mr-4 block w-[120px]  border-gray-400 border h-[30px] flex justify-between items-center'>
              <AiFillMinusSquare className='w-[50px] h-[30px] ml-[-10px] text-red-400' onClick={handleMinust} /> {count} <AiFillPlusSquare className='w-[50px] h-[30px] mr-[-10px] text-red-400' onClick={handlePlus} />
            </span>
          </div>
          <div className='flex items-center '>
          <button className="w-[220px] h-[50px] border flex items-center rounded-sm border-orange-400 bg-red-100 text-orange-500 hover:bg-red-50 mr-[20px]"
              onClick={() => {
                if (isClickable) {
                  handleAddToCart(data.MASP);
                }
              }}
              disabled={!isClickable}
            
          >
          <AiOutlineShoppingCart className="w-[50px] h-[30px]" />
          Thêm Vào Giỏ Hàng
        </button>

            <ButtonMua />
          </div>

        </div>

      </div>

      <div class="bg-gray-100">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Desk and Office
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Self-Improvement
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Travel
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;