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

export default function SimpleCard(props) {

  console.log(props)

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.log.bugTitle}
        </Typography>
        <Typography variant="h5" component="h2">
        {props.log.bugDescription}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {props.log.languagesInvolved}
        </Typography>
        <Typography variant="body2" component="p">
          {props.log.solution}
          <br />
          {'--------------'}
          <br />
          {'Notes for bug:'}
          <br />
          {props.log.notes}
        </Typography>
      </CardContent>
      <CardActions>
        {props.class === "edit" ? 
          <div> 
            <Button className={classes.Delete} onClick={()=> props.handleDelete(props.log.id) }> Delete </Button>
            <Button className={classes.Delete} onClick={()=> props.handleDelete(props.log.id) }> Delete </Button>

          </div> 
          : 
          <div> 
            <Button className={classes.Edit} onClick={()=> props.handleEdit(props.log) }> Edit </Button>
            <Button className={classes.Delete} onClick={()=> props.handleDelete(props.log.id) }> Delete </Button>
          </div>}
       </CardActions>
    </Card>
  );
}
