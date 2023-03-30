import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle, flex } from '../styles/globalStyle';
import useStockCall from '../hooks/useStockCall';




export default function BrandCard({brand, setInfo,handleOpen }) {

    const {image,name,id} = brand
    const {deleteStockData} = useStockCall()

  return (

    <Card
    sx={{p:2, width: "300px", height: "400px", display: "flex", flexDirection:"column", justifyContent:"space-between" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="brand-image"
        height="130"
        image={image}
        sx={{p:1, objectFit: "contain" }}
      />
      <CardActions sx={flex}>

        <EditIcon sx={btnStyle} onClick={()=>{
          handleOpen()
          setInfo(brand)
        } }/>

        <DeleteOutlineIcon sx={btnStyle} 
        onClick={() => deleteStockData("brands", id)} />
        
      </CardActions>
    </Card>
  );
}