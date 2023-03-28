import { Button, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import useStockCall from '../hooks/useStockCall'


const Firms = () => {
    // const {token} = useSelector((state) => state.auth)
    // const dispatch = useDispatch()
    // const getFirms = async() =>{
      
    //   const BASE_URL = "https://14107.fullstack.clarusway.com/"
      
    //   dispatch(fetchStart())
    //   const url = "firms"

    //   try {
    //     const {data} = await axios(`${BASE_URL}stock/firms/`, {headers: {Authorization: `Token ${token}`}})
    //     console.log(data)
    //     dispatch(getSuccess({data,url}))
    //   } catch (error) {
    //     dispatch(fetchFail())
    //   }	
    // }
   const { getStockData } = useStockCall()

    useEffect(() => {
    // getFirms()
    getStockData("firms")
  }, [])
  

  return (
    <div>
      <Typography variant="h4" color="error">Firms</Typography>
      <Button variant="contained">New Firms</Button>
    </div>
  )
}



export default Firms
