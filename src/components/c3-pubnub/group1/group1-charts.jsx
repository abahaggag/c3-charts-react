var React 				= require('react');
var LineChart 			= require('./group1-line-chart');
var BarChart 			= require('./group1-bar-chart');
var HorizontalBarChart  = require('./group1-horizontal-bar-chart');

var Group1Charts = React.createClass({
	render: function(){
		return (
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div className="panel panel-default">
										<div className="panel-body">
											<LineChart />
										</div>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
									<div className="panel panel-default">
										<div className="panel-body">
											<BarChart />
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-12" >
									<div className="panel panel-default">
										<div className="panel-body">
											<HorizontalBarChart />
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Group1Charts;