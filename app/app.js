var isomorphicRouterRenderer = require('./utils/IsomorphicRouterRenderer');
var alt = require('./alt');
var routes = require('./routes');

module.exports = isomorphicRouterRenderer(alt, routes);

var Hello = React.createClass({
	render: function () {
		return (
			<div>
				<h1>This is a headline</h1>
			</div>
		)
	} 
});

React.render(Hello, document.querySelector('#react-app'));