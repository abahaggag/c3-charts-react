var React 					= require('react');
var PublishSubscribeControl = require('./group3-publish-subscribe-pubnub');
var Group3Charts 			= require('./group3-charts');

var Group3 = React.createClass({
	render: function(){
		return (
			<div className="container">
				<PublishSubscribeControl channel="group3" />
				<Group3Charts />
			</div>
		);
	}
});

module.exports = Group3;