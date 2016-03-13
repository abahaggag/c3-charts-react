var React 	= require('react');
var Actions = require('../../actions');

var LineChart = React.createClass({
	
	getInitialState: function(){
		return {
			chart: {},
		}
	},

	componentWillReceiveProps: function(nextProps){
		this.state.chart.load(nextProps.data);
	},

	componentDidMount: function () {
		var data = this.props.data;
		
		data["onclick"] = function(d, i){
			var donutData = {
				json: [
					{ "Presence" : data.json[d.index].Presence },
					{ "Upsence" : data.json[d.index].Upsence },
					{ "Delayed" : data.json[d.index].Delayed }
				],

				keys: {
					value: ["Presence", "Upsence", "Delayed"]
				},

				colors: {
					Upsence: 'rgb(214, 39, 40)',
					Delayed: 'rgb(31, 119, 180)',
					Presence: 'green'
				},
			};

			Actions.sendDataGroup6(donutData, data.json[d.index].month);
			
		}.bind(this);


		var chart = c3.generate({
		    bindto: '#c3_line_chart',
		    data: data,
		    
		    axis: {
	    		x: { 
	    			type: 'category', 
	    		}
	    	},

	    	grid: {
				x: {
					show: true
				},

				y: {
					show: true,
				}
			},

		    
		    transition: {
			  	duration: 1000
			}

		});
		this.setState({chart: chart});
	},

	render: function(){
		return (
			<div>
				<div id="c3_line_chart"></div>
			</div>
		);
	},
});

module.exports = LineChart;