var React = require('react');

var C3Line = React.createClass({
	getInitialState: function(){
		return {
			chart: {},
			limit: 4,
			day: 19
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_chart',
		    data: this.initialData(),
		    
		    axis: {
	    		x: { 
	    			type: 'timeseries', 
	    			tick: {
	    				fit: true,
	    				format: "%e %b"
	    			}
	    		}
	    	},
		    
		    transition: {
			  	duration: 500
			}

		});
		this.setState({chart: chart});
	},

	loadData: function(){
		var day = 10;
		var json = [];
		for (var i = 1; i < 10; i++) {
			json.push({
				date: '2015-10-' + day++, 
        		OverTime: this.randomBetween(0, 30), 
        		Delay: this.randomBetween(20, 50),
        		'Working Hours': this.randomBetween(45, 100)
			});
		};

		this.state.chart.load({
	        json: json,
	        keys: {
	        	x: 'date',
	    		value: ['OverTime', 'Delay', 'Working Hours'],
	    	},
		});

		this.setState({day: 19});
		var style = "margin-top: 20px; border-color: gray; color: gray";
		$('.chart-info').html("<span>Click on any point to get info about it.</span>").attr("style", style);
	},

	flowData: function(){
		this.state.chart.flow({
		        json: [
		        	{
		        		date: '2015-10-' + this.state.day, 
		        		OverTime: this.randomBetween(0, 30), 
		        		Delay: this.randomBetween(20, 50),
		        		'Working Hours': this.randomBetween(45, 100)
		        	}
		        ],
		        keys: {
		        	x: 'date',
		    		value: ['OverTime', 'Delay', 'Working Hours'],
		    	},

		        duration: 1000,
		});

		this.setState({day: this.state.day + 1});
	},

	render: function(){
		return (
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-sx-12" style={{textAlign: "center", padding: 0}}>
					<div className="panel panel-default" style={{margin: 10}}>
						<div className="panel-heading">
							<h2 className="panel-title">Line Chart Example</h2>
						</div>
						<div className="panel-body">
							<div style={{margin: 10}}>
								<button style={{width: 48+"%", marginBottom: 20, marginRight: 2+"%"}} onClick={this.loadData} className="btn btn-warning">Load Data</button>
								<button style={{width: 48+"%", marginBottom: 20, marginLeft: 2+"%"}} onClick={this.flowData} className="btn btn-success">Flow Data</button>
								<br/>
								<div id="c3_chart"></div>
								<div className="chart-info" style={{width: 100+"%", marginTop: 20}}>
									<span>Click on any point to get info about it.</span>
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	},

	randomBetween: function(min, max){
		return Math.floor(Math.random() * (max-min)) + min ;
	},

	initialData: function(){
		var data = {
	    	json: [
	    		{ date: '2015-10-10', OverTime: 2, Delay: 20, 'Working Hours': 45 },
	    		{ date: '2015-10-11', OverTime: 5, Delay: 25, 'Working Hours': 39 },
	    		{ date: '2015-10-12', OverTime: 1, Delay: 27, 'Working Hours': 60 },
	    		{ date: '2015-10-13', OverTime: 10, Delay: 15, 'Working Hours': 61 },
	    		{ date: '2015-10-14', OverTime: 7, Delay: 21, 'Working Hours': 36 },
	    		{ date: '2015-10-15', OverTime: 3, Delay: 30, 'Working Hours': 35 },
	    		{ date: '2015-10-16', OverTime: 12, Delay: 26, 'Working Hours': 68 },
	    		{ date: '2015-10-17', OverTime: 0, Delay: 16, 'Working Hours': 50 },
	    		{ date: '2015-10-18', OverTime: 10, Delay: 20, 'Working Hours': 44 },
	    	],
	    	
	    	keys: {
	    		x: 'date',
	    		value: ['OverTime', 'Delay', 'Working Hours'],
	    	},

	      	type: 'spline',

	      	colors: {
				Delay: 'red',
				OverTime: 'blue',
				"Working Hours": 'green'
			},

	      	onclick: function (d, i) { 
	      		var msg = '', color='gray';

	      		switch(d.name){
	      			case "Delay":
						color = "red";
						break;
					case "OverTime":
						color = "blue";
						break;
					case "Working Hours":
						color = "green";
						break;
	      		}

	      		var style = "margin-top: 20px; border-color: " + color + "; color: " + color;
	      		
	      		msg += "you have complete " + d.value + " " + d.name;
	      		msg += d.name == "Working Hours" ? "" : " hours ";
	      		msg += " on " + d.x.toLocaleDateString();
	      		 $('.chart-info').html("<span>" + msg + "</span>").attr("style", style);
	      	},
	    };

		return data;
	},
});

module.exports = C3Line;