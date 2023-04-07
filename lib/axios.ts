import Axios from 'axios'
import Cookies from "universal-cookie"

const cookies = new Cookies();

const token = cookies.get("token");

const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "Content-type":"application/json",
        Authorization: `Bearer ${token}`,
        "content-security-policy": "upgrade-insecure-requests",
        "Access-Control-Allow-Origin": "*"


    },
})
const axiosForm = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`
    },
})

export {axios,axiosForm}