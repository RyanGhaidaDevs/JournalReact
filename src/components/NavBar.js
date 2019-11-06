import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Modal from '@material-ui/core/Modal';
import Login from './auth/Login';
import Registration from './auth/Registration';

function getModalStyle() {
  const top = 40 
  const left = 40 

  return {
    top: `${top}%`,
    left: `${left}%`,
    height: `15%`
    // transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 4),
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [newUser, setNewUser] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          BugLogger
        </Typography>

        {props.user.email ? 
        <Button style={ {fontSize: '14px'} } color="inherit" onClick={()=> props.handleLogout()}>
        Logout
        </Button> 
        : 
        <div> 
            <Button  onClick={handleOpen} style={ {fontSize: '14px'} } color="inherit">
            Login
            </Button> 
            <Button style={ {fontSize: '14px'} } color="inherit">
            Register
            </Button> 
        </div> 
        }
      </Toolbar>
    </AppBar>

    <Modal
        
        aria-labelledby="login"
        aria-describedby="login-modal"
        open={open}
        onClose={handleClose}
      >
        
        <div style={modalStyle} className={classes.paper}>
       
        <h2> Welcome back! Please login with your email and password below: </h2>
        
        <Login handleSuccesfulAuth={props.handleSuccesfulAuth}/>
        </div>
    </Modal>
    
  </div>
  );
}

export default NavBar;