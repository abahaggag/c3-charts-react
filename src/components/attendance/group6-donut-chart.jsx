var React 		= require('react');
var Actions 	= require('../../actions');
var Reflux  	= require('reflux');
var Group6Store = require('../../stores/group6-store');

var C3Donut = React.createClass({
	mixins: [
    	Reflux.listenTo(Group6Store, 'onGroup6StoreChange'),    
  	],

	getInitialState: function(){
		return {
			chart: {},
			labels: this.props.labels,
			total: 0
		}
	},

	onGroup6StoreChange: function(event, response){
		this.state.chart.load(response);

		$('#c3_donut_chart .c3-chart-arcs-title')
	     			.text("Total Presence : " + response.json[0].Presence);
	},

	componentWillReceiveProps: function(nextProps){
		this.setState({labels: nextProps.labels})
		this.state.chart.load(nextProps.data);

		$('#c3_donut_chart .c3-chart-arcs-title')
	      			.text("Total Presence : " + nextProps.data.json[0].Presence);
	},

	componentDidMount: function () {
		
		var chart = c3.generate({
		    bindto: '#c3_donut_chart',
		    data: this.props.data,
		    tooltip: {
			  	format: {
			    	value: function (value, ratio, id, index) { return value + " days | " + (ratio * 100).toFixed(1) + "%"; }
			  	}
			},
			donut: {
		        title: "Total Presence: " + this.props.data.json[0].Presence
		    },
		    transition: {
			  	duration: 1000
			},
		});
		this.setState({chart: chart});	
		this.state.chart = chart;
	},

	render: function(){
		return (
			<div>
				<div id="c3_donut_chart"></div>
			</div>
		);
	},

});

module.exports = C3Donut;