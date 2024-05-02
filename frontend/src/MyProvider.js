import React ,{useEffect , useState} from "react";
import MyContext from "./MyContext";

function MyProvider({children}){
    const [user,setuser] = useState({
        isAuthed:false,
        uid:'',
        token:'',
    });

    const sharedvalue={
        isAuthed:user.isAuthed,
        uid:user.uid,
        token:user.token
    }
    const tokenFromLocalStorage = localStorage.getItem('token');
    useEffect(()=>{
        // const token = localStorage.getItem('token');
        if(!tokenFromLocalStorage){
            console.log('you didn\'t have any token');
        }else{
            // console.log('here is our token',JSON.parse(token));
            const parsetoken = JSON.parse(tokenFromLocalStorage);
            if(parsetoken.success){
                setuser(prev=>({
                    ...prev,
                    isAuthed:true,
                    uid:parsetoken.uid,
                    token:parsetoken.token
                }))
            }
        }
    },[tokenFromLocalStorage]);
    return(
        <MyContext.Provider value={sharedvalue}>
            {children}
        </MyContext.Provider>
    );
}

export default MyProvider;