
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../store';
export const dashboard = createApi({
  reducerPath: 'dashboard',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/',
    prepareHeaders: (headers, { getState }) => {
      // const accessToken = (getState() as RootState).login.acesstoken
      const accessToken: string | null = JSON.parse(localStorage.getItem("Token")!)?.acesstoken;

      if (accessToken) {
        headers.set('token', `Bearer ${accessToken}`);
      }

      return headers;
    }
  }),
  endpoints: (builder) => ({
    getEmployeeById: builder.query({
      query: (id) => `/api/v1/nhanvien/${id}`,
    }),

    updateEmployeeById: builder.mutation({
      query: (body: { MANV: string, HOTEN: string, SODT: string, NGVL: string, ID: string }) => ({
        url: `/api/v1/ds-nhan-vien/editNV`,
        method: 'PUT',
        body: body,
      }),
    }),

    getListDSNV: builder.query({
      query: () => '/api/v1/ds-nhan-vien',
  
    }),
    deleteStaff: builder.mutation({
      query: (body: { MANV: string }) => ({
        url: '/api/v1/ds-nhan-vien/deleteNV',
        method: 'DELETE',
        body: body,
      }),

    })
    ,
    addnewNhanVien: builder.mutation({
      query: (body: { MANV: string, HOTEN: string, SODT: string, NGVL: string }) => ({
        url: '/api/v1/ds-nhan-vien/addNV',
        method: 'POST',
        body: body,
      })
    }),
    editNhanVien: builder.mutation({
      query: (body: { MANV: string, HOTEN: string, SODT: string, NGVL: string ,ID:string}) => ({
        url: '/api/v1/ds-nhan-vien/editNV',
        method: 'PUT',
        body: body,
      })
    }),
    //
  }),
})

export const { useGetEmployeeByIdQuery, useUpdateEmployeeByIdMutation, useGetListDSNVQuery, useDeleteStaffMutation ,useAddnewNhanVienMutation ,useEditNhanVienMutation} = dashboard

