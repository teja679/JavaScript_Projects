import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action'

let initialState = {
	count: 0
}

export const countReducer = (state = initialState, action) => {
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
