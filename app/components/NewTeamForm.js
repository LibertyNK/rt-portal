import React from 'react';
import NewTeamFormActions from '../actions/NewTeamFormActions';
import NewTeamFormStore from '../stores/NewTeamFormStore';

class NewTeamForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = NewTeamFormStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		NewTeamFormStore.listen(this.onChange);
	}

	componentWillUnmount(){
		NewTeamFormStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

	}

	render() {

		return (
			<div className='container new-team-form'>
				<div className='row'>
					<h3 className='text-center'>Start a team on your campus!</h3>
					<form>
						<div className='form-group'>
							<label className='control-label'>What would you like your team name to be?</label>
							<input type='text' className='form-control' ref="name" placeholder="Enter team name" />
						</div>
						<div className='form-group'>
							<label className='control-label'>Where is your team located?</label>
							<input type='text' className='form-control' ref="street-address" placeholder='Street Address' />
							<input type='text' className='form-control' ref="city" placeholder='City' />
							<input type='text' className='form-control' ref="state" placeholder='State' />
							<input type='text' className='form-control' ref="zip" placeholder='Zip' />
						</div>
						<div className='form-group'>
							<label className='control-label'>Tell us about your team</label>
							<textarea className='form-control' ref="about" placeholder="About team" />
						</div>
						<div className='form-group'>
							<label className='control-label'>How much are you going to try to raise?</label>
							<input type='number' className='form-control' ref="amount" placeholder="Enter amount" />
						</div>
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Submit</button></p>
					</form>
				</div>
			</div>
		);
	}
}

export default NewTeamForm;