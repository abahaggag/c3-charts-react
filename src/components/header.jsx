var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var IndexLink = Router.IndexLink;

var Header = React.createClass({
	render: function(){
		return (
			<div>
			  	<nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
			      	<div className="container">
			          
			          	<div className="navbar-header">
			              	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
			                	<span className="sr-only">Toggle navigation</span>
			                	<span className="icon-bar"></span>
			                	<span className="icon-bar"></span>
			                	<span className="icon-bar"></span>
			              	</button>
			              	<IndexLink activeClassName="active" to="/" className='navbar-brand'>C3 Charts Examples</IndexLink>
			          	</div>
			          
			          	<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			              	<ul className="nav navbar-nav">
			                  	<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">C3<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li>
					                  		<Link activeClassName="active" to="c3/line">Line Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3/bar">Bar Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3/horizontal-bar">Horizontal Bar Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3/pie">Pie Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3/donut">Donut Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3/gauge">Gauge Chart</Link>
					                  	</li>
									</ul>
								</li>
			                  	<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">C3-Pubnub<span className="caret"></span></a>
									<ul className="dropdown-menu">
										<li>
					                  		<Link activeClassName="active" to="c3-pubnub/line-bar">Line Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3-pubnub/bar">Bar Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3-pubnub/pie">Pie Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3-pubnub/donut">Donut Chart</Link>
					                  	</li>
					                  	<li>
					                  		<Link activeClassName="active" to="c3-pubnub/gauge">Gauge Chart</Link>
					                  	</li>
									</ul>
								</li>
								<li>
			                  		<Link activeClassName="active" to="attendance">Interactive Attendance</Link>
			                  	</li>
			                  	<li>
			                  		<Link activeClassName="active" to="excel">Import Excel</Link>
			                  	</li>
			              	</ul>
			          	</div>
			      	</div>
			  	</nav>
			</div>
		);
	}
});

module.exports = Header;