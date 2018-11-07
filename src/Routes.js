import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

// Routes
const QuizPage = lazy(() => import('./modules/QuizPage'));

const Routes = () => {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route path="/" component={QuizPage} />
        <Route exact path="/quiz" component={QuizPage} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
