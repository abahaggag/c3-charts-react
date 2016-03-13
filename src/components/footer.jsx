var React = require('react');

var Footer = React.createClass({
	render: function(){
		return (
			<div>
				<div className="container">
					<hr />
					<footer>
						<div className="row">
							<div className="col-lg-12">
								<p style={{textAlign: "center"}}>Copyright &copy; clickapps.co 2016<br/>By: Ahmed Bahaggag</p>
							</div>
						</div>
					</footer>
				  </div>
			</div>
		);
	}
});

module.exports = Footer;