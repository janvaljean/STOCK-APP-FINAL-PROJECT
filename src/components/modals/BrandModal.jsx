import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modelStyle } from '../../styles/globalStyle';
import  TextField  from '@mui/material/TextField';
import useStockCall from '../../hooks/useStockCall';



export default function BrandModal({handleClose, open,info, setInfo, initialInfo }) {
   
    
    const {postStockData, putStockData} = useStockCall()

    const handleChange = (e) => {
        
        const{name,value} = e.target
        setInfo({...info, [name] : value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(info.id ){putStockData("brands",info)}
        else{ postStockData("brands", info)}
        handleClose()
        setInfo(initialInfo)
    }
  

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
            handleClose()
            setInfo(initialInfo)
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modelStyle}>
          <Box onSubmit={handleSubmit} component="form" sx={{ display: "flex", flexDirection: "column", gap: 2}}>
            <TextField
            label="Firm Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name}
            onChange={handleChange}
            
            />
            
            <TextField
            label="Image"
            name="image"
            id="image"
            type="text"
            variant="outlined"
            value={info?.image}
            onChange={handleChange}
            />
            <Button
          variant="contained"
          type="submit"
        >
          Submit
        </Button>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}