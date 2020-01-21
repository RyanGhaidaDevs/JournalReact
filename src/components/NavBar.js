import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import Login from './auth/Login';
import BugReportIcon from '@material-ui/icons/BugReport';
import Registration from './auth/Registration';

function getModalStyle() {
  const top = 40 
  const left = 42

  return {
    top: `${top}%`,
    left: `${left}%`,
    height: `30%`
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
    backgroundColor: 'white',
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
  loginCloseButton: {
    marginLeft: -10,
    marginTop: -20,
    fontSize: '24px',
    color: 'grey'
  },
  navbar:{
    backgroundColor: '#637299'
  },
  bugButton: {
    color: 'orange'
  },
  userEmail: {
    color: 'orange'
  }
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // const [newUser, setNewUser] = React.useState(false);

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
    <AppBar className={classes.navbar} position="static">
      <Toolbar >
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <BugReportIcon className={classes.bugButton}  fontSize="large" onClick={()=> props.history.push("/alllogs")}/>
        </IconButton>
        <Typography variant="h4" className={classes.title}>
          BugLogger 
        </Typography>

        {props.projectSelected && props.user ?  
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
            View/Select Project
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
          <Button  className={classes.userEmail} style={ {fontSize: '14px'} } color="inherit" onClick={()=> props.history.push("/homepage")}>
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
        <Button className={classes.loginCloseButton} onClick={handleClose}> X </Button>
        <Login  onClick={handleClose} handleLogin={props.handleLogin} />
      </div>
    </Modal>
  </div>
  );
}

export default NavBar; 