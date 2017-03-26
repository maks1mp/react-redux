import { createStore } from 'redux';

function reducer(state, action){
	switch(action.type) {
	case 'INCREMENT':
		return { ...state, ...{counter: state.counter + 1 }};
	case 'DECREMENT':
		return { ...state, ...{counter: state.counter - 1 }};
	case 'RELOAD':
		return { ...state, ...{counter: 0 }}
	default: 
		return state;
	}
};

let store = createStore(reducer, {
	counter: 0
});

export default store;