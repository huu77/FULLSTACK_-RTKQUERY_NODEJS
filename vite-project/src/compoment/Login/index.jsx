import React, { useState, useEffect } from 'react';
import { useLoginNVMutation } from '../../redux/services/login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/hooks'
import { setLogin } from '../../redux/features/loginSlice';

const initLogin = {
    user: "",
    pass: ""
}

const index = () => {
    const [formValue, setFormValue] = useState(initLogin)
    const { user, pass } = formValue
    const [loginNV, { data, isSuccess, isLoading, isError }] = useLoginNVMutation()
    const changpage = useNavigate()

    //dispatch
    const dispatch = useAppDispatch()
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValue((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleLogin = async (event) => {
        event.preventDefault();

        if (user && pass) {
            await loginNV({ user, pass })


        } else {

            toast.error('xem lai cac field');
        }

    };
    useEffect(() => {

        if (isSuccess) {
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_CENTER
            });
            console.log(data)
            dispatch(setLogin(data))
            setTimeout(() => {
                changpage('/home')
            }, 2000);

        }


    }, [isSuccess])
    useEffect(() => {

        if (isError) {
            toast.error("err!", {
                position: toast.POSITION.TOP_CENTER
            });
        }


    }, [isError])
    const Google = () => {
        const width = 500;
        const height = 600;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;

        const options = `width=${width},height=${height},left=${left},top=${top}`;
        let TimeClose = null;
        const newWindow = window.open("http://localhost:5000/auth/google", "_blank", options);
        if (newWindow) {
            TimeClose = setInterval(() => {
                if (newWindow.closed) {
                    console.log("đã xác thực");
                    if (TimeClose) clearInterval(TimeClose);

                    changpage('/home');
                }
            }, 500);

        }

    };

    return (
        <div className='flex justify-center items-center  w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ' >

            <form className='flex flex-col justify-center items-center rounded-lg  h-[80%] w-[600px] bg-neutral-800 text-white' onSubmit={handleLogin}>
                <h2 className='inline-block mb-[20px] font-bold  '>LOGIN</h2>
                <input
                    type='text'
                    placeholder='user'
                    name='user'
                    value={formValue.user}
                    onChange={handleInputChange}
                    className='w-[50%] h-[40px] border-2 p-3 mx-2 border-slate-900 my-[20px] text-black'
                />
                <input
                    type='password'
                    placeholder='pass'
                    name='pass'
                    value={formValue.pass}
                    onChange={handleInputChange}
                    className='w-[50%] h-[40px] border-2 p-3 mx-2 border-slate-900 mt-[20px] text-black'
                />
                <button
                    className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 mt-[50px]'
                    type='submit'
                >
                    ĐĂNG NHẬP
                </button>

                <span className='mt-[20px]'> Login with google, facebook</span>
                <div className='flex fle-row'>
                    <button
                        className='w-[150px] h-[40px] mx-5 rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 mt-[20px]'
                        onClick={Google}
                    >
                        GOOGLE +
                    </button>

                    <button
                        className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 mt-[20px]'

                    >
                        FACEBOOK
                    </button>
                </div>
            </form>

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default index;