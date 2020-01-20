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
    minHeight: 200,
    border: "groove",
    margin: 50,
  },
  title: {
    fontSize: 24,
    color: 'black'
  },
  description: {
    fontSize: 16,
    color: 'grey'
  },
  languages: {
    fontSize: 14,
    color: 'grey'
  },
  solution: {
    fontSize: 16,
    color: 'blue'
  },
  notes: {
    fontSize: 12,
    color: 'grey'
  },
  user: {
    fontSize: 14,
    color: 'orange'
  },
  date: {
    fontSize: 12,
    color: 'green'
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
  Edit: {
    color: "orange",
    border: "groove",
    background: "grey",
    width: 75,
    fontSize: "12",
  }
});

export default function SimpleCard(props) {
  
  const classes = useStyles();
 
  return (
    <Card className={classes.card}>
      <CardContent>
      <Typography className={classes.user} color="textPrimary" gutterBottom>
          User: {props.log.user_email}
        </Typography>
        <Typography className={classes.date} color="textPrimary" gutterBottom>
          Created: {props.log.created_at.split("T")[0]}
        </Typography>
        <Typography className={classes.date} color="textPrimary" gutterBottom>
          Last Updated: {props.log.updated_at.split("T")[0]}
        </Typography>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Title: {props.log.bugTitle}
        </Typography>
        <Typography className={classes.description} variant="h5" component="h4">
         Description: {props.log.bugDescription}
        </Typography>
        <Typography className={classes.languages} >
         Languages: {props.log.languagesInvolved}
        </Typography>
        <Typography className={classes.solution}>
          Solution: {props.log.solution}
        </Typography>
        <Typography className={classes.notes} >
         Notes: {props.log.notes}
        </Typography>
      </CardContent>
      {props.log.user_email === props.user ? 
         <CardActions>
           <div class="cardButtonParentDiv"> 
        {props.class === "edit" ? 
          <div class="carbButtons">  
            <Button className={classes.Delete} onClick={()=> props.handleDelete(props.log.id) }> Delete </Button>
            <Button className={classes.Delete} onClick={()=> props.handleDelete(props.log.id) }> Delete </Button>
          </div> 
          : 
          <div class="carbButtons"> 
            <Button className={classes.Edit} onClick={()=> props.handleEdit(props.log, props) }> Edit </Button>
            <Button className={classes.Delete} onClick={()=> props.handleDelete(props.log.id) }> Delete </Button>
          </div>}
          </div> 
       </CardActions> 
      
       :
        "" }
      
    </Card>
  );
}
