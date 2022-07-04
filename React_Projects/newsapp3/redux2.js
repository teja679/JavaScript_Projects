const { createStore, applyMiddleware, combineReducers } = require('redux')  
const { createLogger } = require('redux-logger')


const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const DISPLAY = 'DISPLAY'
const HIDE = 'HIDE' 

// Action Creators: Functions with return action object
const incrementCounter = (count) => ({
	type: INCREMENT_COUNTER,
	payLoad : count
})
const decrementCounter = (count = 1) => ({
	type: DECREMENT_COUNTER,
	payLoad : count
})

const display = () => ({
    type: DISPLAY
})
const hide = () => ({
    type: HIDE
})

let countInitialState = {
	count: 0,
}

let showInitialState = {
    show: false
}
const countReducer = (state = countInitialState, action) => {
	switch(action.type){
		case INCREMENT_COUNTER:
			return{
                ...state,
				count : state.count + action.payLoad
			}
		case DECREMENT_COUNTER:
			return{
                ...state,
				count: state.count - action.payLoad
			}
		default:
			return state
	}
}
const showReducer = (state = showInitialState, action) => {
	switch(action.type){
        case DISPLAY:
            return{
                ...state,
				show: true
			}
        case HIDE:
            return{
                ...state,
				show: false
			}
		default:
			return state
	}
}

let rootReducer = combineReducers({
    show : showReducer,
    count : countReducer
})

let store = createStore(rootReducer, applyMiddleware(createLogger()))

let unSubscribe = store.subscribe(() => {})

store.dispatch(incrementCounter(3))
store.dispatch(incrementCounter(3))
store.dispatch(display())

store.dispatch(decrementCounter(5))
store.dispatch(hide())

unSubscribe()