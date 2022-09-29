
import { useState } from 'react';
import Topbar from './components/Topbar/Topbar';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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
    <Box>   
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Topbar drawer = {appConst.drawerWidth} openMenu = {()=>{setLeftBarVisible(leftBarVisible =>!leftBarVisible)}} openCart={()=>{setRightBarVisible(rightBarVisible=>!rightBarVisible)}}></Topbar>
        <Navbar leftBar= {leftBarVisible} setLeftBarVisible={(open) =>{setLeftBarVisible(left =>open)} }></Navbar>
  
        <Drawer
              anchor="right"
              open={rightBarVisible}
              onClose={toggleRightDrawer(false)}
              >
                <Box
                  sx={{ width: appConst.drawerWidth }}
                  role="presentation"
                  onClick={toggleRightDrawer(false)}
                  onKeyDown={toggleRightDrawer(false)}
                >
                  <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
        </Drawer>
        
        <Box
          onClick={toggleLeftDrawer(false)}
          onKeyDown={toggleLeftDrawer(false)}
        sx={{
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
