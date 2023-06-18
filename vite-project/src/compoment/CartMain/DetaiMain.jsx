import React from 'react';
import { Link  } from 'react-router-dom';
import {useListProductQuery} from '../../redux/services/product'
const DetaiMain = () => {
  const { data, isLoading, error }=useListProductQuery()

    return (
        <div className="bg-white">
           
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className='mb-[30px] font-bold text-2xl'> Product</div>
      
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data && data.map(item => (
  <Link to={`/home/sanpham/${item.MASP}`} key={item.MASP} className="group">
    <div className="aspect-h-1 aspect-w-1 w-[250px] h-[250px] object-cover overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
      <img src= {item.IMG}  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full   object-contain object-center group-hover:opacity-75" />
    </div>
    <h3 className="mt-4 text-sm text-gray-700">{item.TENSP}</h3>
    <p className="mt-1 text-lg font-medium text-gray-900">${item.GIA}</p>
  </Link>
))}
          

          </div>
        </div>
      </div>
    );
};

export default DetaiMain;