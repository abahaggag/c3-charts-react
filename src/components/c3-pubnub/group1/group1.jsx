var React 					= require('react');
var PublishSubscribeControl = require('./group1-publish-subscribe-pubnub');
var Group1Charts 			= require('./group1-charts');

var Group1 = React.createClass({
	render: function(){
		return (
			<div className="container">
				<PublishSubscribeControl channel="group1" />
				<Group1Charts />
			</div>
		);
	}
});

module.exports = Group1;