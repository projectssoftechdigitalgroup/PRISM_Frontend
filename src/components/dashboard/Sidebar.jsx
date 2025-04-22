import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaRegUser, FaUser } from "react-icons/fa";
import { MdRecommend } from "react-icons/md";
import CategoryCard from './recommendations/CategoryCards';
import Profile from './profile/Profile';
import { CiLogout } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Profile');
const navigate=useNavigate()
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
      <div className='min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 text-white '>
      <Toolbar />
        <img src="/logo.png" alt="" className="w-30 -mt-20 ms-10"/>
      <Divider />
      
      <List className='!mt-20 '>
        {['Profile', 'Recommendations'].map((text, index) => (
          <ListItem key={text} disablePadding className={`mb-6 ${activeTab==text ?'bg-white text-blue-900' :''} `} onClick={()=>setActiveTab(text)}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <FaRegUser color={`${activeTab==text ?'darkblue' :'white'}`} size={'20px'} className={`${activeTab==text ?' text-blue-900' :''}`}/> : <MdRecommend color={`${activeTab==text ?'darkblue' :'white'}`} size={'30px'} className='hover:bg-white hover:text-blue-900'/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            background: 'linear-gradient(to bottom right, #2d3748, #1a202c)',
            color: 'white',
            boxShadow: 'none'
          }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='absolute position-right right-16 flex gap-2 cursor-pointer' onClick={()=>navigate('/')}>
            <CiLogout className='mt-2'/>
          Logout
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
   
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1,p:10, py: '15%', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {activeTab=='Recommendations'?
          <>
    
        <CategoryCard/>
  </>:<>
  <Profile/>
  </>
        }

      </Box>
    </Box>
  );
}


export default SideBar;
