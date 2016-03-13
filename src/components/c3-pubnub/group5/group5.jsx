var React 					= require('react');
var PublishSubscribeControl = require('./group5-publish-subscribe-pubnub');
var Group5Charts 			= require('./group5-charts');

var Group5 = React.createClass({
	render: function(){
		return (
			<div className="container">
				<PublishSubscribeControl channel="group5" />
				<Group5Charts />
			</div>
		);
	}
});

module.exports = Group5;