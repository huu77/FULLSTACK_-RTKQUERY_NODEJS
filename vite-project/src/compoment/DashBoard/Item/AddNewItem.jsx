import React, { useState } from 'react';
import { useAddnewNhanVienMutation } from '../../../redux/services/dashboard';
 
const AddNewItem = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // add new
  const [formAdd, setFormAdd] = useState({
    MANV: '',
    HOTEN: '',
    SODT: '',
    NGVL: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormAdd((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const [addNewNV, { isSuccess,isError,error }] = useAddnewNhanVienMutation();

  const handleAddnew = () => {
    addNewNV({
      MANV: formAdd.MANV,
           HOTEN: formAdd.HOTEN ,
           SODT:formAdd.SODT,
           NGVL:formAdd.NGVL
            
   } );
 
  };
  if(isSuccess){
     alert("tao thanh cong")
}
if(isError){
    alert("tao that bai")
    console.log(error)
}
    return (
        <div>
        <button
            className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 m-[10px]'
            onClick={handleOpenModal}
        >
            ADD NEW
        </button>
        {showModal && (
            <div className='w-[1080px] h-[400px] bg-neutral-400 rounded-lg border absolute flex flex-col justify-between' >
                <div className='flex justify-center items-center my-[10px] font-bold text-white'> ADD NEW STAFF</div>
                <div className='mx-[50px] w-[80%] h-auto grid grid-cols-2 gap-4  '>

                    <div className='flex mb-[20px]'>
                    <h1 className='font-bold block w-[150px]'>MÃ NHÂN VIÊN :</h1>
                    <input type="text" name="MANV" onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2'/>
                    </div>
                    <div className='flex mb-[20px]'>
                    <h1 className='font-bold block w-[150px]'>HỌ VÀ TÊN :</h1>
                    <input type="text" name="HOTEN" onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2'/>
                    </div>
                    <div className='flex mb-[20px]'>
                    <h1 className='font-bold block w-[150px]'>SỐ ĐIỆN THOẠI :</h1>
                    <input type="text" name="SODT" onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2'/>
                    </div>
                    <div className='flex mb-[20px]'>
                    <h1 className='font-bold block w-[150px]'>NGÀY VÀO LÀM :</h1>
                    <input type="text" name="NGVL" onChange={(event)=>handleInputChange(event)} className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2'/>
                    </div>
                    
                </div>
                <div className='flex justify-end mx-[50px] mb-[20px] '>
                <button onClick={handleCloseModal}className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 m-[10px]'>Cancel</button>
                <button onClick={handleAddnew} className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 m-[10px]' type='submit'>OK</button>
                </div>
            </div>
        )}
    </div>
    );
};

export default AddNewItem;