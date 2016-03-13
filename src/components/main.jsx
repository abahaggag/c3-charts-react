var React = require('react');
var Header = require('./header');
var Footer = require('./footer');

var Main = React.createClass({
	render: function(){
		return (
			<div>
				<Header />
				<div className="container">
					{
						this.props.children
					}
				</div>	
				<Footer />
			</div>
		);
	}
});

module.exports = Main;