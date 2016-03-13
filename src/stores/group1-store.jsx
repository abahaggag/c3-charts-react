var Reflux = require('reflux');
var Actions = require('../actions.jsx');

var Group1Store = Reflux.createStore({
	listenables: [Actions],

	sendData: function(data){
		this.response = data;
		this.triggerChange();	
	},
	
	triggerChange: function(){
		this.trigger('change', this.response);
	},
});

module.exports = Group1Store;