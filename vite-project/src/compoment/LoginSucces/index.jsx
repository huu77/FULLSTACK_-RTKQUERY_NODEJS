import React,{useEffect} from 'react';

const loginSucess = () => {
    
useEffect(()=>{
setTimeout(()=>{
window.close()
},1000)
 
},[])
    return (
        <div>
            Thank for login !
        </div>
    );
};

export default loginSucess;