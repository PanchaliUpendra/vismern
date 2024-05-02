import React, { useState } from "react";
import { API_URL } from "../../Docs/data";
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const[logindtls,setlogindtls] = useState({
        uid:'',
        password:''
    });

    async function handlelogin(e){
        e.preventDefault();
        try{
            const response = await fetch(`${API_URL}/login`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ uid:logindtls.uid, password:logindtls.password }),
            });
            const data = await response.json();
            console.log('response',data);
            if(data.success){
                localStorage.setItem('token',JSON.stringify(data));
                navigate('/dashboard');
            }
            
            
        }catch(err){
            console.log('you got an error while logging !!');
            alert('error while logging!!');
        }
    }
    return(
        <>
            <div className="login-con">
                <form className="login-form">
                    <div>
                        <label>UID</label>
                        <input type='text' value={logindtls.uid} onChange={(e)=>setlogindtls(prev=>({
                            ...prev,
                            uid:e.target.value
                        }))}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type='password' value={logindtls.password} onChange={(e)=>setlogindtls(prev=>({
                            ...prev,
                            password:e.target.value
                        }))}/>
                    </div>
                    <button onClick={(e)=>handlelogin(e)}>Login</button>
                </form>
            </div>
        </>
    );
}

export default Login;