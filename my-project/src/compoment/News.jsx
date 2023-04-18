import React from 'react';
 
 
const News = () => {
    return (
        <div className='w-full mt-[50px]'>
            <div className='w-[70%] flex mx-auto'>
            <h2 className=" w-full mx-auto   text-center h-[32px] leading-[32px] relative before:content-[''] before:h-1 before:bg-gray-300 before:w-full before:absolute before:left-0 before:top-[50%]">
                <span className='font-bold uppercase relative inline-block bg-white px-4'>TIN TỨC</span>
            </h2>
            </div>
            <div className='grid grid-rows-1 grid-cols-4 gap-5 w-[70%] flex mx-auto my-[20px]'>
                <div className='p-[10px] overflow-hidden'>
                    <img src="https://pos.nvncdn.net/eb9ddb-116318/bn/20220324_VBDHBJlITvvfnLSDA82zbAfd.png" alt=""  className='object-cover w-full hover:scale-125 ease-in-out duration-300'/>
                </div>
                <div className='col-span-2 p-[10px] overflow-hidden'>
                <img src="https://pos.nvncdn.net/eb9ddb-116318/bn/20220324_mcaT3cqwUAgK67DDOHbpAqox.png" alt="" className='object-cover w-full hover:scale-125 ease-in-out duration-300' />
                </div>
                <div className='p-[10px] overflow-hidden'>
                <img src="https://pos.nvncdn.net/eb9ddb-116318/bn/20220324_VBDHBJlITvvfnLSDA82zbAfd.png" alt="" className='object-cover w-full hover:scale-125 ease-in-out duration-300'/>
                </div>
            </div>
        </div>
    );
};

export default News;