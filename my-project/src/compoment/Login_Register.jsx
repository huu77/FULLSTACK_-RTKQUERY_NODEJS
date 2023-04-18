import React from 'react';

const Login_Register = ({ checked, setChecked }) => {

    const handleClick = (e) => {
        e.stopPropagation()
        setChecked(checked);
    };
    return (
        <div className='w-screen h-screen bg-transparent    z-20 fixed top-0 left-0 right-0 flex   justify-center items-center ease-in-out duration-500  ' onClick={() => setChecked(!checked)} >
            <div className='w-[70%] h-[60%] bg-gray-500 grid grid-cols-2 grid-rows-1   ' onClick={(e) => handleClick(e)}>
                <div className='flex flex-col justify-center items-center border-r-4 border-slate-300'>

                    <h2 className='inline-block mb-[20px] font-bold text-white' >ĐĂNG NHẬP</h2>
                    <input type="email" placeholder='địa chỉ email' name="" id="" className='w-[50%] h-[40px] border-2 p-3 mx-2 border-slate-900 my-[20px]' />
                    <input type="password" placeholder='pass' name="" id="" className='w-[50%] h-[40px] border-2 p-3 mx-2 border-slate-900 mt-[20px]' />
                    <button className='w-[150px] h-[40px]  border-zinc-950 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-black ease-in-out duration-500 mt-[50px]'>ĐĂNG NHẬP  </button>
                </div>

                <div className='flex flex-col justify-center items-center'>

                    <h2 className='inline-block mb-[20px] font-bold text-white'>ĐĂNG KÝ</h2>
                    <input type="text" placeholder='ho ten' name="" id="" className='w-[50%] h-[40px] border-2 p-3 mx-2 border-slate-900 my-[20px]' />
                    <input type="email" placeholder='dia chi email' name="" id="" className='w-[50%] h-[40px] border-2 p-3 mx-2 border-slate-900 mt-[20px]' />
                    <input type="password" placeholder='pass' name="" id="" className='w-[50%] h-[40px] border-2 p-3 mx-2 border-slate-900 mt-[30px]' />
                    <button className='w-[150px] h-[40px]  border-zinc-950 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-black ease-in-out duration-500 m-[50px]' > ĐĂNG KÝ  </button>
                </div>
            </div>


        </div>
    );
};

export default Login_Register;