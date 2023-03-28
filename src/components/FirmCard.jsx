
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle, flex } from '../styles/globalStyle';
import useStockCall from '../hooks/useStockCall';



export default function FirmCard({firm}) {
    const {image,name,id,phone,address} = firm
    const {deleteStockData} = useStockCall()
  return (
    <Card
    sx={{p:2, width: "300px", height: "400px", display: "flex", flexDirection:"column", justifyContent:"space-between" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="firm-image"
        height="130"
        image={image}
        sx={{p:1, objectFit: "contain" }}
      />
      <Typography variant="body2" color="text.secondary">
          {phone}
        </Typography>
      <CardActions sx={flex}>
        <EditIcon sx={btnStyle}/>
        <DeleteOutlineIcon sx={btnStyle} 
        onClick={() => deleteStockData("firms", id)} />
      </CardActions>
    </Card>
  );
}