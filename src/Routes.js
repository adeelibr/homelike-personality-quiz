import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
const QuizPage = lazy(() => import('./modules/QuizPage'));

const Routes = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route path="/" render={props => <QuizPage {...props} />} />
        <Route exact path="/quiz" render={props => <QuizPage {...props} />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
