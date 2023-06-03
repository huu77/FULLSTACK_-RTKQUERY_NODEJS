
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
  tagTypes: ['NV', 'DSNV'],
  endpoints: (builder) => ({
    getEmployeeById: builder.query({
      query: (id) => `/api/v1/nhanvien/${id}`,
      providesTags: (result, error, id) => [{ type: 'NV', id }],
    }),

    updateEmployeeById: builder.mutation({
      query: (body: { MANV: string, HOTEN: string, SODT: string, NGVL: string, ID: string }) => ({
        url: `/api/v1/ds-nhan-vien/editNV`,
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result, error, { MANV }) => [
        { type: 'NV', id: MANV },
        { type: 'NV', id: 'LIST' },
      ],
    }),

    getListDSNV: builder.query({
      query: () => '/api/v1/ds-nhan-vien',
      providesTags: (result) =>
        result ? result.map(() => ({ type: 'DSNV' })) : ['DSNV'],
    }),
    deleteStaff: builder.mutation({
      query: (body: { MANV: string }) => ({
        url: '/api/v1/ds-nhan-vien/deleteNV',
        method: 'DELETE',
        body: body,
      }),
      invalidatesTags: (result, error, { MANV }) => [
        { type: 'DSNV', id: MANV },
        { type: 'DSNV', id: 'LIST' },
      ],
    })
    ,
    addnewNhanVien: builder.mutation({
      query: (body: { MANV: string, HOTEN: string, SODT: string, NGVL: string }) => ({
        url: '/api/v1/ds-nhan-vien/addNV',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['DSNV'],
    }),

    editNhanVien: builder.mutation({
      query: (body: { MANV: string, HOTEN: string, SODT: string, NGVL: string, ID: string }) => ({
        url: '/api/v1/ds-nhan-vien/editNV',
        method: 'PUT',
        body: body,
      }),
      invalidatesTags: (result, error, { MANV }) => [{ type: 'DSNV', id: MANV }],
    }),

    //
  }),
})

export const {
  useGetEmployeeByIdQuery,
  useUpdateEmployeeByIdMutation,
  useGetListDSNVQuery,
  useDeleteStaffMutation,
  useAddnewNhanVienMutation,
  useEditNhanVienMutation
} = dashboard

