import React from 'react';

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
        			<h3 className='text-center'>Start a team</h3>
        		</div>
        		<div className='col-sm-6'>
        			<h3 className='text-center'>Join a team</h3>
        		</div>
        	</div>
        	<div className='stats'>
        		<h2 className='text-center'>How cool are we?</h2>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>$1,873,203</h3>
        			<p>Coffee ipsum</p>
        		</div>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>489</h3>
        			<p>Coffee ipsum</p>
        		</div>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>189</h3>
        			<p>Coffee ipsum</p>
        		</div>
        	</div>
        	<div className='refugees'>
        		<h2 className='text-center'>Refugees recently rescued</h2>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
        		</div>
        	</div>
        	<div className='goals'>
        		<h2 className='text-center'>Our goal this spring is to raise $300,000</h2>
    		</div>
    		<div className='events'>
        		<h2 className='text-center'>Upcoming Events</h2>
    		</div>
    		<div className='search text-center'>
        		<h2 className='text-center'>Find Team</h2>
        		<p>Search form</p>
        		<p>Map goes here</p>
    		</div>
    		<div className='updates'>
        		<h2 className='text-center'>Campaign Updates</h2>
    		</div>
        </div>
    );
  }
}

export default Home;