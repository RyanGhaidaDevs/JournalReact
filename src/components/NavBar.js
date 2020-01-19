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
import BugReportIcon from '@material-ui/icons/BugReport';
import Registration from './auth/Registration';

function getModalStyle() {
  const top = 40 
  const left = 40 

  return {
    top: `${top}%`,
    left: `${left}%`,
    height: `25%`
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
  NavBarButtons: {
    marginRight: 12,
    marginLeft: 12,
    fontSize: '14px',
    padding: '10px',
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
    console.log("clicked")
    setOpen(false);
  };

  const logOut = () => {
    props.handleLogout();
    props.history.push("/alllogs");
  }

  return(
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <BugReportIcon   fontSize="large" onClick={()=> props.history.push("/alllogs")}/>
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          BugLogger 
        </Typography>

        {props.projectSelected ?  
          <Typography variant="h4" className={classes.title}>
            {props.projectSelected.name}  
          </Typography>
          : 
           ""
           }

        <span className={classes.NavBarButtons}>
        {props.user.email ? 
        <div>
          {props.projectSelected != false ? 
            <Button onClick={()=> props.history.push("/addLog")} className={classes.NavBarButtons} color="inherit" aria-label="Add">
              Add a Bug Log
            </Button>
          : 
           "" 
          }

          <Button  onClick={()=> props.history.push("/homepage")} className={classes.NavBarButtons} color="inherit" aria-label="About">
            Home
          </Button>
          <Button id="bugLogs" onClick={()=> props.history.push("/logs")} className={classes.NavBarButtons} color="inherit" aria-label="View">
            View Your Bug Logs
          </Button>
          <Button onClick={()=> props.history.push("/addProject")} className={classes.NavBarButtons} color="inherit" aria-label="About">
            Add Project
          </Button> 
          </div>
          : 
          "" 
          }
        </span>
        <Typography variant="h4" >
          | 
        </Typography>

        {props.user.email ? 
        <div> 
          <Button style={ {fontSize: '14px'} } color="inherit" onClick={logOut}>
          Logout
          </Button> 
          <Button style={ {fontSize: '14px'} } color="inherit" onClick={()=> props.history.push("/homepage")}>
            { props.user.email }
          </Button> 
        </div>  
        : 
        <div> 
            <Button  onClick={handleOpen} style={ {fontSize: '14px'} } color="inherit">
              Login
            </Button> 
            <Button onClick={()=> props.history.push("/registration")} style={ {fontSize: '14px'} } color="inherit">
              Register
            </Button> 
        </div> 
        }
      </Toolbar>
    </AppBar>

    <Modal aria-labelledby="login" aria-describedby="login-modal" open={open}>
      <div style={modalStyle} className={classes.paper}>
      <h2> Welcome back! Please login with your email and password below: </h2>
        <Login handleLogin={props.handleLogin} />
        <Button onClick={handleClose}> X </Button>
      </div>
    </Modal>
  </div>
  );
}

export default NavBar; 