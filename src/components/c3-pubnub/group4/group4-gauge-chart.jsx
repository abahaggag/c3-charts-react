var React 		= require('react');
var Actions 	= require('../../../actions');
var Reflux  	= require('reflux');
var Group4Store = require('../../../stores/group4-store');

var C3Gauge = React.createClass({
	mixins: [
    	Reflux.listenTo(Group4Store, 'onGroup4StoreChange'),    
  	],

	getInitialState: function(){
		return {
			chart: {},
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_gauge_chart',
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

	onGroup4StoreChange: function(event, response){
		this.state.chart.load(response);
	},

	render: function(){
		return (
			<div>
				<div id="c3_gauge_chart"></div>
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
	            ['project completion', this.randomBetween(0,100)]
	        ],
	    	
	      	type: 'gauge',
	    };

		return data;
	},
});

module.exports = C3Gauge;