import { Button, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFail, fetchStart } from '../features/authSlice'
import { getSuccess } from '../features/stockSlice'

const Firms = () => {
    const {token} = useSelector((state) => state.auth)
    //console.log(token)
    const dispatch = useDispatch()
    const getFirms = async() =>{
      
      const BASE_URL = "https://14107.fullstack.clarusway.com/"
      
      dispatch(fetchStart())
      const url = "firms"

      try {
        const {data} = await axios(`${BASE_URL}stock/firms/`, {headers: {Authorization: `Token ${token}`}})
        console.log(data)
        dispatch(getSuccess({data,url}))
      } catch (error) {
        dispatch(fetchFail())
      }	
    }

  useEffect(() => {
    getFirms()
  }, [token])
  

  return (
    <div>
      <Typography variant="h4" color="error">Firms</Typography>
      <Button variant="contained">New Firms</Button>
    </div>
  )
}



export default Firms
