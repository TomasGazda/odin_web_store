import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import StackItem from './StackItem';
import Divider from '@mui/material/Divider';
import { useContext } from 'react';
import { CartContext } from '../Context/cartContext';
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';


const RightBar = (props) => {
  const [cart] = useContext(CartContext);
  return (
    <Box sx={{ flex:1,justifyContent:"center",alignItems:"stretch",mb:2}}>
        <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={0.5} sx={{minHeight:'100%',p:2}}>

            <Grid key={1} item xs={10} >
                <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={0.5}>
                        {cart.map(i=>(<StackItem key={i.id} id={i.id} image={i.logo} name={i.name} price={i.price}/>))}
                </Stack>
            </Grid>
            
            <Divider>Total</Divider>
            <Grid key={2} item xs={2} >
              <Grid container alignItems="stretch">
                <Grid container item xs={12} justifyContent="space-between">
                  <Grid item xs={6}>
                      <Typography variant="body1" component="div"> SubTotal: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                        <Typography  align="right" component="div" > {cart.reduce((acc,curr)=> acc+curr.price,0).toFixed(2)} $ </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={12} justifyContent="space-between">
                <Grid item xs={6}>
                      <Typography variant="body1" component="div"> HST: </Typography>
                  </Grid>
                  <Grid item xs={6}>
                        <Typography  align="right" component="div" > {(cart.reduce((acc,curr)=> acc+curr.price,0)*0.13).toFixed(2)} $ </Typography>
                  </Grid>

                </Grid>
                <Divider variant="inset"></Divider>
                <Grid item xs={12} justifyContent="end">
                    <Typography variant="body1" align="right">  {(cart.reduce((acc,curr)=> acc+curr.price,0)*1.13).toFixed(2)} $</Typography>

                </Grid>
              </Grid>

                
            </Grid>
        </Grid>
    </Box>
  )
}

export default RightBar