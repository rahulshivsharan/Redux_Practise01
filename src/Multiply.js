import React from "react";

export default class Multiply extends React.Component{
	constructor(props){
		super(props);				
	}

	render(){
		return(
			<button className="btn btn-primary btn-lg" onClick={this.props.clicked}>Multiply By 2</button>
		)
	}
}	