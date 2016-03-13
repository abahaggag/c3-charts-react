var React 		= require('react');
var Actions 	= require('../../../actions');
var Reflux  	= require('reflux');
var Group3Store = require('../../../stores/group3-store');

var C3Donut = React.createClass({
	mixins: [
    	Reflux.listenTo(Group3Store, 'onGroup3StoreChange'),    
  	],

	getInitialState: function(){
		return {
			chart: {},
			labels: ["Full Time", "Part Time", "Temporary", "Intership"],
			total: 0
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_donut_chart',
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

	onGroup3StoreChange: function(event, response){
		this.state.chart.load(response);
		this.calcTotal();
	},

	render: function(){
		return (
			<div>
				<div id="c3_donut_chart"></div>
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