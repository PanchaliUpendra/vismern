import React, { useContext,useEffect, useState } from "react";
import './Dashboard.css';
import MyContext from "../../MyContext";
import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();
    const sharedvalue= useContext(MyContext);
    const [adminlogin, setadminlogin] = useState(false);
    useEffect(()=>{
        const token = localStorage.getItem('token');
        if(token){
            setadminlogin(true);
        }
    },[]);
    return(
        <>
            {
                adminlogin?<h1>Dahsboard page</h1>:<div>
                    <div>
                        <h2>sorry, please login </h2>
                        <p onClick={()=>navigate('/login')}>login</p>
                    </div>
                </div>
            }
        </>
    );
}

export default Dashboard;