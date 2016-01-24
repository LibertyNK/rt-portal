import React from 'react';

class AllTeams extends React.Component {


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
		console.log(localStorage.getItem('user'));
		return (
			<div className='alert alert-success text-center'>
				<p>All Teams page</p>

			</div>
		);
	}
}

export default AllTeams;