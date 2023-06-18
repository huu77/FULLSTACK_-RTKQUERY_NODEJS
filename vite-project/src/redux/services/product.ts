
 import { createApi, fetchBaseQuery  } from '@reduxjs/toolkit/query/react';
 export const product=createApi({
     reducerPath: 'product',
     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
     endpoints: (builder) => ({
        ListProduct: builder.query({
            query: () => ({
              url: 'danhsach_sp',
              method: 'GET',
            }),
          }),
       GetOneProduct: builder.query({
        query: (id) => ({
            url: `/sanpham/${id}`,
            method: 'GET',
          }),
       }),
       
       //
     }),
   })
  
 
 export const {useListProductQuery,useGetOneProductQuery}=product