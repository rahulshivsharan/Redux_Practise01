import React from "react";
import TitlePage from "./TitlePage";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Multiply from "./Multiply";
import OutputLabel from "./OutputLabel";
import { connect } from 'react-redux';

/*
	Mapping state defined in reducer to props 
*/
const mapStateToProps = function(state){
	return {
		ctr : state.counter
	}
}

/*
	Mapping dispatchers to props
*/
const mapDispatchToProps = function(dispatch){
	return {
		onIncrementCounter : function(){
			dispatch({ type : "INCREMENT" });
		},
		onDecrementCounter : function(){
			dispatch({ type : "DECREMENT" });
		},
		onMuliplyByTwoCounter : function(){
			dispatch({ type : "PRODUCT_OF_TWO" });
		}
	}
}

class App extends React.Component{
	render(){
		return (			
				<div>
					{/*-- Title page --*/}
					<TitlePage />
					{/*-- Body start --*/}
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<Increment clicked={this.props.onIncrementCounter} />
							</div>
							<div className="col-md-4">
								<Decrement clicked={this.props.onDecrementCounter} />
							</div>
							<div className="col-md-4">
								<Multiply clicked={this.props.onMuliplyByTwoCounter} />
							</div>
						</div>{/* end of row */}
						<div className="row pushdown">
							<div className="col-md-6 col-md-offset-2">
								<OutputLabel displayVal={this.props.ctr} />
							</div>
						</div>
					</div>	
				</div>				
			
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);