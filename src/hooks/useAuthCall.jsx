
import axios from "axios";

const useAuthCall = () => {
 const login = async (userInfo) => {
    const BASE_URL = "https://14107.fullstack.clarusway.com/"
    try {
        const {data} = await axios.post(
            `${BASE_URL}account/auth/login/`,userInfo
        )
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
        
    }
}
      return ( login )
}

export default useAuthCall
