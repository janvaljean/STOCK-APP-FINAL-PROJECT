
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";

const useAuthCall = () => {
    const dispatch =useDispatch()
    const navigate =useNavigate()
    
    
    const login = async (userInfo) => {
    const BASE_URL = "https://14107.fullstack.clarusway.com/"
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
        )
        console.log(data)
      dispatch(loginSuccess(data))
      
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }
    const register = async (userInfo) => {
    const BASE_URL = "https://14107.fullstack.clarusway.com/"
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
        )
        console.log(data)
      dispatch(registerSuccess(data))
      navigate("/stock")
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }
  const logout = async () => {
    const BASE_URL = "https://14107.fullstack.clarusway.com/"
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/logout/`,
        )
      dispatch(logoutSuccess(data))
      navigate("/")

    } catch (error) {
      dispatch(fetchFail())
      
    }
  }
      return ( login , register, logout)
}

export default useAuthCall
