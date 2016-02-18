import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginActions from '../actions/LoginActions';

class App extends React.Component {
  render() {


// var router = Router.create({routes});
// RouterContainer.set(router);

// let jwt = localStorage.getItem('jwt');
// if (jwt) {
//   LoginActions.loginUser(jwt);
// }

 return (

   
      <div>
    	<Navbar history={this.props.history} />
        {this.props.children}

      </div>
    );
  }
}

export default App;