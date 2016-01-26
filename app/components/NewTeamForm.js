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
							street: this.state.street,
							address: this.state.address,
							state: this.state.state,
							zipcode: this.state.zipcode,
							about: this.state.about		
		};

	}
	
	render() {

		return (
			<div className='container signup'>

				<h4>Create a New Team</h4>

				<p>This form would create a team page and a member page giving the member admin access to the Team page they created and then redirect them to their team page</p>

				<div className='row'>
					<form onSubmit={this.handleSubmit.bind(this)}>	
						<label className='control-label'>Team Name</label>	

						<div className='form-group'>
							<input type='text' className='form-control' ref="teamn_ame" placeholder="Team Name" autoFocus onChange={AddTeamActions.updateTeamName} />
						</div>
						<label className='control-label'>Team Address</label>	
						<div className='form-group'>
							<input type='text' className='form-control' ref="street" placeholder="Team Street Address"/>
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="address" placeholder="Team Street Address #2"/>
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="state" placeholder="State (etc: CA)"/>
						</div>
						<div className='form-group'>
							<input type='number' className='form-control' ref="zipcode" placeholder="Zip (etc: 46514)"/>
						</div>
						<div className='form-group'>
							<label className='control-label'>About Your Team</label>
							<textarea type='text' className='form-control' ref="aboutTeam" ></textarea>
						</div>
												
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Create</button></p>

					</form>
				</div>
			</div>
		);
	}
}

export default NewTeamForm;