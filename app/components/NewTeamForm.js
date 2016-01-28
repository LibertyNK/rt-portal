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
		AddTeamStore.unlisten(this.onChange);
	}

	onChange(state) {
		this.setState(state);
	}

	handleSubmit(event) {
		event.preventDefault();

		//var user = this.state.user;
							
		var team = {
							team_name: this.state.team_name,
							address1: this.state.address1,
							address2: this.state.address2,
							team_state: this.state.team_state,
							zipcode: this.state.zipcode,
							about: this.state.about,
							leader: this.state.user		
		};

		// Form validation

		//Check each field is not empty;

		if (!team.team_name) {
			this.refs.team_name.focus();
			AddTeamActions.invalidTeamName();
		}

		if (team.team_name.length < 3 || team.team_name.length > 50) {
			this.refs.team_name.focus();
			AddTeamActions.invalidTeamNameLength();
		}

		if (!team.address1) {
			this.refs.address1.focus();
			AddTeamActions.invalidAddress1();
		}

		if (!team.address2) {
			this.refs.address2.focus();
			AddTeamActions.invalidAddress2();
		}

		if (!team.team_state) {
			this.refs.team_state.focus();
			AddTeamActions.invalidState();
		}

		if (!team.zipcode) {
			this.refs.zipcode.focus();
			AddTeamActions.invalidZipcode();
		}

		if (!team.about) {
			this.refs.about.focus();
			AddTeamActions.invalidAbout();
		}

		if (team.about.length < 5 || team.about.length > 500) {
			this.refs.about.focus();
			AddTeamActions.invalidAboutLength();
		}

		// console.log("Error message state now is " + this.state.errorMessageState);
		// console.log("Validation state now is " + this.state.validationState.team_name);
		console.log("about is" + this.state.about);

		//TODO: Check if user already in a team or not. There should be a step before this to make sure that if user already has, display a message and show their team, or something else...?

		if (team.team_name) {

				AddTeamActions.addTeam(team);
		}

	}
	
	render() {

		return (
			<div className='container signup'>

				<h4>Create a New Team</h4>

				<p>This form would create a team page and a member page giving the member admin access to the Team page they created and then redirect them to their team page</p>

				<div className='row'>
					<form onSubmit={this.handleSubmit.bind(this)}>	

						<div className={this.state.errorMessageState}> 
							{this.state.errorMessage}
						</div>

						<label className='control-label'>Team Name</label>	
						<div className={'form-group ' + this.state.validationState.team_name}>
							<span className='help-block'> {this.state.helpBlock.team_name}</span>
							<input type='text' className='form-control' ref="team_name" placeholder="Team Name" autoFocus onChange={AddTeamActions.updateTeamName} />
						</div>
						<label className='control-label'>Team Address</label>	
						<div className={'form-group ' + this.state.validationState.address1}>
							<span className='help-block'> {this.state.helpBlock.address1}</span>
							<input type='text' className='form-control' ref="address1" placeholder="Team address" onChange={AddTeamActions.updateAddress1}/>
						</div>
						<div className={'form-group ' + this.state.validationState.address2}>
							<span className='help-block'> {this.state.helpBlock.address2}</span>
							<input type='text' className='form-control' ref="address2" placeholder="Team Address #2" onChange={AddTeamActions.updateAddress2}/>
						</div>
						<div className={'form-group ' + this.state.validationState.team_state}>
							<span className='help-block'> {this.state.helpBlock.team_state}</span>
							<input type='text' className='form-control' ref="team_state" placeholder="State (etc: CA)" onChange={AddTeamActions.updateState}/>
						</div>
						<div className={'form-group ' + this.state.validationState.zipcode}>
							<span className='help-block'> {this.state.helpBlock.zipcode}</span>
							<input type='number' className='form-control' ref="zipcode" placeholder="Zip (etc: 46514)" onChange={AddTeamActions.updateZipcode}/>
						</div>
						<div className={'form-group ' + this.state.validationState.about}>
							<label className='control-label'>About Your Team</label>
							<span className='help-block'> {this.state.helpBlock.about}</span>
							<textarea className='form-control' ref="about" onChange={AddTeamActions.updateAbout}></textarea>
						</div>
												
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Create</button></p>

					</form>
				</div>
			</div>
		);
	}
}

export default NewTeamForm;