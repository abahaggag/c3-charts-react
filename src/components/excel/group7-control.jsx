var React 		= require('react');
var Api 		= require('../../utils/api.jsx');
var C3Actions 	= require('../../c3-actions');

var Group7Control = React.createClass({

	getInitialState: function(){
		return {
			fileData: '',
			canSubmit: false,
			type: 'bar',
			isImported: false,
			isStacked: false,
		}
	},

	handleImportSubmit: function(event){
		event.preventDefault();
  		
  		file = this.state.fileData;
  		
  		var input = document.querySelector('input[type="file"]');
  		name = input.files[0].name;
  		params = {'file': file, 'original_filename': name};
  		
  		Api.post("excels/import", params)
  			.then(function(json){
  				
  				var data = {};
  				var type = this.state.type;

  				data = {
  					x: 'x',
  					labels: true,
		      		type: this.state.type,
  				};

  				if(this.state.type == "stacked_bar"){
  					data.type = "bar";
  					data['groups'] = [json.data.keys];
  				}

  				data.columns = json.data.columns;
  				data.columns.push(json.data.x);
  						    	
  				var generate_options = {
					bindto: '#c3_chart',
					data: data,
					axis: {
			    		x: { 
			    			type: 'category', 
			    		}
			    	},
			    	grid: {
						x: {
							show: true
						},

						y: {
							show: true,
						}
					},
					bar: {
					  	width: {
					    	ratio: 0.8
					  	}
					},
				    transition: {
					  	duration: 1000
					}
				};

				this.setState({isImported: true});

				C3Actions.generate(generate_options);
				//this.refs.form.reset(); // reset all form fields
				$(this.refs.input_file).val(""); // reset input file
				
  			}.bind(this));
  		this.disableButton();
	},

	handleFile: function(e){
		this.disableButton();

		var self = this;
		var reader = new FileReader();
		var file = e.target.files[0];
		reader.onload = function(upload) {
			self.setState({
			  fileData: upload.target.result,
			});
		};
		reader.readAsDataURL(file);

		this.enableButton();
	},

	handleTypeChange: function(event){
		this.setState({type: event.target.value});
		this.state.type = event.target.value;

		if(this.state.isImported){
			C3Actions.transform(this.state.type);
		}
	},
	
	render: function(){
		return (
			<div>
				<form encType="multipart/form-data" ref="form" acceptCharset="UTF-8" onSubmit={this.handleImportSubmit} style={{margin: 0}}>
									
					<input type="file" name="file"  className="form-control" ref="input_file"
					 onChange={this.handleFile} style={{width: 50+"%", display: "inline", float: "left", marginRight: 1+"%"}}/>
					
					<select ref="type_select" className="form-control" value={this.state.type}
						onChange={this.handleTypeChange} style={{width: 30+"%", display: "inline", float: "left"}}>
						<option value="bar">Bar</option>
						<option value="stacked_bar">Stacked Bar</option>
						<option value="line">Line</option>
						<option value="spline">SPLine</option>
						<option value="area">Area</option>
						<option value="step">Step</option>
						<option value="area-step">Area Step</option>
						<option value="pie">Pie</option>
						<option value="donut">Donut</option>
						<option value="scatter">Scatter</option>
					</select>
					
					<input type="submit" className="btn btn-default" style={{width: 15+"%", display: "inline", float: "right"}}
						value="Import" disabled={!this.state.canSubmit} />
				</form>
			</div>
		);
	},

	enableButton: function(){
		this.setState({canSubmit: true});
	},

	disableButton: function(){
		this.setState({canSubmit: false});
	},
});

module.exports = Group7Control;