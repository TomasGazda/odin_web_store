import Box from '@mui/material/Box';
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  StyledBadge from '@mui/material/Badge';
import { appConst } from '../../app.consts';


const Topbar = (props) => {
  return (
    <div>
      <Box sx={{ flex: 1,}}>
      <AppBar 
      position="static"
      sx={{
        width: { sm: `calc(100% - ${props.drawer}px)` },
        ml: { sm: `${props.drawer}px` },
      }}
      >
        <Toolbar
        sx={{justifyContent:{sm:"flex-end"}}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2,
            display: { xs: 'block', sm: 'none' }, }}
            onClick = {props.openMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ display: { xs: 'block', sm: 'none' },flexGrow: 1}}>
            {appConst.companyName}
          </Typography>
          
            <div>
              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.openCart}
                color="inherit"
              >
                <StyledBadge badgeContent={props.items} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
                
              </IconButton>

            </div>
          
        </Toolbar>
      </AppBar>

      </Box>
    </div>
  )
}

export default Topbar