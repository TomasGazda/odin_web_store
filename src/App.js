
import { useState } from 'react';
import Topbar from './components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import RightBar from './components/RightBar/RightBar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { appConst } from './app.consts';
import Navbar from './components/Navbar/Navbar';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: appConst.primaryMain,
    },
    secondary: {
      main: appConst.secondaryMain,
    },
  },

});



function App() {
  const [leftBarVisible,setLeftBarVisible] = useState(false);
  const [rightBarVisible,setRightBarVisible] = useState(false);
  const [shoppingCart,setShoppingCart] = useState([]);

  const toggleLeftDrawer = (open) => (event) => {
    console.log("here");
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

   setLeftBarVisible(left => open);
  };
  const toggleRightDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

   setRightBarVisible(right => open);
  };
  
  

  return (
    <Box sx={{height:'100vh', width:'100vw',display:'flex',flexDirection:'column'}}>   
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Topbar drawer = {appConst.drawerWidth} openMenu = {()=>{setLeftBarVisible(leftBarVisible =>!leftBarVisible)}} openCart={()=>{setRightBarVisible(rightBarVisible=>!rightBarVisible)}} items={shoppingCart.length}></Topbar>
          <Navbar leftBar= {leftBarVisible} setLeftBarVisible={(open) =>{setLeftBarVisible(left =>open)} }></Navbar>
    
          <Drawer
                anchor="right"
                open={rightBarVisible}
                onClose={toggleRightDrawer(false)}
                >
                  <Box
                    sx={{ width: '375px' }}
                    role="presentation"
                    onClick={toggleRightDrawer(false)}
                    onKeyDown={toggleRightDrawer(false)}
                  >
                    <RightBar shoppingCart={shoppingCart}/>
                  </Box>
          </Drawer>
          
          <Box component="main"
            onClick={toggleLeftDrawer(false)}
            onKeyDown={toggleLeftDrawer(false)}
            sx={{
              display:'flex',
              flex:1,
              overflowY:'auto',
              width: { sm: `calc(100% - ${appConst.drawerWidth}px)` },
              ml: { sm: `${appConst.drawerWidth}px` },
              
            }}>
            <Outlet/>
          </Box>
          
        
      </ThemeProvider>
    </Box>
  );
}

export default App;
