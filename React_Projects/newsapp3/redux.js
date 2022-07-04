const { createStore, applyMiddleware } = require('redux')  
const { createLogger } = require('redux-logger')
/*
    ACTION
    {
            type: 'INCREMENT_COUNTER'
    }
*/
// Action Type Constants
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

// Action Creators: Functions with return action object
const incrementCounter = (count) => ({
	type: INCREMENT_COUNTER,
	payLoad : count
})
const decrementCounter = (count = 1) => ({
	type: DECREMENT_COUNTER,
	payLoad : count
})

/*
	REDUCER FUNCTION
	- Define the intial state (Central State)
	- Function with 2 parameter - prevState , action
	- Contains logic to return the updated state on the basis
	of action type
*/

let initialState = {
	count: 0
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case INCREMENT_COUNTER:
			return{
				count : state.count + action.payLoad
			}
		case DECREMENT_COUNTER:
			return{
				count: state.count - action.payLoad
			}
		default:
			return state
	}
}

/*
	REDUX STORE
	- store = createStore
	- store.subscribe
*/

// Create the store
let store = createStore(reducer, applyMiddleware(createLogger()))

// Subscribe to the store (Returns reference to Unsubscribe method)
let unSubscribe = store.subscribe(() => {})

// Get the current state of redux store
//console.log(store.getState())

// Dispatch actions to cause state updates
store.dispatch(incrementCounter(3))
//console.log(store.getState())
store.dispatch(incrementCounter(3))
//console.log(store.getState())
store.dispatch(incrementCounter(3))

//console.log(store.getState())
store.dispatch(decrementCounter(5))
//console.log(store.getState())
store.dispatch(decrementCounter())

//console.log(store.getState())
unSubscribe()