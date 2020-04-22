const initialState = {
	counter : 0
}

const reducer = function(state = initialState,action){

	if(action.type === 'INCREMENT'){
		return {
			counter : state.counter + 1
		}
	}

	if(action.type === 'DECREMENT'){
		return {
			counter : state.counter - 1
		}
	}

	if(action.type === 'PRODUCT_OF_TWO'){
		return {
			counter : state.counter * 2
		}
	}

	return state;
}

export default reducer;