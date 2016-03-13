var React 		= require('react');
var LineChart 	= require('../attendance/group6-line-chart');
var BarChart 	= require('../attendance/group6-bar-chart');
var DonutChart 	= require('../attendance/group6-donut-chart');

var Attendance = React.createClass({

	getInitialState: function(){
		return {
			empId: 0,
			data: [],
			empData: {},
			donutData: {},
			barData: {},
			labels: ["Presence", "Upsence", "Delayed"],
			attendanceFor: " Year: 2015"
		}
	},

	componentWillMount: function(){
		this.setState({data: this.getData()});
		this.state.data = this.getData();

		this.setState({empData: this.state.data[this.state.empId]});
		this.state.empData = this.state.data[this.state.empId];

		this.setState({donutData: this.getDonutData()});
		this.setState({barData: this.getBarData()});
	},

	handleEmployeesChange: function(event){
		this.setState({empId: event.target.value});
		this.state.empId = event.target.value;

		this.setState({empData: this.state.data[event.target.value]});
		this.state.empData = this.state.data[event.target.value];

		this.setState({donutData: this.getDonutData()});
		this.setState({barData: this.getBarData()});

		this.setState({attendanceFor: " Year: 2015"});
	},

	getDonutData: function(){
		var empData = this.state.empData;

		var Presence = 0, Upsence=0, Delayed = 0;
		
		empData.json.forEach(function(obj){
			Presence += obj.Presence;
			Upsence += obj.Upsence;
			Delayed += obj.Delayed;
		});

		var donutData = {
	    	json: [
	    		{ "Presence": Presence },
	    		{ "Upsence": Upsence },
	    		{ "Delayed": Delayed },
	    	],

	    	keys: {
				value: this.state.labels
			},

			colors: {
				Upsence: 'rgb(214, 39, 40)',
				Delayed: 'rgb(31, 119, 180)',
				Presence: 'green'
			},
	    	
	      	type: 'donut',
	      	onmouseover: function(d, i){
	      		$('#c3_donut_chart .c3-chart-arcs-title')
	      			.text('Total ' + d.id + " : " + d.value);
	      	},
	    };

	    return donutData;
	},

	getBarData: function(){
		var empData = this.state.empData;

		var Presence = 0, Upsence=0, Delayed = 0;
		
		empData.json.forEach(function(obj){
			Presence += obj.Presence;
			Upsence += obj.Upsence;
			Delayed += obj.Delayed;
		});

		var barData = {
	    	json: [
	    		{ "Presence": Presence },
	    		{ "Upsence": Upsence },
	    		{ "Delayed": Delayed },
	    	],

	    	keys: {
				value: this.state.labels
			},

			colors: {
				Upsence: 'rgb(214, 39, 40)',
				Delayed: 'rgb(31, 119, 180)',
				Presence: 'green'
			},

			labels: true,
	    	
	      	type: 'bar',
	    };

	    return barData;
	},

	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 style={{textAlign: "center"}} className="panel-title">
									Interactive Employees Attendance for 2015
								</h3>
							</div>
							<div className="panel-body" style={{border:"solid 1px #ddd", margin: 15, borderRadius:5}}>
								<p>Choose employee from list to get his attendance. Click on each line chart points to get info for selected month.</p>
								<select className="form-control" value={this.state.empId}
									onChange={this.handleEmployeesChange}>
									<option value={0}>Ahmed Bahaggag</option>
									<option value={1}>Varun Sharma</option>
									<option value={2}>Amitoj</option>
								</select>
							</div>
							<div className="panel-body">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
										<div className="panel panel-default">
											<div className="panel-body">
												<LineChart data={this.state.empData} />
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" >
										<div className="panel panel-default">
											<div className="panel-body">
												<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
													<div className="panel panel-default">
														<div className="panel-body">
															<DonutChart data={this.state.donutData} labels={this.state.labels} />
														</div>
													</div>
												</div>
												<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
													<div className="panel panel-default">
														<div className="panel-body">
															<BarChart data={this.state.barData} labels={this.state.labels}/>
														</div>
													</div>
												</div>
											</div>	
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	},

	
	getData: function(){
		var data = [ 
			{
		    	json: [
		    		{ month: 'Jan', Upsence: 2, Delayed: 8, Presence: 20 },
		    		{ month: 'Feb', Upsence: 0, Delayed: 6, Presence: 24 },
		    		{ month: 'Mar', Upsence: 8, Delayed: 7, Presence: 15 },
		    		{ month: 'Apr', Upsence: 0, Delayed: 0, Presence: 30 },
		    		{ month: 'May', Upsence: 1, Delayed: 1, Presence: 28 },
		    		{ month: 'Jun', Upsence: 0, Delayed: 2, Presence: 28 },
		    		{ month: 'Jul', Upsence: 1, Delayed: 0, Presence: 29 },
		    		{ month: 'Aug', Upsence: 2, Delayed: 10, Presence: 18 },
		    		{ month: 'Sep', Upsence: 0, Delayed: 1, Presence: 29 },
		    		{ month: 'Oct', Upsence: 0, Delayed: 0, Presence: 30 },
		    		{ month: 'Nov', Upsence: 4, Delayed: 1, Presence: 25 },
		    		{ month: 'Dec', Upsence: 3, Delayed: 5, Presence: 22 },
		    	],
		    	
		    	keys: {
		    		x: 'month',
		    		value: ['Presence', 'Upsence', 'Delayed'],
		    	},
		    	labels: true,
		      	type: 'spline',

		      	colors: {
					Upsence: 'rgb(214, 39, 40)',
					Delayed: 'rgb(31, 119, 180)',
					Presence: 'green'
				},
		    },

		    {
		    	json: [
		    		{ month: 'Jan', Upsence: 1, Delayed: 0, Presence: 29 },
		    		{ month: 'Feb', Upsence: 0, Delayed: 0, Presence: 28 },
		    		{ month: 'Mar', Upsence: 0, Delayed: 3, Presence: 27 },
		    		{ month: 'Apr', Upsence: 3, Delayed: 1, Presence: 26 },
		    		{ month: 'May', Upsence: 5, Delayed: 1, Presence: 24 },
		    		{ month: 'Jun', Upsence: 0, Delayed: 2, Presence: 28 },
		    		{ month: 'Jul', Upsence: 3, Delayed: 5, Presence: 22 },
		    		{ month: 'Aug', Upsence: 3, Delayed: 6, Presence: 21 },
		    		{ month: 'Sep', Upsence: 10, Delayed: 4, Presence: 16 },
		    		{ month: 'Oct', Upsence: 3, Delayed: 0, Presence: 27 },
		    		{ month: 'Nov', Upsence: 0, Delayed: 4, Presence: 26 },
		    		{ month: 'Dec', Upsence: 0, Delayed: 0, Presence: 29 },
		    	],
		    	
		    	keys: {
		    		x: 'month',
		    		value: ['Presence', 'Upsence', 'Delayed'],
		    	},
		    	labels: true,
		      	type: 'spline',

		      	colors: {
					Upsence: 'rgb(214, 39, 40)',
					Delayed: 'rgb(31, 119, 180)',
					Presence: 'green'
				},
		    },

		    {
		    	json: [
		    		{ month: 'Jan', Upsence: 5, Delayed: 6, Presence: 19 },
		    		{ month: 'Feb', Upsence: 1, Delayed: 7, Presence: 20 },
		    		{ month: 'Mar', Upsence: 8, Delayed: 1, Presence: 21 },
		    		{ month: 'Apr', Upsence: 3, Delayed: 5, Presence: 22 },
		    		{ month: 'May', Upsence: 1, Delayed: 6, Presence: 23 },
		    		{ month: 'Jun', Upsence: 4, Delayed: 2, Presence: 24 },
		    		{ month: 'Jul', Upsence: 3, Delayed: 2, Presence: 25 },
		    		{ month: 'Aug', Upsence: 4, Delayed: 0, Presence: 26 },
		    		{ month: 'Sep', Upsence: 1, Delayed: 2, Presence: 27 },
		    		{ month: 'Oct', Upsence: 1, Delayed: 1, Presence: 28 },
		    		{ month: 'Nov', Upsence: 0, Delayed: 1, Presence: 29 },
		    		{ month: 'Dec', Upsence: 0, Delayed: 0, Presence: 30 },
		    	],
		    	
		    	keys: {
		    		x: 'month',
		    		value: ['Presence', 'Upsence', 'Delayed'],
		    	},
		    	labels: true,
		      	type: 'spline',

		      	colors: {
					Upsence: 'rgb(214, 39, 40)',
					Delayed: 'rgb(31, 119, 180)',
					Presence: 'green'
				},
		    }
		];

		return data;
	},
});

module.exports = Attendance;