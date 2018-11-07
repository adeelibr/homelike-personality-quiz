import React, { Component } from 'react';

import Payload from '../api/Payload';
// Components
import SingleChoiceQuestion from './components/SingleChoiceQuestion';

class QuizPage extends Component {
  state = {
    data: [...Payload.questions],
    currentQuestion: 0,
  };

  onHandleMoveNext = () => {
    this.setState(prevState => ({
      currentQuestion: 1 + prevState.currentQuestion,
    }));
  };

  render() {
    const { data, currentQuestion } = this.state;
    return (
      <div>
        {data[currentQuestion].question_type.type === 'single_choice' && (
          <SingleChoiceQuestion item={data[currentQuestion]} onMoveNext={this.onHandleMoveNext} />
        )}
      </div>
    );
  }
}

export default QuizPage;
