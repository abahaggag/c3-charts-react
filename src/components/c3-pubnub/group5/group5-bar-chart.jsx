var React 		= require('react');
var Actions 	= require('../../../actions');
var Reflux  	= require('reflux');
var Group5Store = require('../../../stores/group5-store');

var BarChart = React.createClass({
	mixins: [
    	Reflux.listenTo(Group5Store, 'onGroup5StoreChange'),    
  	],

	getInitialState: function(){
		return {
			chart: {},
			categories: ["Annual", "Sick", "Study", "Unpaid", "Matenirity", "Marriage", "Death", "Compassionate", "Hajj", "Casual"],
			colors: d3.scale.category20().range()
		}
	},

	componentDidMount: function () {
		var chart = c3.generate({
		    bindto: '#c3_bar_chart',
		    data: this.initialData(),
		    axis: {
				x: {
					type: "category",
					categories: this.state.categories
				}
			},
	    	bar: {
		        width: {
		            ratio: 0.7
		        }
		    },

		    legend: {
		        show: false
		    },

		    tooltip: {
			  	show: false
			},

		    transition: {
			  	duration: 500
			}
		    
		});
		this.setState({chart: chart});	
	},

	onGroup5StoreChange: function(event, response){
		this.state.chart.load(response);
	},

	render: function(){
		return (
			<div>
				<div id="c3_bar_chart"></div>
			</div>
		);
	},

	loadData: function(){
		var day = 10;
		var json = [];
		for (var i = 1; i < 9; i++) {
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

	},

	flowData: function(data){
		
		this.state.chart.groups([]);
		this.state.chart.flow({
		        json: data.json,
		        keys: data.keys,
		        duration: data.duration,
		        done: function(){
		        	if(this.state.isStacked){
		        		this.state.chart.groups([['OverTime', 'Delay', 'Working Hours']]);
		        	}
		        }.bind(this),
		});

		this.setState({day: this.state.day + 1});
	},

	randomBetween: function(min, max){
		return Math.floor(Math.random() * (max-min)) + min ;
	},

	initialData: function(){
		var self = this;
		var data = {
	    	columns: [
	            ['Leave Types', 100, 20, 80, 45, 78, 62, 26, 46, 64, 73],
	        ],

	        color: function (color, d) {
	            return this.state.colors[d.index];
	        }.bind(this),
	        labels: true,
	      	type: 'bar',
	    };

		return data;
	},
	
});

module.exports = BarChart;