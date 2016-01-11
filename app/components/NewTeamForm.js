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
			<div className='container signup'>

					<h4>New Team Form page</h4>

					<p>This form would create a team page and a member page giving the member admin access to the Team page they created and then redirect them to their team page</p>

				<div className='row'>
					<form >	
						<label className='control-label'>Team Name</label>	

						<div className='form-group'>
							<input type='text' className='form-control' ref="teamname" placeholder="Team Name" autoFocus />
						</div>
						<label className='control-label'>Team Address</label>	
						<div className='form-group'>
							<input type='text' className='form-control' ref="teamAddress" placeholder="Team Street Address"/>
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="teamAddress_2" placeholder="Team Street Address #2"/>
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="teamState" placeholder="State (etc: CA)"/>
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="teamZip" placeholder="Zip (etc: 46514)"/>
						</div>
						<div className='form-group'>
							<label className='control-label'>About Your Team</label>
							<textarea type='text' className='form-control' ref="aboutTeam" ></textarea>
						</div>
						<label className='control-label'>About You</label>					
						<div className='form-group'>

							<input type='text' className='form-control' ref="firstname" placeholder="First Name" autoFocus />
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="lastname" placeholder="Last Name" />
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="username" placeholder="Username" />
						</div>
						<div className='form-group'>
							<input type='text' className='form-control' ref="email" placeholder="Email" />
						</div>
						<div className='form-group'>
							<input type='password' className='form-control' ref="password" placeholder="Password"  />
						</div>
						<div className='form-group'>
							<input type='password' className='form-control' ref="password2" placeholder="Password Confirmation" />
						</div>
						
						
						<p className='text-center'><button type='submit' className='btn btn-lg btn-success'>Create</button></p>

					</form>
				</div>
			</div>
		);
	}
}

export default NewTeamForm;