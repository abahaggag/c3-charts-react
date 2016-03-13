var React 		= require('react');
var DonutChart  = require('./group3-donut-chart');

var Group3Charts = React.createClass({
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
											<DonutChart />
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

module.exports = Group3Charts;