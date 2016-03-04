import React from 'react';

class ErrorPage extends React.Component {


	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
	}

	componentDidMount(){
	
	}

	componentWillUnmount(){
	
	}

	onChange(state) {
		this.setState(state);
	}


	render() {

		return (
			<div className='alert alert-success text-center'>
				<p>Page Cannont be found</p>

			</div>
		);
	}
}

export default ErrorPage;