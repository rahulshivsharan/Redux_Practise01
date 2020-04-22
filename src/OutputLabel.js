import React from 'react';


export default class OutputLabel extends React.Component{

	constructor(props){
		super(props);				
	}

	render(){
		return(
			<div className="jumbotron">
				<h1>Counter : {this.props.displayVal}</h1>
			</div>
		)
	}
}