var React 	 = require('react');
var PieChart = require('./group2-pie-chart');

var Group2Charts = React.createClass({
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
											<PieChart />
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

module.exports = Group2Charts;