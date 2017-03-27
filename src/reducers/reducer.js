export default function todoList(state = [], action){
	switch(action.type) {
	case 'ADD_TASK':
		return [...state,  {
			title: action.payload,
			id: state.length ? state[state.length-1].id + 1 : 0,
			done: false
		}];
	default: return state;
	
	}
}