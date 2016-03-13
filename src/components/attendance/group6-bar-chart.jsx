var React 		= require('react');
var Actions 	= require('../../actions');
var Reflux  	= require('reflux');
var Group6Store = require('../../stores/group6-store');

var BarChart = React.createClass({
	mixins: [
    	Reflux.listenTo(Group6Store, 'onGroup6StoreChange'),    
  	],

	getInitialState: function(){
		return {
			chart: {},
			categories: this.props.labels,
			colors: d3.scale.category20().range()
		}
	},

	onGroup6StoreChange: function(event, response){
		this.state.chart.load(response);
	},

	componentWillReceiveProps: function(nextProps){
		this.state.chart.load(nextProps.data);
	},
	
	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_bar_chart',
		    data: this.props.data,
		    axis: {
				x: {
					
					type: "category",
					categories: this.state.categories,
				}
			},

	    	bar: {
		        width: {
		            ratio: 0.6
		        }
		    },

		    grid: {			
				y: {
					show: true,
				}
			},

	    	tooltip: {show: false},


		    transition: {
			  	duration: 1000
			}
		    
		});
		this.setState({chart: chart});	
	},

	render: function(){
		return (
			<div>
				<div id="c3_bar_chart"></div>
			</div>
		);
	},

	initialData: function(){
		

		var data = {
	    	columns: [
	            ["Presence", this.randomBetween(0, 100)],
	            ["Upsence", this.randomBetween(0, 100)],
	            ["Delayed", this.randomBetween(0, 100)],
	        ],

	        colors: {
					Upsence: 'rgb(214, 39, 40)',
					Delayed: 'rgb(31, 119, 180)',
					Presence: 'green'
				},
	        labels: true,
	      	type: 'bar',
	    };

		return data;
	},
	
});

module.exports = BarChart;