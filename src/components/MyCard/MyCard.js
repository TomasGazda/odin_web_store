import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


const MyCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={props.name}
        height="140"
        image={props.logo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant='subtitle1' component="div">
          {props.price} $
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.memo}
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled size="small">Detail</Button>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  )
}

export default MyCard