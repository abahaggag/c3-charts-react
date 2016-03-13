var React 		= require('react');
var Chart 		= require('../excel/group7-chart');
var Control 	= require('../excel/group7-control');
var Api 		= require('../../utils/api.jsx');
var C3Actions 	= require('../../c3-actions');

var Group7 = React.createClass({

	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 style={{textAlign: "center"}} className="panel-title">
									Import Data from Excel File
								</h3>
							</div>
							<div className="panel-body" style={{border:"solid 1px #ddd", margin: 15, borderRadius:5}}>
								<Control />
							</div>
							<Chart />
						</div>
					</div>
				</div>
			</div>
		);
	},
});

module.exports = Group7;