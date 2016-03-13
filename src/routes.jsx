var React 			= require('react');
var ReactRouter 	= require('react-router');
var hasHistory 		= require('history/lib/createHashHistory');
var Router 			= ReactRouter.Router;
var Route 			= ReactRouter.Route;
var IndexRoute 		= ReactRouter.IndexRoute;

var C3Line 			= require('./components/c3/line');
var C3Bar 			= require('./components/c3/bar');
var C3HorizontalBar = require('./components/c3/horizontal-bar');
var C3Pie 			= require('./components/c3/pie');
var C3Donut 		= require('./components/c3/donut');
var C3Gauge 		= require('./components/c3/gauge');

var C3PubnubLineBar = require('./components/c3-pubnub/group1/group1');
var C3PubnubPie 	= require('./components/c3-pubnub/group2/group2');
var C3PubnubDonut 	= require('./components/c3-pubnub/group3/group3');
var C3PubnubGauge 	= require('./components/c3-pubnub/group4/group4');
var C3PubnubBar 	= require('./components/c3-pubnub/group5/group5');

var Attendance = require('./components/attendance/group6');
var Excel = require('./components/excel/group7');

var history = hasHistory({
  queryKey: false
});

var Main = require('./components/main');
var Home = require('./components/home');

var Routes = (
	<Router history={history}>
		<Route path="/" component={Main}>
			<IndexRoute component={Home} />
			<Route path="c3/line" component={C3Line} />
			<Route path="c3/bar" component={C3Bar} />
			<Route path="c3/horizontal-bar" component={C3HorizontalBar} />
			<Route path="c3/pie" component={C3Pie} />
			<Route path="c3/donut" component={C3Donut} />
			<Route path="c3/gauge" component={C3Gauge} />

			<Route path="c3-pubnub/line-bar" component={C3PubnubLineBar} />
			<Route path="c3-pubnub/pie" component={C3PubnubPie} />
			<Route path="c3-pubnub/donut" component={C3PubnubDonut} />
			<Route path="c3-pubnub/gauge" component={C3PubnubGauge} />
			<Route path="c3-pubnub/bar" component={C3PubnubBar} />
			
			<Route path="attendance" component={Attendance} />
			<Route path="excel" component={Excel} />
		</Route>
	</Router>
);

module.exports = Routes;