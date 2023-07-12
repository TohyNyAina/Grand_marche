import React, { useEffect } from 'react'
import utils from "../utils"
import { Outlet ,useNavigate} from 'react-router-dom'

const AuthClient_layout = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const get_role = async() =>{
            const role = await utils.getUserRole()
            if(!role || role == "Unauthorized"){
                navigate("/login");
            }
        }

        get_role()
    },[])

    return <Outlet />
    
}

export default AuthClient_layout