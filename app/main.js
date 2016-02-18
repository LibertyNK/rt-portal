import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';
import LogInActions from './actions/LogInActions';

// let jwt = localStorage.getItem('token');
// console.log(jwt);
// if (jwt) {
//   LoginActions.logIn(jwt);
// }

let history = createBrowserHistory();

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));