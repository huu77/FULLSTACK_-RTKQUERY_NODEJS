import { configureStore } from '@reduxjs/toolkit'
import {loginApi} from './services/login'
import {Api} from './services/product'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginreducer from './features/loginSlice'
 import {dashboard} from './services/dashboard'
 import {product} from './services/product'
export const store = configureStore({
  reducer: {
    login:loginreducer,
    [loginApi.reducerPath]:loginApi.reducer,
   [dashboard.reducerPath]:dashboard.reducer,
   [product.reducerPath]:product.reducer,
  },
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware().concat(loginApi.middleware).concat(dashboard.middleware).concat(product.middleware)  ,
      
  
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)