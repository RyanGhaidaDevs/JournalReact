import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      width: 400,
      height: 200,
      margin: 50,
      border: 5,
      borderRadius: 5,
      boxShadow: '0 3px 10px 2px rgb(192,192,192)'
    },
  title: {
    fontSize: 24,
    color: '#637299'
  },
  logs: {
    fontSize: 18,
    color: 'orange'
  },
  pos: {
    marginBottom: 12,
  },
  Delete: {
    color: "red",
    border: "groove",
    background: "white",
    width: 75
  },
  Select: {
    color: "#637299",
    border: "groove",
    background: "white",
    width: 100
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.project.name}
        </Typography>
        <Typography className={classes.logs} color="textPrimary" gutterBottom>
          Number of logs:  {props.project.logs.length}
        </Typography> 
      </CardContent>
      <CardActions>
          <div class="cardButtonParentDiv"> 
            <div class="carbButtons">  
              <Button  className={classes.Select}onClick={()=> props.handleSelect(props.project.id) }> {props.selectedProject === props.project ? "Unselect" : "Select"} </Button>
              <Button className={classes.Delete} onClick={()=> props.handleDelete(props.project.id) }> Delete </Button>
            </div>
          </div>
       </CardActions>
    </Card>
  );
}
