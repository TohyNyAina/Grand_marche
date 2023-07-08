import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3002"
})

instance.interceptors.request.use(config => {
    config.headers.Authorization =  `bearer= ${document.cookie.replace("token_jwt=","")}`;
    return config;

})

export default instance;