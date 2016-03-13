var React 					= require('react');
var PublishSubscribeControl = require('./group2-publish-subscribe-pubnub');
var Group2Charts 			= require('./group2-charts');

var Group2 = React.createClass({
	render: function(){
		return (
			<div className="container">
				<PublishSubscribeControl channel="group2" />
				<Group2Charts />
			</div>
		);
	}
});

module.exports = Group2;