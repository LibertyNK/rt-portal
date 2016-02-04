import React from 'react';

import AddTeamActions from '../actions/AddTeamActions';
import AddTeamStore from '../stores/AddTeamStore';


class NewTeamForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = AddTeamStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		AddTeamStore.listen(this.onChange);
	}

	componentWillUnmount() {
		AddTeamStore.unlisten(this.onChange);
	}

	componentWillUnmount(){
		NewTeamFormStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		// Need to register user first then use user information to asign them to team leader...?

		// console.log("Error message state now is " + this.state.errorMessageState);
		// console.log("Validation state now is " + this.state.validationState.team_name);

		//TODO: Check if user already in a team or not. There should be a step before this to make sure that if user already has, display a message and show their team, or something else...?

		if (team.team_name) {
			// Need better logic here. Only call AddTeam Action if all fields are validated
			AddTeamActions.addTeam(team);
		}

		var user = {
			email: this.state.email.trim(),
			password: this.state.password,
			password_conf: this.state.password_conf,
			first_name: this.state.first_name,
			last_name: this.state.last_name
		};

		var team = {
			name: this.state.name,
			street: this.state.street,
			address: this.state.address,
			state: this.state.state,
			zipcode: this.state.zipcode		
		};
	}
	
	render() {

		return (


		<div className="form_card">
			<div className='text-left'>

				<div className="row">
					<div className='col-sm-12'>
						<h2>Let us know more about your team!</h2>
					</div>
				</div>

				<div className="row">
					<div className='col-sm-12'>
						<div className="banner-border-seperation"></div>
					</div>
				</div>
				<div className='row'>
					<div className='col-sm-12 settings_inputs'>
						<form >	
							<label className='control-label'>Team Name</label>	

							<div className='form-group'>
								<input type='text' className='form-control' ref="teamn_ame" placeholder="Team Name" autoFocus required/>
							</div>
							<label className='control-label'>Team Address</label>	
							<div className='form-group'>
								<input type='text' className='form-control' ref="street" placeholder="Team Street Address"/>
							</div>
							<div className='form-group'>
								<input type='text' className='form-control' ref="address" placeholder="Team Street Address #2"/>
							</div>
							<div className='form-group'>
								<input type='text' className='form-control' ref="teamState" placeholder="State (etc: CA)"/>
							</div>
							<div className='form-group'>
								<input type='number' className='form-control' ref="teamZip" placeholder="Zip (etc: 46514)"/>
							</div>

							
							<div className={'form-group ' + this.state.validationState.about}>
								<label className='control-label'>About Your Team</label>
								<span className='help-block'> {this.state.helpBlock.about}</span>
								<textarea className='form-control' ref="about" onChange={AddTeamActions.updateAbout}></textarea>
							</div>
							
							
							<p className='text-center width_100'><button type='submit' className='btn btn-lg btn-success'>Create</button></p>

						</form>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

export default NewTeamForm;