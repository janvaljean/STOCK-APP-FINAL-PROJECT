
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";

const useAuthCall = () => {
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const BASE_URL = "https://14107.fullstack.clarusway.com/"
    
    
    const login = async (userInfo) => {
      console.log(userInfo)
      dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      )
      dispatch(loginSuccess(data))
      
      navigate("/stock")
      console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    }
  }
    const register = async (userInfo) => {
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
    dispatch(fetchStart())
    try {
      await axios.post(`${BASE_URL}account/auth/logout/`)
      dispatch(logoutSuccess())
     
      navigate("/")
    } catch (err) {
      dispatch(fetchFail())
      
    }
  }
      return { login, register, logout }
}

export default useAuthCall
