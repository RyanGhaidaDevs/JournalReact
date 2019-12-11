import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    maxWidth: 600,
    border: "groove",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 30px',
  },
  title: {
    fontSize: 24,
    color: 'red'
  },
  pos: {
    marginBottom: 12,
  },
  Delete: {
    color: "red",
    border: "groove"
  },
  Edit: {
    color: "orange",
    border: "groove",
    background: "grey",
    minWidth: 150
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.project.name}
        </Typography>
       
        
       
      </CardContent>
      <CardActions>
          <div> 
            <Button  onClick={()=> props.handleSelect(props.project.id) }> Select </Button>
          </div>
       </CardActions>
    </Card>
  );
}
