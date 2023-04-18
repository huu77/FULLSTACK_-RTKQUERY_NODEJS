import React from 'react';
import {Link} from 'react-router-dom'
const Cart = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
        <div className='overflow-hidden'>
            <Link to="/">
            <img src="https://bucket.nhanh.vn/eb9ddb-116318/ps/20220323_CA21KtclAOpKKflSQsqXyGWj.jpg" alt="" className='object-cover hover:scale-125 ease-in-out duration-500 ' />
            </Link>
            </div>
        <div className='flex flex-col justify-center items-center'>
            <span>TẤT</span>
            <span className='font-bold hover:text-black text-gray-600'>Tất HAPPY SOCKS Stripe</span>
            <span>450.000₫ 
                 <span className='font-bold mx-2'>
                 315.000
            </span>
            </span>
        </div>
    </div>
    
    );
};

export default Cart;