var React 		= require('react');
var Actions 	= require('../../../actions');
var Reflux  	= require('reflux');
var Group2Store = require('../../../stores/group2-store');

var C3Pie = React.createClass({
	mixins: [
    	Reflux.listenTo(Group2Store, 'onGroup2StoreChange'),    
  	],

	getInitialState: function(){
		return {
			chart: {},
			labels: ["Annual", "Sick", "Study", "Unpaid", "Matenirity", "Marriage", "Death", "Compassionate", "Hajj", "Casual"],
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_pie_chart',
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

	onGroup2StoreChange: function(event, response){
		this.state.chart.load(response);
	},

	render: function(){
		return (
				<div>
					<div id="c3_pie_chart"></div>
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