var React 	 = require('react');
var BarChart = require('./group5-bar-chart');

var Group5Charts = React.createClass({
	render: function(){
		return (
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
					<div className="panel panel-default">
						<div className="panel-body">
							<div className="row">
								<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
									<div className="panel panel-default">
										<div className="panel-heading">
											<h3 style={{textAlign: "center"}} className="panel-title">Leave Types</h3>
										</div>
										<div className="panel-body">
											<BarChart />
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

module.exports = Group5Charts;