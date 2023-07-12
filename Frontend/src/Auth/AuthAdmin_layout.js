import React, { useEffect } from 'react'
import utils from "../utils"
import { Outlet ,useNavigate} from 'react-router-dom'

const AuthAdmin_layout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const get_role = async() =>{
            if(await utils.getUserRole() != "admin"){
                navigate("/login");
            }
        }

        get_role()
    },[])

    return <Outlet />
    
}

export default AuthAdmin_layout