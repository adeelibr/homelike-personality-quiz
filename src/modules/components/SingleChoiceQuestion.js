import React from 'react';
import PropTypes from 'prop-types';

// Material
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  card: {
    width: 375,
    margin: '0 auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
    textTransform: 'capitalize',
  },
});

const SingleChoideQuestion = ({ item, itemValue, onItemValueChange, onMoveNext, classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Question
        </Typography>
        <Typography variant="h5" component="h2">
          {item.question}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {item.category.replace('_', ' ')}
        </Typography>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Available options to choose from</FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={itemValue}
            onChange={onItemValueChange}
          >
            {item.question_type.options.map(option => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onMoveNext}>
          Next Question
        </Button>
      </CardActions>
    </Card>
  );
};

SingleChoideQuestion.propTypes = {
  currentIndex: PropTypes.number,
  item: PropTypes.object,
  itemValue: PropTypes.string,
  onItemValueChange: PropTypes.func,
  onMoveNext: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleChoideQuestion);
