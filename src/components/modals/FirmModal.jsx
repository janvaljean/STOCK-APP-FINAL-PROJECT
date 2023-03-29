import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { modelStyle } from '../../styles/globalStyle';
import  TextField  from '@mui/material/TextField';
import { useState } from 'react';
import useStockCall from '../../hooks/useStockCall';

const initialInfo = {
        name: "",
        phone: "",
        address: "",
        image: "",
    }

export default function FirmModal({handleClose, open}) {
    const [info, setInfo] = useState(initialInfo)
    
    const {postStockData} = useStockCall()

    const handleChange = (e) => {
        
        const{name,value} = e.target
        setInfo({...info, [name] : value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        postStockData("firms", info)
        handleClose()
        setInfo(initialInfo)
    }
  

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
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
            label="Phone Number"
            name="phone"
            id="phone"
            type="text"
            variant="outlined"
            value={info?.phone}
            onChange={handleChange}
            
            />
            <TextField
            label="Address"
            name="address"
            id="address"
            type="text"
            variant="outlined"
            value={info?.address}
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