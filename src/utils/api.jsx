var Fetch = require('whatwg-fetch');
var rootUrl = 'http://import-excel.herokuapp.com/';

module.exports = window.api = {

	post: function(url,params){

		return fetch(rootUrl + url,{
				method: 'post',
				headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
				body: JSON.stringify(params)
		})
		
		.then(function(response){
			return response.json() ;
		})

	},

	put: function(url,params){
		return fetch(rootUrl + url,{
				method: 'put',
				headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
				body: JSON.stringify(params)
		})
		
		.then(function(response){
			return response.json();
		})
	},

	delete: function(url){
		return fetch(rootUrl + url,{
				method: 'delete'
		})
		
		.then(function(response){
			return response.json();
		})
	}
};