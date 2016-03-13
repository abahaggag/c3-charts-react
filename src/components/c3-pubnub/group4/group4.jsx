var React 					= require('react');
var PublishSubscribeControl = require('./group4-publish-subscribe-pubnub');
var Group4Charts 			= require('./group4-charts');

var Group4 = React.createClass({
	render: function(){
		return (
			<div className="container">
				<PublishSubscribeControl channel="group4" />
				<Group4Charts />
			</div>
		);
	}
});

module.exports = Group4;