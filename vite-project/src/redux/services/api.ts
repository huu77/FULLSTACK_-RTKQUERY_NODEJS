import { createApi, fetchBaseQuery,FetchBaseQueryError  } from '@reduxjs/toolkit/query/react';
import { setLogin, setLogout } from '../features/loginSlice';
import { RootState, AppDispatch } from '../store';
interface MyError extends FetchBaseQueryError {
    originalStatus?: number;
  }
  
export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5000/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).login.accesstoken;
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryReAuth = async (args:any, api:any, extraOptions:any) => {
  const result = await baseQuery(args, api, extraOptions);

  if ((result?.error as MyError)?.originalStatus=== 403) {
    console.log('sending refresh token ...');
    const refreshTokenResult:any = await baseQuery('/refresh', api, extraOptions);
    if (refreshTokenResult?.data) {
      const { id, user, ROLE } = api.getState().login;
      api.dispatch(setLogin({ ...refreshTokenResult.data, id, user, ROLE }));
      return baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setLogout());
    }
  }
  return result;
};

export const  Api = createApi({
  reducerPath: 'Api',
  baseQuery: baseQueryReAuth,
  endpoints: (builder) => ({}),
});
