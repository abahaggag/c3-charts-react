var Reflux = require('reflux');

var C3Actions = Reflux.createActions([
	'generate',
	'destroy',
	'load',
	'unload',
	'flow',
	'transform'
]);

module.exports = C3Actions;