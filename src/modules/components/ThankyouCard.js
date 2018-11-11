import React from 'react';
import PropTypes from 'prop-types';
// Material
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 375,
    margin: '0 auto',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

const ThankyouCard = ({ classes, canSeeAnswers, onGetResult }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Your result has been recorded
        </Typography>
        <Typography variant="h5" component="h2">
          Thank You
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          The team will get back to you with result
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onGetResult}>
          {canSeeAnswers ? 'Hide Answers' : 'See Answers'}
        </Button>
      </CardActions>
    </Card>
  );
};

ThankyouCard.propTypes = {
  classes: PropTypes.object, // material ui injected
  canSeeAnswers: PropTypes.bool,
  onGetResult: PropTypes.func,
};

export default withStyles(styles)(ThankyouCard);
