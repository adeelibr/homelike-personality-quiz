import React from 'react';
import PropTypes from 'prop-types';

// Material
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    width: 375,
    margin: `${theme.spacing.unit}px auto`,
  },
});

const Answers = ({ item, classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.question}
        </Typography>
        <Typography color="textSecondary">{item.answer}</Typography>
      </CardContent>
    </Card>
  );
};

Answers.propTypes = {
  item: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Answers);
