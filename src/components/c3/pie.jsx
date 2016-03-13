var React = require('react');

var C3Pie = React.createClass({
	getInitialState: function(){
		return {
			chart: {},
			labels: ["Annual", "Sick", "Study", "Unpaid", "Matenirity", "Marriage", "Death", "Compassionate", "Hajj", "Casual"],
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_chart',
		    data: this.initialData(),
		    transition: {
			  	duration: 1000
			},
		    
		    tooltip: {
			  	format: {
			    	value: function (value, ratio, id, index) { return value + " days | " + (ratio * 100).toFixed(1) + "%"; }
			  	}
			},
		});
		this.setState({chart: chart});	
	},

	render: function(){
		return (
			
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-sx-12" style={{textAlign: "center", padding: 0}}>
					<div className="panel panel-default" style={{margin: 10}}>
						<div className="panel-heading">
							<h2 className="panel-title">Pie Chart Example</h2>
						</div>
						<div className="panel-body">
							<div style={{margin: 10}}>
								<div style={{margin: 10}}>
								<button style={{width: 98+"%", marginBottom: 20, marginRight: 2+"%"}} onClick={this.loadData} className="btn btn-warning">Load Data</button>
								<br/>
								<div id="c3_chart"></div>
							</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},

	loadData: function(){

		var data = {
	    	json: [
	    		{ "Annual": this.randomBetween(0, 100) },
	    		{ "Sick": this.randomBetween(0, 100) },
	    		{ "Study": this.randomBetween(0, 100) },
	    		{ "Unpaid": this.randomBetween(0, 100) },
	    		{ "Matenirity": this.randomBetween(0, 100) },
	    		{ "Marriage": this.randomBetween(0, 100) },
	    		{ "Death": this.randomBetween(0, 100) },
	    		{ "Compassionate": this.randomBetween(0, 100) },
	    		{ "Hajj": this.randomBetween(0, 100) },
	    		{ "Casual": this.randomBetween(0, 100) },	
	    	],

	    	keys: {
				value: this.state.labels
			},
	    };

		this.state.chart.load(data);
	},

	flowData: function(){
		this.state.chart.flow({
		        json: [
		    		{ "Annual": this.randomBetween(0, 100) },
		    		{ "Sick": this.randomBetween(0, 100) },
		    		{ "Study": this.randomBetween(0, 100) },
		    		{ "Unpaid": this.randomBetween(0, 100) },
		    		{ "Matenirity": this.randomBetween(0, 100) },
		    		{ "Marriage": this.randomBetween(0, 100) },
		    		{ "Death": this.randomBetween(0, 100) },
		    		{ "Compassionate": this.randomBetween(0, 100) },
		    		{ "Hajj": this.randomBetween(0, 100) },
		    		{ "Casual": this.randomBetween(0, 100) },	
		    	],

		    	keys: {
					value: this.state.labels
				},

		        duration: 3000,
		});
	},

	randomBetween: function(min, max){
		return Math.floor(Math.random() * (max-min)) + min ;
	},

	initialData: function(){
		
		var data = {
	    	json: [
	    		{ "Annual": 10 },
	    		{ "Sick": 3 },
	    		{ "Study": 5 },
	    		{ "Unpaid": 20 },
	    		{ "Matenirity": 3 },
	    		{ "Marriage": 4 },
	    		{ "Death": 4 },
	    		{ "Compassionate": 3 },
	    		{ "Hajj": 13 },
	    		{ "Casual": 9 },	
	    	],

	    	keys: {
				value: this.state.labels
			},
	    	
	      	type: 'pie',
	    };

		return data;
	},
});

module.exports = C3Pie;