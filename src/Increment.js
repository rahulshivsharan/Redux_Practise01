import React from "react";

export default class Increment extends React.Component{

	constructor(props){
		super(props);				
	}

	render(){
		return(
			<button className="btn btn-primary btn-lg" onClick={this.props.clicked}>Increment</button>
		)
	}
}	