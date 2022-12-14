import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button  from '@mui/material/Button';
import { useContext } from 'react';
import { CartContext } from '../Context/cartContext';





const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
  

const StackItem = (props) => {
  const [cart, setCart] = useContext(CartContext);

  return (
    <Paper
      sx={{
        p:0,
        pt:2,
        mt:4,
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={props.image} />
          </Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {props.name}
              </Typography>
            </Grid>
            <Grid item justifyContent="end">
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Button onClick={()=>setCart(cart => cart.filter(x => {return x.id!==props.id}))}>Remove</Button>
                
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div" sx={{pr:1}}>
              {props.price} $
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default StackItem