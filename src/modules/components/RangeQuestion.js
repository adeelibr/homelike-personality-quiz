import React from 'react';
import PropTypes from 'prop-types';

// Material
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  slider: {
    padding: '22px 0px',
    width: 280,
  },
  answer: {
    fontSize: 32,
  },
};

const SingleChoideQuestion = ({ item, itemValue, onItemValueChange, onMoveNext, classes }) => {
  const { range } = item.question_type;
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
        <div className={classes.row}>
          <Slider
            classes={{ container: classes.slider }}
            min={range.from}
            max={range.to}
            step={1}
            value={Number(itemValue)}
            aria-labelledby="label"
            onChange={onItemValueChange}
          />
          <Typography className={classes.answer} color="textSecondary">
            {itemValue}
          </Typography>
        </div>
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
  itemValue: PropTypes.number,
  onItemValueChange: PropTypes.func,
  onMoveNext: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleChoideQuestion);
