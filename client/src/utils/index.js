import axios from "axios"

const getUserRole = async () => {
    if(document.cookie){
        const role = await axios.get("http://localhost:3002/api/authorization",{
            headers : {
                Authorization : `bearer= ${localStorage.getItem("token_jwt=","")}`
            }
        });

        return role?.data?.role || "Unauthorized"
    }
}

export default {
    getUserRole
}