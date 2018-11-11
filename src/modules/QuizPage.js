import React, { Component } from 'react';
import styled from 'styled-components';

import Payload from '../api/Payload';
// Components
import SingleChoiceQuestion from './components/SingleChoiceQuestion';
import RangeQuestion from './components/RangeQuestion';
import ThankyouCard from './components/ThankyouCard';
import Answers from './components/Answers';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #4caf50;
  color: #fff;
  padding: 80px;
`;

// Utils
const insert = (arr, index, newItem) => [...arr.slice(0, index), newItem, ...arr.slice(index)];

class QuizPage extends Component {
  state = {
    data: [...Payload.questions],
    currentQuestion: 0,
    answers: {},
    canSeeAnswers: false,
  };

  // @for question type: single_choice, number_range
  onHandleMoveNext = () => {
    const { answers, currentQuestion } = this.state;
    if (!answers[currentQuestion]) {
      return;
    }
    this.setState(prevState => ({ currentQuestion: 1 + prevState.currentQuestion }));
  };

  // @for question type: single_choice_conditional
  onHandleSingleChoiceConditionalMoveNext = () => {
    const { data, answers, currentQuestion } = this.state;
    if (!answers[currentQuestion]) {
      return;
    }
    const { question_type: questionTypc } = data[currentQuestion];
    const { predicate, if_positive: newQuestion } = questionTypc.condition;
    const { answer: userAnswer } = answers[currentQuestion];

    if (predicate.exactEquals.includes(userAnswer)) {
      const newPayload = insert(Payload.questions, currentQuestion + 1, newQuestion);
      this.setState(prevState => ({
        data: [...newPayload],
        currentQuestion: 1 + prevState.currentQuestion,
      }));
      return;
    }
    this.setState(prevState => ({ currentQuestion: 1 + prevState.currentQuestion }));
  };

  // @for question type: single_choice, single_choice_conditional
  onHandleChangeValue = event => {
    const { value } = event.target;
    const { data, answers, currentQuestion } = this.state;
    answers[currentQuestion] = Object.assign(
      {},
      {
        id: currentQuestion,
        question: data[currentQuestion].question,
        answer: value,
      },
    );
    this.setState({ answers });
  };

  // @for question type: number_range
  onHandleChangeSliderValue = (event, value) => {
    this.onHandleChangeValue({ target: { value } });
  };

  onHandleGetResult = () => {
    this.setState(prevState => ({ canSeeAnswers: !prevState.canSeeAnswers }));
  };

  render() {
    const { data, answers, currentQuestion, canSeeAnswers } = this.state;

    const renderQuestion = ({ type }) => {
      switch (type) {
        case 'single_choice': {
          return (
            <SingleChoiceQuestion
              item={data[currentQuestion]}
              itemValue={answers[currentQuestion] ? answers[currentQuestion].answer : ''}
              onItemValueChange={this.onHandleChangeValue}
              onMoveNext={this.onHandleMoveNext}
            />
          );
        }
        case 'single_choice_conditional': {
          return (
            <SingleChoiceQuestion
              item={data[currentQuestion]}
              itemValue={answers[currentQuestion] ? answers[currentQuestion].answer : ''}
              onItemValueChange={this.onHandleChangeValue}
              onMoveNext={this.onHandleSingleChoiceConditionalMoveNext}
            />
          );
        }
        case 'number_range': {
          return (
            <RangeQuestion
              item={data[currentQuestion]}
              itemValue={answers[currentQuestion] ? answers[currentQuestion].answer : 0}
              onItemValueChange={this.onHandleChangeSliderValue}
              onMoveNext={this.onHandleMoveNext}
            />
          );
        }
        default: {
          return null;
        }
      }
    };

    const renderAnswers = Object.keys(answers).map(answer => (
      <Answers key={answers[answer].id} item={answers[answer]} />
    ));

    return (
      <Wrapper>
        {data[currentQuestion] && renderQuestion(data[currentQuestion].question_type)}
        {data[currentQuestion] === undefined && (
          <ThankyouCard canSeeAnswers={canSeeAnswers} onGetResult={this.onHandleGetResult} />
        )}
        {canSeeAnswers && renderAnswers}
      </Wrapper>
    );
  }
}

export default QuizPage;
