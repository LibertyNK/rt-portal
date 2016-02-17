import React from 'react';
import LogInStore from '../stores/LogInStore';

export default (ComposedComponent) => {
	return class AuthenticatedComponent extends React.Component {

		constructor(props) {
			super(props);
			this.state = this.getLoginState();
	
		}

		onChange() {
			this.setState(this.getLoginState());
		}

		componentDidMount() {
	    	LoginStore.addChangeListener(this.onChange.bind(this));
	    }

	    componentWillUnmount() {
	    	LoginStore.removeChangeListener(this.onChange.bind(this));
	    }

		getLoginState() {
			console.log(LogInStore.user);
			return {
				userLoggedIn: LogInStore.isLoggedIn(),
				user: LogInStore.user,
				jwt: LogInStore.jwt
			};
		}

		render() {
			return (
				<ComposedComponent
				{...this.props}
				user={this.state.user}
				jwt={this.state.jwt}
				userLoggedIn={this.state.userLoggedIn} />
				);
			}
		}
};