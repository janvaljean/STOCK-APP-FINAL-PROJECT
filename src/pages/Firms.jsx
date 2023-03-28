import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
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
   const {firms} = useSelector((state) => state.stock)

    useEffect(() => {
    // getFirms()
    getStockData("firms")
  }, [])
    console.log(firms)

  return (
    <div>
      <Typography variant="h4" color="error">Firms</Typography>
      <Button variant="contained">New Firms</Button>

      <Grid container> 
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            
          </Grid>
        ))}
      </Grid>
      
    </div>
  )
}



export default Firms
