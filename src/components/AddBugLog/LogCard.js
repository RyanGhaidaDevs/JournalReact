import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  card: {
    width: 400,
    minHeight: 200,
    margin: 50,
    border: 5,
    borderRadius: 5,
    boxShadow: '0 3px 10px 2px rgb(192,192,192)'
  },
  title: {
    fontSize: 24,
    color: '#637299'
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
    color: '#637299'
  },
  notes: {
    fontSize: 12,
    color: 'grey'
  },
  user: {
    fontSize: 14,
    color: 'orange'
  },
  likes: {
    fontSize: 18,
    color: 'orange',
    margin: 10
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
    width: 75,
    fontSize: "12",
  }
});

 


export default function SimpleCard(props) {

  const classes = useStyles();

  
  return (
    <Card className={classes.card}>
      <CardContent>
        
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.log.bugTitle}
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
        
        <Typography className={classes.user} color="textPrimary" gutterBottom>
         {props.log.user_email.split("@")[0]}
        </Typography>
        <div id="box">
          <ThumbUpAltIcon style={{fill: "#18727A"}} onClick={()=> props.handleLikes(props.log.id, 1)}/>
          <Typography className={classes.likes} color="textPrimary" gutterBottom>
          {props.log.likes}
          </Typography>
          <ThumbDownAltIcon style={{fill: "grey"}} onClick={()=> props.handleLikes(props.log.id, -1)}/>
        </div>
        <Typography className={classes.date} color="textPrimary" gutterBottom>
          Created: {props.log.created_at.split("T")[0]}
        </Typography>
        <Typography className={classes.date} color="textPrimary" gutterBottom>
          Last Updated: {props.log.updated_at.split("T")[0]}
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
              </div>
            }
            </div> 
          </CardActions> 
        :
        "" 
      }
    </Card>
  );
}
