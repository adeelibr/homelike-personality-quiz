import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Material
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #4caf50;
  color: #fff;
  padding: 80px;
`;

const styles = {
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
};

const SingleChoideQuestion = ({ item, onMoveNext, classes }) => {
  return (
    <Wrapper>
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
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onMoveNext}>
            Next Question
          </Button>
        </CardActions>
      </Card>
    </Wrapper>
  );
};

SingleChoideQuestion.propTypes = {
  item: PropTypes.object,
  onMoveNext: PropTypes.func,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleChoideQuestion);
