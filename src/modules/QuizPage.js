import React, { Component } from 'react';
import styled from 'styled-components';

import Payload from '../api/Payload';
// Components
import SingleChoiceQuestion from './components/SingleChoiceQuestion';
import ThankyouCard from './components/ThankyouCard';

const Wrapper = styled.div`
  height: 100vh;
  background-color: #4caf50;
  color: #fff;
  padding: 80px;
`;

class QuizPage extends Component {
  state = {
    data: [...Payload.questions],
    currentQuestion: 24,
    answers: {},
  };

  onHandleMoveNext = () => {
    const { answers, currentQuestion } = this.state;
    if (!answers[currentQuestion]) {
      return;
    }
    this.setState(prevState => ({
      currentQuestion: 1 + prevState.currentQuestion,
    }));
  };

  onHandleChangeValue = event => {
    const { value } = event.target;
    const { data, answers, currentQuestion } = this.state;
    answers[currentQuestion] = Object.assign(
      {},
      {
        question: data[currentQuestion].question,
        answer: value,
      },
    );
    this.setState({ answers });
  };

  render() {
    const { data, answers, currentQuestion } = this.state;
    return (
      <Wrapper>
        {data[currentQuestion] && data[currentQuestion].question_type.type === 'single_choice' && (
          <SingleChoiceQuestion
            item={data[currentQuestion]}
            itemValue={answers[currentQuestion] ? answers[currentQuestion].answer : ''}
            onItemValueChange={this.onHandleChangeValue}
            onMoveNext={this.onHandleMoveNext}
          />
        )}
        {data[currentQuestion] && data[currentQuestion].question_type.type !== 'single_choice' && (
          <button
            type="button"
            onClick={() => {
              this.setState(prevState => ({
                currentQuestion: 1 + prevState.currentQuestion,
              }));
            }}
          >
            Skip
          </button>
        )}
        {data[currentQuestion] === undefined && <ThankyouCard />}
      </Wrapper>
    );
  }
}

export default QuizPage;
