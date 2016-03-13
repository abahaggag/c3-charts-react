var React = require('react');

var C3Gauge = React.createClass({
	getInitialState: function(){
		return {
			chart: {},
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_chart',
		    data: this.initialData(),
		    
		    color: {
		        pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the three color levels for the percentage values.
		        threshold: {
		            values: [30, 60, 90, 100]
		        }
		    },

		    size: {
		        height: 180
		    },

		    transition: {
			  	duration: 1000
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
							<h2 className="panel-title">Gauge Chart Example</h2>
						</div>
						<div className="panel-body">
							<div style={{margin: 10}}>
								<div style={{margin: 10}}>
								<button style={{width: 100+"%", marginBottom: 20}} onClick={this.loadData} className="btn btn-warning">Load Data</button>
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
	    	columns: [
	            ['data', this.randomBetween(0,100)]
	        ],
	    };

		this.state.chart.load(data);
	},

	randomBetween: function(min, max){
		return Math.floor(Math.random() * (max-min)) + min ;
	},

	initialData: function(){
		
		var data = {
	    	columns: [
	            ['data', this.randomBetween(0,100)]
	        ],
	    	
	      	type: 'gauge',
	    };

		return data;
	},
});

module.exports = C3Gauge;