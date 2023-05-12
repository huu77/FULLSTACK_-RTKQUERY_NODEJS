 
import {createSlice ,PayloadAction,createSelector} from '@reduxjs/toolkit'
import{RootState} from '../store'


export const initaleState={
    id:'',
    user:'',
    ROLE:'',
    acesstoken:'',
}
export const loginSlice =createSlice({
    name:"login",
    initialState:initaleState ,
    reducers:{
        //viet 1 action
        setLogin:(state ,action :PayloadAction<{id:string,user:string,ROLE:string,acesstoken:string}>) =>{

            localStorage.setItem("Token",JSON.stringify({
              
                acesstoken:action.payload.acesstoken
                
            }));
            localStorage.setItem("auth",JSON.stringify({
              
               
                id:action.payload.id,
                user:action.payload.user,
                ROLE:action.payload.ROLE
            }));
            state.id=action.payload.id
            state.user=action.payload.user
            state.ROLE=action.payload.ROLE
            state.acesstoken=action.payload.acesstoken
        },
        setLogout:(state)=>{
            localStorage.clear()
            
            state.id=""
            state.user=""
            state.ROLE=""
            state.acesstoken=""
        }
        
    }
})
export const selectLogin =(state :RootState)=> state.login //dung cho useSelector goi de get data show
export const {setLogin,setLogout}=loginSlice.actions
export default loginSlice.reducer
 