var Reflux = require('reflux');
var C3Actions = require('../c3-actions');

var C3Store = Reflux.createStore({
	listenables: [C3Actions],

	generate: function(generate_options){
		//this.response = { generate_options: {}, operation: '' };
		this.response = {};
		this.response['generate_options'] = generate_options;
		this.response['operation'] = 'generate';

		this.triggerChange();
	},

	destroy: function(){
		this.response['operation'] = 'destroy';
		this.triggerChange();
	},

	load: function(){
		this.response['operation'] = 'load';
		this.triggerChange();
	},

	unload: function(){
		this.response['operation'] = 'unload';
		this.triggerChange();
	},

	flow: function(){
		this.response['operation'] = 'flow';
		this.triggerChange();
	},

	transform: function(type){
		this.response['isStacked'] = false;
		if(type == 'stacked_bar'){
			type = 'bar';
			this.response['isStacked'] = true;			
		}

		this.response['type'] = type;
		this.response['operation'] = 'transform';
		this.triggerChange();
	},

	triggerChange: function(){
		this.trigger('change', this.response);
	},
});

module.exports = C3Store;