var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var IndexLink = Router.IndexLink;

var Home = React.createClass({
	render: function(){
		return (
			<div className="container">
				<h2>C3 Charts Examples</h2>
				<br/><br/>
				<div className="list-group">
					Import chart data from Excel file: 
              		<Link activeClassName="active" className="list-group-item" to="excel">Import data from Excel</Link>
				</div>
				<div className="list-group">
					Interactive Attendance Chart Example: 
              		<Link activeClassName="active" className="list-group-item" to="attendance">Interactive Attendance</Link>
				</div>
				<div className="list-group">
					C3-Pubnub Realtime Examples: To start real time streaming click on Start Publish button 
					but data will not be implemented in charts until you click Start Subscribe Button.
					<Link activeClassName="active" className="list-group-item" to="c3-pubnub/line-bar">Line-Bar</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3-pubnub/bar">Bar</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3-pubnub/pie">Pie</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3-pubnub/donut">Donut</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3-pubnub/gauge">Gauge</Link>
				</div>
				<div className="list-group">
					C3 Charts Examples: Showing different types of c3 charts with the use of Load and Flow methods.
					<Link activeClassName="active" className="list-group-item" to="c3/line">Line</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3/bar">Bar</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3/horizontal-bar">Horizontal Bar</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3/pie">Pie</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3/donut">Donut</Link>
              		<Link activeClassName="active" className="list-group-item" to="c3/gauge">Gauge</Link>
				</div>
			</div>
		);
	}
});

module.exports = Home;