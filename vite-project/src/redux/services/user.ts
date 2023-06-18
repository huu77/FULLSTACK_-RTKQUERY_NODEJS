
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
export const userInfo = createApi({
  reducerPath: 'userInfo',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    prepareHeaders: (headers, { getState }) => {
  

      return headers;
    }
  }),
   
  endpoints: (builder) => ({
    getEmployeeById: builder.query({
      query: (id) => `/api/v1/nhanvien/${id}`,
       
    }),

     

    //
  }),
})

export const {
  useGetEmployeeByIdQuery,
   
} = userInfo

