import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';

import ChallengeListPage from './components/ChallengeListPage';
import ChallengePage from './components/ChallengePage';

import LoginRedirectLoader from './components/LoginRedirect';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={ChallengeListPage}/>
        <Route path="challenge" component={ChallengePage}/>
        <Route path="challenge/:id" component={ChallengePage}/>
        <Route path="/auth/github/callback" component={LoginRedirectLoader}/>
    </Route>
);
