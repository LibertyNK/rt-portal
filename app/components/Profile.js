import React from 'react';

class Profile extends React.Component {
	render() {
		var user = window.localStorage.getItem('user');
		console.log(user);
		return (
			<div className='alert alert-success text-center'>
				<p>Profile page</p>
			</div>
		);
	}
}

export default Profile;