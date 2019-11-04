import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from  '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const NavBar = (props) => {
  return(
    <div>
      <AppBar position="static" >
        <ToolBar> 
          <Typography variant="h3" color="inherit">
            Bug Logger
          </Typography>
          <Typography variant="h5" color="inherit">
            Logged in as: {props.user.email}
          </Typography>
          <Button >
            
          </Button>
        </ToolBar>
      </AppBar> 
    </div>
  )
}

export default NavBar;