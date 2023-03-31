import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useStockCall from '../hooks/useStockCall';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import ProductModal from '../components/modals/ProductModal';



const Products = () => {
  
const columns = [
  { field: 'id', headerName: '#',maxWidth: 70, minWidth: 40, flex: 1,headerAlign: 'center',
    align: 'center',},
  {
    field: 'category',
    headerName: 'Category',
    headerAlign: 'center',
    align: 'center',
    minWidth: 150,
    flex: 3,
  },
  {
    field: 'brand',
    headerName: 'Brand',
    headerAlign: 'center',
    align: 'center',
    minWidth: 150,
    flex: 2,
  },
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    minWidth: 100,
    flex: 2,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    headerAlign: 'center',
    align: 'center',
    minWidth: 50,
    flex: 0.7,
  },
   {
    field: 'actions',
    headerName: 'Actions',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    maxWidth: 80,
    flex:1
  },
];
    const initialInfo = {
          name: "",
          phone: "",
          address: "",
          image: "",
    }

   const { getStockData } = useStockCall()
   const {products} = useSelector((state) => state.stock)
   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   const [info, setInfo] = useState(initialInfo)

    useEffect(() => {
      getStockData("products")
  }, [])
    console.log(products)
  return (
    <div>

    <Typography variant="h4" color="error">Products</Typography>
      <Button variant="contained" onClick={handleOpen}>New Firms</Button>
      <ProductModal handleClose={handleClose} handleOpen={handleOpen} setInfo={setInfo} info={info} initialInfo={initialInfo}/>
  
    <Box sx={{ width: '100%' }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>

    </div>

  )}   
export default Products
