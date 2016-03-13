var React 		= require('react');
var GaugeChart  = require('./group4-gauge-chart');

var Group4Charts = React.createClass({
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
											<GaugeChart />
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

module.exports = Group4Charts;