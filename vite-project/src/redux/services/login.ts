 
 import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react';
export const loginApi=createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
      loginNV: builder.mutation({
        query:(body:{user:string,pass:string})=>{
            return{
                url:'login',
                method:'post',
                body
            }
        }
      }),
      getInfo: builder.query({
        query: () => ({
          url: 'login/success',
          method: 'GET',
        }),
      }),
      Getlogout: builder.mutation({
        query: () => ({
          url: 'logout',
          method: 'GET',
        }),
      }),
      //
    }),
  })
 

export const {useLoginNVMutation,useGetInfoQuery,useGetlogoutMutation }=loginApi