var React 	= require('react');
var Actions = require('../../actions');
var Reflux 	= require('reflux');
var C3Store = require('../../stores/c3-store');

var C3Chart = React.createClass({
	mixins: [
		Reflux.listenTo(C3Store, 'onC3StoreChange')
	],

	getInitialState: function(){
		return {
			chart: null,
		}
	},

	onC3StoreChange: function(event, response){
		switch(response.operation){
			
			case 'generate':
				this.generate(response.generate_options);
				break;
			
			case 'transform':
				this.transform(response.type, response.isStacked);
				break;

			case 'destroy':
				break;
			
			case 'load':
				break;
			
			case 'unload':
				break;
			
			case 'flow':
				break;
		}
	},

	generate: function(chart_options){
		
		if (this.state.chart != null){
			this.state.chart.load(chart_options.data);
		}
		else {
			var chart = c3.generate(chart_options);
			this.setState({chart: chart});
		}
	},

	transform: function(type, isStacked){
		this.state.chart.transform(type);

		if(type == "bar" && isStacked){
			var keys = [];
			this.state.chart.data().forEach(function(d){
				keys.push(d.id);
			});
			
			this.state.chart.groups([keys]);
		} 
		else{
			this.state.chart.groups([]);	
		}
	},

	destroy: function(){
		this.state.chart.destroy();
		this.setState({chart: null});
	},

	load: function(){

	},

	unload: function(){

	},

	flow: function(){

	},

	render: function(){
		return (
			<div className="panel-body" style={{border:"solid 1px #ddd", margin: 15, borderRadius:5}}>
				<div className={this.state.chart == null? "show":"hide"}>
					<h4>To run this example:</h4>
					<p style={{paddingLeft: 20}}>
					  	1. Prepare your excel file of type xls or xlsx.<br/>
					 	2. fill it with data you want to be presented in the chart.<br/>
					  	3. Choose chart type you like.<br/>
					  	4. Click Import Button. <br/><br/>
						
						<b>Note1:</b> After chart loaded, you can change the type of chart without
						importing new data and the chosen type will be implemented on the current dataset. 
						
						<br/><br/>
						<b>Note2:</b> Take a look to this <b><a href="excel data sample.xlsx">excel sample</a></b> to get familiar with data required 
						for this example and follow these instructions:<br/>
						
						<span style={{paddingLeft: 10}}>1. first cell must have the following value: 'x'.<br/></span>
						<span style={{paddingLeft: 10}}>2. the first row is the x-axis of the chart.<br/></span>
						<span style={{paddingLeft: 10}}>3. each row is a series values and the first cell of each row is the series title and will be used in the legend.<br/></span>
						<span style={{paddingLeft: 10}}>4. you can have any number of rows and columns. <br/></span>
			
					</p>


				</div>
				<div id="c3_chart"></div>
			</div>
		);
	},
});

module.exports = C3Chart;