import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import LogInActions from './actions/LogInActions';

let history = createBrowserHistory();


let jwt = localStorage.getItem('jwt');
if (jwt) {
  LogInActions.loginUser(jwt);
}


ReactDOM.render(<Router onUpdate={() => window.scrollTo(0, 0)} history={history}>{routes}</Router>, document.getElementById('app'));