var React 	= require('react');
var Actions = require('../../../actions');
var Reflux  = require('reflux');

var PublishSubscribePubnub = React.createClass({

	getInitialState: function(){
		return {
			publishStatus: "Stoped",
			subscribeStatus: "Stoped",

			pubnub: {},
			channel: this.props.channel,
			intervalVar: null,

			queue: [],
			
			queueIntervalVar: null,

			labels: ["Full Time", "Part Time", "Temporary", "Intership"],
		};
	},

	componentDidMount: function(){
		var pubnub = PUBNUB.init({
	        publish_key: 'pub-c-8b2a11a0-1177-45db-bae5-67d115a456f3',
	        subscribe_key: 'sub-c-a1fe348a-dfa7-11e5-abb9-0619f8945a4f'
	     });

		this.setState({pubnub: pubnub});
	},

	handlePublishStatusChange: function(status){
		switch(status){
			case "Started":
				var intervalVar = setInterval(function(){
					this.state.pubnub.publish({
						channel: this.state.channel,
						message: {
							data: {
								json: [
						    		{ "Full Time": this.randomBetween(0, 100) },
						    		{ "Part Time": this.randomBetween(0, 100) },
						    		{ "Temporary": this.randomBetween(0, 100) },
						    		{ "Intership": this.randomBetween(0, 100) },
						    	],

						    	keys: {
									value: this.state.labels
								},
							}, 
						}
					});

				}.bind(this), 2000);

				this.setState({intervalVar: intervalVar});
				
				console.log("publish started");
				break;

			case "Stoped":
				clearInterval(this.state.intervalVar);
				console.log("publish stoped");
				break;
		}

		this.setState({publishStatus: status});
	},

	randomBetween: function(min, max){
		return Math.floor(Math.random() * (max-min)) + min ;
	},

	handleSubscribeStatusChange: function(status){
		switch(status){
			case "Started":
				
				this.state.pubnub.subscribe({
					channel : this.state.channel,
					message : function(m){
						this.pushToQueue(m.data);
					}.bind(this)
				});

				this.setQueueIntervarVar();

				console.log("subscribe started");
				break;

			case "Stoped":
				this.state.pubnub.unsubscribe({
				   	channel : this.state.channel,
				});

				clearInterval(this.state.queueIntervalVar);
				this.setState({queueIntervalVar: null});
				console.log("subscribe stoped");
				break;
		}

		this.setState({subscribeStatus: status});
	},

	pushToQueue: function(data){
		this.state.queue.push(data);
		this.setQueueIntervarVar();
	},

	shiftFromQueue: function(){
		Actions.sendDataGroup3(this.state.queue.shift());

		if(this.state.queue.length == 0){
			clearInterval(this.state.queueIntervalVar);
			this.setState({queueIntervalVar: null});
		}
	},

	setQueueIntervarVar: function(){
		if (this.state.queueIntervalVar == null && this.state.queue.length > 0){
			var queueIntervalVar = setInterval(function(){
				this.shiftFromQueue();
			}.bind(this), 2000);

			this.setState({queueIntervalVar: queueIntervalVar});
		}
	},

	render: function(){
		return (
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Publishing: {this.state.publishStatus}</h3>
						</div>
						<div className="panel-body">
							<div className="btn-group btn-group-justified" role="group">
								<div className="btn-group btn-group-sm">
									<button type="button" className="btn btn-default" style={{color: "green"}}
										onClick={this.handlePublishStatusChange.bind(null, "Started")}>Start</button>
								</div>
								<div className="btn-group btn-group-sm">
									<button type="button" className="btn btn-default" style={{color: "red"}}
										onClick={this.handlePublishStatusChange.bind(null, "Stoped")}>Stop</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
					<div className="panel panel-default">
						<div className="panel-heading">
							<h3 className="panel-title">Subscribing: {this.state.subscribeStatus}</h3>
						</div>
						<div className="panel-body">
							<div className="btn-group btn-group-justified" role="group">
								<div className="btn-group btn-group-sm">
									<button type="button" className="btn btn-default" style={{color: "green"}}
										onClick={this.handleSubscribeStatusChange.bind(null, "Started")}>Start</button>
								</div>
								<div className="btn-group btn-group-sm">
									<button type="button" className="btn btn-default" style={{color: "red"}}
										onClick={this.handleSubscribeStatusChange.bind(null, "Stoped")}>Stop</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = PublishSubscribePubnub;