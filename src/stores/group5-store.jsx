var Reflux = require('reflux');
var Actions = require('../actions.jsx');

var Group5Store = Reflux.createStore({
	listenables: [Actions],

	sendDataGroup5: function(data){
		this.response = data;
		this.triggerChange();	
	},
	
	triggerChange: function(){
		this.trigger('change', this.response);
	},
});

module.exports = Group5Store;