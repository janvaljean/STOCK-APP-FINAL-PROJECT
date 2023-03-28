import axios from "axios"
import { useSelector } from "react-redux"

const useAxios = () => {
    const {token} = useSelector((state) => state.auth)
    const axiosWithToken = axios.create({
        baseURL : "https://14107.fullstack.clarusway.com/",
        headers: {"Authorization": `Token ${token}`}
    })
    const axiosPublic = axios.create({
        baseURL : "https://14107.fullstack.clarusway.com/",  
    })

    return {axiosWithToken, axiosPublic}
}
export default useAxios 