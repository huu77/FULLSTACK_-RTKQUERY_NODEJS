import React, { useState } from 'react';
import StaffEdit from './StaffEdit';
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
    const [list,setList]=useState({
        MANV:"",
        HOTEN:"",
        SODT:"",
        NGVL:"",
        ID:""
    })
    const handleOpenModal = (MANV,HOTEN,SODT,NGVL,ID) => {
        setShowModal(true)
        // console.log(MANV,HOTEN,SODT,NGVL,ID)
        setList({  MANV:MANV,
        HOTEN:HOTEN,
        SODT:SODT,
        NGVL:NGVL,
        ID:ID})
    };
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            <StaffEdit  showModal={showModal} handleCloseModal={handleCloseModal} list={list}  />
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
                        <button onClick={() => handleOpenModal(i.MANV,i.HOTEN,i.SODT,i.NGVL,i.ID)}
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