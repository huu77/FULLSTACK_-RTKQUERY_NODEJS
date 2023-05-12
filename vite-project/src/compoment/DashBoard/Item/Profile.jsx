import React ,{useState}from 'react';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { useGetEmployeeByIdQuery,useUpdateEmployeeByIdMutation } from '../../../redux/services/dashboard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
const Profile = () => {
    const { id } = useParams();
   console.log("id",id)

    const { data, isLoading, error } = useGetEmployeeByIdQuery(id)
    const [manv, setManv] = useState(data?.MANV);
    const [hoten, setHoten] = useState(data?.HOTEN);
    const [sodt, setSdt] = useState(data?.SODT);
    const [ngvl, setNgvl] = useState(data?.NGVL);
 
    const handleManvChange = (event) => {
        setManv(event.target.value);
      };
      
      const handleHotenChange = (event) => {
        setHoten(event.target.value);
      };
      
      const handleSdtChange = (event) => {
        setSdt(event.target.value);
      };
      
      const handleNgvlChange = (event) => {
        setNgvl(event.target.value);
      };
      const [updateEmployeeById, { isSuccess,isError }] = useUpdateEmployeeByIdMutation();

      const handleUpdateClick = () => {
        const updatedEmployee = {
          MANV: manv,
          HOTEN: hoten,
          SODT: sodt,
          NGVL: ngvl,
          ID:id
        };
    
        updateEmployeeById(  updatedEmployee );
      };
      
    if (isLoading){
           return <h1>loading...</h1>
    }
    

    if (error) {
        return <h1>err...</h1>
    }
   
    if(isSuccess){
        toast.success("Update Success !", {
            position: toast.POSITION.TOP_CENTER
          });
    }
    if(isError){
        toast.error("Update isError!", {
            position: toast.POSITION.TOP_CENTER
          });
    }
    
    return (
<>

        <div className='w-full h-[70%] flex justify-center item-center'>
         
            <div className='w-[30%] m-auto border-2 mx-2 p-1'>
                <img className='rounded-full m-auto' src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className='flex flex-col w-[70%] m-auto p-3'>
                <div className='flex justify-start item-center  '>
                    <h1 className='m-auto block w-[30%]'>MA NHAN VIEN :</h1>
                    <input type="text" value={manv} onChange={handleManvChange} className='border-2 w-[70%] m-5 p-2'   
              />
                </div>

                <div className='flex justify-start item-center  '>
                    <h1 className='m-auto block w-[30%]'>TEN NHAN VIEN  :</h1>
                    <input type="text" value={hoten} onChange={handleHotenChange}  className='border-2 w-[70%] m-5 p-2'  
              />
                </div>

                <div className='flex justify-start item-center  '>
                    <h1 className='m-auto block w-[30%]'>SDT:</h1>
                    <input type="text" value={sodt} onChange={handleSdtChange}  className='border-2 w-[70%] m-5 p-2'  />
                </div>

                <div className='flex justify-start item-center  '>
                    <h1 className='m-auto block w-[30%]'>NGAY VAO LAM :</h1>
                    <input type="text" value={ngvl} onChange={handleNgvlChange}  className='border-2 w-[70%] m-5 p-2'   />
                </div>
  
            </div>


        </div>
        <div className='h-[20%] w-full flex justify-center item-center'>

        <button className="rounded-none w-[150px] bg-sky-600 h-[50px] font-bold hover:bg-red-400 transition delay-100 duration-300 ease-in-out" onClick={handleUpdateClick}  >UPDATE</button>
         
        </div>
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
        </>    
    );
};

export default Profile;