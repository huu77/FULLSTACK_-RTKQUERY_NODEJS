import React,{useEffect, useState} from 'react';
import { useGetListDSNVQuery, useDeleteStaffMutation ,useAddnewNhanVienMutation} from '../../../redux/services/dashboard'
import AddNewItem from './AddNewItem'
import StaffItem from './StaffItem'
const Staff = () => {

   
    const { data, isLoading, isError } = useGetListDSNVQuery(
        undefined, {

        refetchOnMountOrArgChange: {
            tags: ['resetListDSNV'],
        },
    }
    )
    const [listData, setListData] = useState([]);
    useEffect(() => {
        if (data) {
          setListData(data);
        }
      }, [data]);
   
    const [deleteStaff] = useDeleteStaffMutation(
        {

            invalidatesTags: ['resetListDSNV'],
        }
    );

 
    
    if (isLoading) {
        return <div>loading ....</div>
    }
    if (isError) {
        return <div>err .... </div>
    }



    return (

        <div className="flex flex-col ">
            <div className="overflow-x-auto  ">
                <div className="p-1.5 w-full inline-block align-middle">
                    <AddNewItem/>
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        MÃ NHÂN VIÊN
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        HỌ VÀ TÊN
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        SỐ ĐIỆN THOẠI
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        NGÀY VÀO LÀM
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                    >
                                        MÃ TÀI KHOẢN
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Edit
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                    >
                                        Delete
                                    </th>
                                </tr>

                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <StaffItem listData={listData} deleteStaff={deleteStaff} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Staff;