import React ,{useState} from 'react';
import {useEditNhanVienMutation} from '../../../redux/services/dashboard'
const StaffEdit = ({showModal,handleCloseModal,list}) => {
 const [editNV,{isLoading,isError}]=useEditNhanVienMutation()
 const [formAdd, setFormAdd] = useState({
    MANV: '',
    HOTEN: '',
    SODT: '',
    NGVL: '',
    ID:''
 });
 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormAdd((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
   
  };
    const handleUpdate = () => {
        editNV(formAdd)
        .then((response) => {
          console.log('Edit successful:', response.data);
        })
        .catch((error) => {
          console.error('Edit failed:', error);
        });
     
    }
 
    return (
        <>
        {showModal && <div className='w-[1080px] h-[400px] bg-neutral-400 rounded-lg border absolute flex flex-col justify-between'>
        <div className='flex justify-center items-center my-[10px] font-bold text-white'> ADD NEW STAFF</div>
        <div className='mx-[50px] w-[80%] h-auto grid grid-cols-2 gap-4'>

            <div className='flex mb-[20px]'>
                <h1 className='font-bold block w-[150px]'>MÃ NHÂN VIÊN :</h1>
               
                <input type="text" name="MANV" placeholder={list.MANV} onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
            </div>
            <div className='flex mb-[20px]'>
                <h1 className='font-bold block w-[150px]'>HỌ VÀ TÊN :</h1>
                <input type="text" name="HOTEN" placeholder={list.HOTEN} onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
            </div>
            <div className='flex mb-[20px]'>
                <h1 className='font-bold block w-[150px]'>SỐ ĐIỆN THOẠI :</h1>
                <input type="text" name="SODT" placeholder={list.SODT} onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
            </div>
            <div className='flex mb-[20px]'>
                <h1 className='font-bold block w-[150px]'>NGÀY VÀO LÀM :</h1>
                <input type="text" name="NGVL" placeholder={list.NGVL} onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
            </div>
            <div className='flex mb-[20px]'>
                <h1 className='font-bold block w-[150px]'>ID :</h1>
                <input type="text" name="ID" placeholder={list.ID} onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
            </div>

        </div>
        <div className='flex justify-end mx-[50px] mb-[30px]'>
            <button onClick={handleCloseModal} className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 m-[10px]'>Cancel</button>
            <button onClick={handleUpdate} className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 m-[10px]' type='submit'>OK</button>
        </div>
    </div>}
    </>
    );
};

export default StaffEdit;