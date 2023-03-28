

import { useDispatch } from "react-redux";
import { fetchFail, fetchStart } from "../features/authSlice";
import { getSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
    const dispatch =useDispatch()
    const {axiosWithToken} = useAxios()
    
    
    const getStockData = async(url) =>{
      dispatch(fetchStart())

      try {

        const {data} = await axiosWithToken (`stock/${url}/`)
        dispatch(getSuccess({data,url}))

      } catch (error) {
        console.log(error)
        dispatch(fetchFail())
      }	
    }
    const deleteStockData = async(url,id) =>{

      dispatch(fetchStart())

      try {
        await axiosWithToken.delete(`stock/${url}/${id}/`)
        dispatch(getStockData({url}))

      } catch (error) {
        console.log(error)
        dispatch(fetchFail())
      }	
    }
  
      return { getStockData, deleteStockData }
}

export default useStockCall
