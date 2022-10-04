import React from 'react'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import StackItem from './StackItem';



import Box from '@mui/material/Box';

const RightBar = (props) => {
  return (
    <Box sx={{ flex:1,justifyContent:"center",alignItems:"stretch",mb:2}}>
        <Grid container direction="column" justifyContent="center" alignItems="stretch" spacing={0.5} sx={{minHeight:'100%',p:2}}>

            <Grid key={1} item xs={10} >
                <Stack direction="column" justifyContent="center" alignItems="stretch" spacing={0.5}>
                        
                        <StackItem></StackItem>
                        <StackItem></StackItem>
                </Stack>
            </Grid>
            <Grid key={2} item xs={2} >
                
            </Grid>
        </Grid>
    </Box>
  )
}

export default RightBar