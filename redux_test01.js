const redux = require("redux");
const createStore = redux.createStore;


const initialState = {
	counter : 0
}

// Reducer
/*
	reducer gets two arguments, first the currenct state and second the action.
	reducer returns an updated state.
*/
const rootReducer = function(state = initialState,action){
	if(action.type === 'INC_COUNTER'){
		return {
			...state,
			counter : state.counter + 1
		}
	}

	if(action.type === 'ADD_COUNTER'){
		return {
			...state,
			counter : state.counter + action.value
		}
	}

	return state;
}

// store
const store = createStore(rootReducer);
console.log(store.getState());


// Dispatching Action
store.dispatch({
	type : 'INC_COUNTER'
});

console.log(store.getState());

store.dispatch({
	type : 'ADD_COUNTER',
	value : 5 
});

console.log(store.getState());

store.dispatch({
	type : 'ADD_COUNTER',
	value : 5 
});

console.log(store.getState());

// Subscription

