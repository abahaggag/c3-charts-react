var Reflux = require('reflux');
var Actions = require('../actions.jsx');

var Group2Store = Reflux.createStore({
	listenables: [Actions],

	sendDataGroup3: function(data){
		this.response = data;
		this.triggerChange();	
	},
	
	triggerChange: function(){
		this.trigger('change', this.response);
	},
});

module.exports = Group2Store;