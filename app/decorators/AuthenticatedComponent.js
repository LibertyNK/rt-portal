import React from 'react';
import LogInStore from '../stores/LogInStore';

export default (ComposedComponent) => {
	return class AuthenticatedComponent extends React.Component {

		constructor(props) {
			super(props);
			this.onChange = this.onChange.bind(this);
            this.state = LogInStore.getState();
		}

		onChange() {
			this.setState(LogInStore.getState());
		}

		componentDidMount() {
	    	LogInStore.listen(this.onChange);
	    }

	    componentWillUnmount() {
	    	LogInStore.unlisten(this.onChange);
	    }

		render() {
			
			return (
				<ComposedComponent
					{...this.props}
					user={this.state.user}
					jwt={this.state.jwt}
					userLoggedIn={this.state.isLoggedIn} 
				/>
				);
			}
		}
};