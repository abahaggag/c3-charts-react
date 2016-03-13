var React = require('react');

var C3Donut = React.createClass({
	getInitialState: function(){
		return {
			chart: {},
			labels: ["Full Time", "Part Time", "Temporary", "Intership"],
			total: 0
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_chart',
		    data: this.initialData(),
		    tooltip: {
			  	format: {
			    	value: function (value, ratio, id, index) { return value + " days | " + (ratio * 100).toFixed(1) + "%"; }
			  	}
			},
			donut: {
		        title: "Total Leaves: " + this.state.total
		    },
		    transition: {
			  	duration: 1000
			},
		});
		this.setState({chart: chart});	
		this.state.chart = chart;
		this.calcTotal();
	},

	render: function(){
		return (
			
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-sx-12" style={{textAlign: "center", padding: 0}}>
					<div className="panel panel-default" style={{margin: 10}}>
						<div className="panel-heading">
							<h2 className="panel-title">Donut Chart Example</h2>
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
	    		{ "Full Time": this.randomBetween(0, 100) },
	    		{ "Part Time": this.randomBetween(0, 100) },
	    		{ "Temporary": this.randomBetween(0, 100) },
	    		{ "Intership": this.randomBetween(0, 100) },
	    	],

	    	keys: {
				value: this.state.labels
			},
	    };

		this.state.chart.load(data);
		this.calcTotal();

	},

	calcTotal: function(){
		var total = 0;
		this.state.total = 0;
		this.state.chart.data().forEach(function(obj, i){
			total += obj.values[i].value;
		});
		
		this.setState({total: total});
		this.state.total = total;

		$('.c3-chart-arcs-title', $(this.state.chart.element)).text('Total Employees: ' + total);
	},

	randomBetween: function(min, max){
		return Math.floor(Math.random() * (max-min)) + min ;
	},

	initialData: function(){
		
		var data = {
	    	json: [
	    		{ "Full Time": this.randomBetween(0, 100) },
	    		{ "Part Time": this.randomBetween(0, 100) },
	    		{ "Temporary": this.randomBetween(0, 100) },
	    		{ "Intership": this.randomBetween(0, 100) },
	    	],

	    	keys: {
				value: this.state.labels
			},
	    	
	      	type: 'donut',
	    };

		return data;
	},
});

module.exports = C3Donut;