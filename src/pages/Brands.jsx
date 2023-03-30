import { Button, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BrandCard from '../components/BrandCard'
import BrandModal from '../components/modals/BrandModal'
import useStockCall from '../hooks/useStockCall'
import { flex } from '../styles/globalStyle'

const Brands = () => {
  const initialInfo = {
          name: "",
          image: ""
      }
    // const {token} = useSelector((state) => state.auth)
    // const dispatch = useDispatch()
    // const getBrands = async() =>{
      
    //   const BASE_URL = "https://14107.fullstack.clarusway.com/"
      
    //   dispatch(fetchStart())
    //   const url = "brands"

    //   try {
    //     const {data} = await axios(`${BASE_URL}stock/brands/`, {headers: {Authorization: `Token ${token}`}})
    //     console.log(data)
    //     dispatch(getSuccess({data,url}))
    //   } catch (error) {
    //     dispatch(fetchFail())
    //   }	
    // }
   const { getStockData } = useStockCall()
   const {brands} = useSelector((state) => state.stock)
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [info, setInfo] = useState(initialInfo)

    useEffect(() => {
    // getBrands()
    getStockData("brands")
  }, [])
    console.log(brands)

  return (
    <div>
      <Typography variant="h4" color="error">Brands</Typography>
      <Button variant="contained" onClick={handleOpen}>New Brands</Button>
      <BrandModal handleClose={handleClose} handleOpen={handleOpen} open={open} setInfo={setInfo} info={info} initialInfo={initialInfo}/>
      <Grid container sx={flex}> 
        {brands?.map((brand) => (
          <Grid item key={brand.id}>
            <BrandCard brand={brand} handleOpen={handleOpen}  setInfo={setInfo} info={info}/>
          </Grid>
        ))}
      </Grid>
      
    </div>
  )
}



export default Brands

