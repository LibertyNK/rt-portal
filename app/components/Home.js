import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
  render() {
    return (
        <div>
	        <div className='row'>
	        	<div className='col-sm-6 title'>
	        		<h1>RESCUE<br/>TEAMS</h1>
	        	</div>
	        	<div className='col-sm-6 description'>
	        		<p>We are stronger together. Thousands of North Korea refugees have escaped their country, but are now at risk of exploitation and capture because they cannot afford the 3,000 mile journey to a safe country.</p>
	        	</div>	
        	</div>
        	<div className='team-actions'>
        		<div className='col-sm-6'>
        			<h3 className='text-center'><Link to='/add_team'>Start a team</Link></h3>
        		</div>
        		<div className='col-sm-6'>
        			<h3 className='text-center'><Link to='/join_team'>Join a team</Link></h3>
        		</div>
        	</div>
        	<div className='stats'>
        		<h2 className='text-center'>How cool are we?</h2>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>$1,873,203</h3>
        			<p>Coffee ipsum</p>
        			<button className='btn btn-large red-btn'><Link to='/donate'>You can help</Link></button>
        		</div>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>489</h3>
        			<p>Coffee ipsum</p>
        			<button className='btn btn-large red-btn'><Link to='/teams'>See these teams</Link></button>
        		</div>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>189</h3>
        			<p>Coffee ipsum</p>
        			<button className='btn btn-large red-btn'><Link to='/refugees'>Read their stories</Link></button>
        		</div>
        	</div>
        	<div className='refugees text-center'>
        		<h2 className='text-center'>Refugees recently rescued</h2>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugees'>Read Story</Link></button>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugees'>Read Story</Link></button>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugees'>Read Story</Link></button>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugees'>Read Story</Link></button>
        		</div>
        		<button className='btn btn-large red-btn'><Link to='/refugees'>See all refugees</Link></button>
        	</div>
        	<div className='goals text-center'>
        		<h2>Our goal this spring is to raise $300,000</h2>
        		<button className='btn btn-large red-btn'><Link to='/donate'>Help us reach our goal</Link></button>
    		</div>
    		<div className='events text-center'>
        		<h2>Upcoming Events</h2>
        		<button className='btn btn-large red-btn'><Link to='/events'>See full calendar</Link></button>
    		</div>
    		<div className='search text-center'>
        		<h2>Find Team</h2>
        		<p>Search form</p>
        		<p>Map goes here</p>
    		</div>
    		<div className='updates text-center'>
        		<h2>Campaign Updates</h2>
        		<button className='btn btn-large red-btn'><Link to='/events'>Do something</Link></button>
    		</div>
        </div>
    );
  }
}

export default Home;