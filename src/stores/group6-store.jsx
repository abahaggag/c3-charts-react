var Reflux = require('reflux');
var Actions = require('../actions.jsx');

var Group6Store = Reflux.createStore({
	listenables: [Actions],

	sendDataGroup6: function(data, month){
		this.response = data;
		this.month = month;
		this.triggerChange();	
	},
	
	triggerChange: function(){
		this.trigger('change', this.response, this.month);
	},
});

module.exports = Group6Store;