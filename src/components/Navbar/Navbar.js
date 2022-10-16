import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { appConst } from '../../app.consts';
import { mainNavbarItems } from './consts/navbarlist';
import { navbarStyles } from './styles';
import { Link as RouterLink} from 'react-router-dom';
import Button from '@mui/material/Button';




const Navbar = (props) => {
    //const navigate = useNavigate();
    const toggleLeftDrawer = (open) => (event) => {
      console.log("here");
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
     props.setLeftBarVisible(open);
    };


  return (
    <div>
        {/* Left Bar mobile size */}
        <Drawer
              anchor="left"
              open={props.leftBar}
              onClose={toggleLeftDrawer(false)}
              sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: appConst.drawerWidth, },
              }}
              >
                <Box
                  sx={{ width:appConst.drawerWidth }}
                  role="presentation"
                  onClick={toggleLeftDrawer(false)}
                  onKeyDown={toggleLeftDrawer(false)}
                >
                  <Toolbar>
                    
                  </Toolbar>
                  <Divider />
                  <List sx={navbarStyles.list}>
                        {mainNavbarItems.map((item) =>(
                            <ListItem button key={item.id}>  
                             <Button component={RouterLink} to={item.route}>
                                   {item.name}</Button>
                           </ListItem>
                      ))}
                  </List>
                </Box>
        </Drawer>
        {/* Left Bar desktop size */}
        <Drawer

              variant="permanent"
              anchor="left"
              open={true}
              sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: appConst.drawerWidth,backgroundColor:appConst.secondaryMain,overflowX:"hidden"},
              }}
              >
                <Box
                  sx={{ width:appConst.drawerWidth }}
                  role="presentation"
                >
                  <Toolbar
                  sx={{ backgroundColor:appConst.primaryMain,color:"white" }}
                  >
                    <Typography variant="h6" component={RouterLink} to="/"  sx={{ flexGrow: 1,color:appConst.secondaryMain,textDecoration:"none"}}>
                        {appConst.companyName}
                    </Typography>
                  </Toolbar>
                  <Divider />
                  <List sx={navbarStyles.list}>
                        {mainNavbarItems.map((item) =>(
                            <ListItem button key={item.id} >
                            
                              <ListItemIcon sx={navbarStyles.icons}>
                                {item.icon}
                              </ListItemIcon>
                              <Button component={RouterLink} to={item.route}>
                                   {item.name}</Button>

                        </ListItem>
                      ))}
                  </List>
                </Box>
        </Drawer>      
    </div>
  )
}

export default Navbar