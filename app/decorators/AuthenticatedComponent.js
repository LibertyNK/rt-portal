import React from 'react';
import LogInStore from '../stores/LogInStore';

export default (ComposedComponent) => {
	return class AuthenticatedComponent extends React.Component {


		constructor(props) {
			super(props);
			this.state = LogInStore.getState();
			this.onChange = this.onChange.bind(this);
	
		}

		onChange() {
			this.setState(this.getLoginState());
		}

		componentDidMount() {
	    	LogInStore.listen(this.onChange);
	    }

	    componentWillUnmount() {
	    	LogInStore.unlisten(this.onChange);
	    }

		getLoginState() {
			return {
				user: LogInStore.getUser(),
				jwt: LogInStore.jwt
			};
		}

		render() {
			
			if (this.state.user !==null)
			{
				console.log("AuthenticatedComponent's user now is " + this.state.user.username );
			}
			
			return (

				<ComposedComponent
					{...this.props}
					user={this.state.user}
					jwt={this.state.jwt}
					// userLoggedIn={this.state.userLoggedIn} 
				/>
				);
			}
		}
};