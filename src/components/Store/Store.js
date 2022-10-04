import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MyCard from '../MyCard/MyCard';
import { Data } from '../../data';
import { useState,useEffect } from 'react';
import * as uuid from 'uuid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Store = (props) => {
    const result = Data.filter(item => item.category === props.catagory);
    const [data, setdata] = useState([]);
    
    useEffect(() => {
      setdata([]);
     
        for (let index = 0; index < result.length; index=index+2) {

          const firstElement = result[index];
          let secondElement = null;
          if(result.length>=index+1){secondElement = result[index+1];}
          if(firstElement !== undefined){
          setdata(data => [...data,<Grid container key={uuid.v1()}  justifyContent="center"  item xs={12} spacing={2} sx={{height:'100%',m:0}} >
          <Grid key={uuid.v1()} item xs={6} md={4}> <MyCard key={firstElement.id} name={firstElement.name} logo={firstElement.image} memo={firstElement.description} price={firstElement.price}/> </Grid>
          {secondElement != null && <Grid item xs={6} md={4}> <MyCard key={secondElement.id} name={secondElement.name} logo={secondElement.image} memo={secondElement.description} price={secondElement.price}/> </Grid>}
        </Grid>])
          }
        }
        
      
    }, [props.catagory]);


  return (
    <Box sx={{ flex:1,justifyContent:"center",alignItems:"center",mb:2}}>
    <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{minHeight:'100%',pb:4}}>
      
      {data}
    </Grid>
  </Box>
    
  )
}

export default Store