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
    maxWidth: 400,
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 30px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
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
          {'Notes:'}
          {props.log.notes}
        </Typography>
      </CardContent>
      <CardActions>
        <Button >Edit | Delete</Button>
      </CardActions>
    </Card>
  );
}
