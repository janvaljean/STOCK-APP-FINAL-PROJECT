
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import { getSuccess } from "../features/stockSlice";

const useStockCall = () => {
    const {token} = useSelector((state=> state.auth))
    const dispatch =useDispatch()
    
    
    const getStockData = async(url) =>{
      const BASE_URL = "https://14107.fullstack.clarusway.com/"

      dispatch(fetchStart())

      try {
        const {data} = await axios(`${BASE_URL}stock/${url}/`,
         {headers: {Authorization: `Token ${token}`},})
        dispatch(getSuccess({data,url}))

      } catch (error) {
        console.log(error)
        dispatch(fetchFail())
      }	
    }
    const deleteStockData = async(url,id) =>{
      const BASE_URL = "https://14107.fullstack.clarusway.com/"

      dispatch(fetchStart())

      try {
        await axios.delete(`${BASE_URL}stock/${url}/${id}/`,
         {headers: {Authorization: `Token ${token}`},})
        dispatch(getStockData({url}))

      } catch (error) {
        console.log(error)
        dispatch(fetchFail())
      }	
    }
  
      return { getStockData, deleteStockData }
}

export default useStockCall
