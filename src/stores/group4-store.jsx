var Reflux = require('reflux');
var Actions = require('../actions.jsx');

var Group4Store = Reflux.createStore({
	listenables: [Actions],

	sendDataGroup4: function(data){
		this.response = data;
		this.triggerChange();	
	},
	
	triggerChange: function(){
		this.trigger('change', this.response);
	},
});

module.exports = Group4Store;