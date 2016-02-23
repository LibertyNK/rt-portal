import React from 'react';
import {Link} from 'react-router';
import AuthenticatedComponent from '../decorators/AuthenticatedComponent'

export default AuthenticatedComponent(class Home extends React.Component {
  
  render() {

    if (this.props.user !==null) {
        console.log("AuthenticatedComponent's user now is " + this.props.user.username );
    }

    else {
         console.log("AuthenticatedComponent's user now nothing");
    }

    console.log(this.props);
 
    return (

    <div className="pre_head_padding">
        <div className="map_background">
            <div className="container">
    	        <div className='row'>
    	        	<div className='col-md-6 home_banner'>
    	        		<h2>Welcome to the global community of people committed to supporting North Korean refugees. By working together and engaging our peers, Rescue Teams have funded a 3,000 mile rescue jounrey for over XXX people.</h2>

                        <div className='row'>
                            <div className='col-md-12'>
                               <div className='banner_button'><Link to='/login'>Log In</Link></div>

                                <div className='banner_button'><Link to='/signup'>Sign Up</Link></div>


                            </div>  
                        </div>
    	        	</div>	

                    <div className='col-md-6 home_banner'>
                        <a href="" ><img className="play_button_home" src="img/play_button.png" /></a>
                    </div>  
            	</div>
            </div>
        </div>
        	
        	<div className='stats'>
        		<h2 className='text-center'>How cool are we?</h2>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>$1,873,203</h3>
        			<p>Coffee ipsum</p>
        			<button className='btn btn-large red-btn'><Link to='/add_team'>You can help</Link></button>
        		</div>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>489</h3>
        			<p>Coffee ipsum</p>
        			<button className='btn btn-large red-btn'><Link to='/all_teams'>See these teams</Link></button>
        		</div>
        		<div className='col-sm-4 text-center'>
        			<h3 className=''>189</h3>
        			<p>Coffee ipsum</p>
        			<button className='btn btn-large red-btn'><Link to='/all_refugees'>Read their stories</Link></button>
        		</div>
        	</div>
        	<div className='refugees text-center'>
        		<h2 className='text-center'>Refugees recently rescued</h2>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugee'>Read Story</Link></button>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugee'>Read Story</Link></button>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugee'>Read Story</Link></button>
        		</div>
        		<div className='col-sm-3'>
	        		<h5>Hae Won</h5>
	        		<p>Lorem ipsum</p>
	        		<button className='btn btn-md red-btn'><Link to='/refugee'>Read Story</Link></button>
        		</div>
        		<button className='btn btn-large red-btn'><Link to='/all_refugees'>See all refugees</Link></button>
        	</div>
        	<div className='goals text-center'>
        		<h2>Our goal this spring is to raise $300,000</h2>
        		<button className='btn btn-large red-btn'><Link to='/donate'>Help us reach our goal</Link></button>
    		</div>
    		<div className='events text-center'>
        		<h2>Upcoming Events</h2>
        		<button className='btn btn-large red-btn'><Link to='/all_events'>See full calendar</Link></button>
    		</div>
    		<div className='search text-center'>
        		<h2>Find Team</h2>
        		<p>Search form</p>
        		<p>Map goes here</p>
    		</div>
    		<div className='updates text-center'>
        		<h2>Campaign Updates</h2>
        		<button className='btn btn-large red-btn'><Link to='/all_events'>Do something</Link></button>
    		</div>
        </div>
    );
  }
});