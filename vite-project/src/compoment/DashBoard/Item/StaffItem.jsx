import React, { useState } from 'react';
const StaffItem = ({ listData, deleteStaff }) => {
    const handleDelete = (MANV) => {
        if (window.confirm('Are you sure you want to delete this staff member?')) {
            deleteStaff({ MANV })
                .unwrap()
                .then(() => {
                    alert("xóa thành công")
                })
                .catch((error) => {
                    alert("xóa ko thành công", error)
                })
        }
    };
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    const handleUpdate = () => {

    }
    return (
        <>
            {showModal && <div className='w-[1080px] h-[400px] bg-neutral-400 rounded-lg border absolute flex flex-col justify-between'>
                <div className='flex justify-center items-center my-[10px] font-bold text-white'> ADD NEW STAFF</div>
                <div className='mx-[50px] w-[80%] h-auto grid grid-cols-2 gap-4'>

                    <div className='flex mb-[20px]'>
                        <h1 className='font-bold block w-[150px]'>MÃ NHÂN VIÊN :</h1>
                        <input type="text" name="MANV" className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
                    </div>
                    <div className='flex mb-[20px]'>
                        <h1 className='font-bold block w-[150px]'>HỌ VÀ TÊN :</h1>
                        <input type="text" name="HOTEN" className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
                    </div>
                    <div className='flex mb-[20px]'>
                        <h1 className='font-bold block w-[150px]'>SỐ ĐIỆN THOẠI :</h1>
                        <input type="text" name="SODT" className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
                    </div>
                    <div className='flex mb-[20px]'>
                        <h1 className='font-bold block w-[150px]'>NGÀY VÀO LÀM :</h1>
                        <input type="text" name="NGVL" className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
                    </div>
                    <div className='flex mb-[20px]'>
                        <h1 className='font-bold block w-[150px]'>ID :</h1>
                        <input type="text" name="ID" className='w-[200px]  border-0 rounded-md border-none ring-offset-2 ring-2 px-2 mx-2' />
                    </div>

                </div>
                <div className='flex justify-end mx-[50px] mb-[30px]'>
                    <button onClick={handleCloseModal} className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 m-[10px]'>Cancel</button>
                    <button onClick={handleUpdate} className='w-[150px] h-[40px] rounded-lg border-sky-900 border-2 flex justify-center items-center font-bold hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 duration-500 m-[10px]' type='submit'>OK</button>
                </div>
            </div>}
            {listData.map((i) => (
                <tr key={i.MANV} data-manv={i.MANV} data-name={i.HOTEN}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {i.MANV}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.HOTEN}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.SODT}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.NGVL}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {i.ID ? i.ID : "chưa tạo tài khoản"}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button onClick={() => handleOpenModal()}
                            className="text-green-500 hover:text-green-700"
                        > Edit</button>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button className='' onClick={() => handleDelete(i.MANV)}>
                            Delete
                        </button>


                    </td>
                </tr>
            ))}

        </>
    );
};

export default StaffItem;