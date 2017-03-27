import React, { Component } from 'react';
import reducer from '../reducers/index';
import { createStore } from 'redux';



const store = createStore(reducer, { todoList: [{title: 'First', id: 0, done: false}] });

class TodoList extends Component {
	render(){
		return (
				<li>
					{ this.props.title }
				</li>
			)
	}
}

class InputTask extends Component {
	constructor(){
		super()
		this.addTask = this.addTask.bind(this);
	}
	addTask(){
		store.dispatch({
			type: 'ADD_TASK',
			payload: this.textInput.value
		});
		this.textInput.value = '';
	}
	render(){
		return (
				<div>
					<input type="text"  ref={(input) => { this.textInput = input; }} />
					<button onClick={ this.addTask }> ADD </button>
				</div>
			)
	}
}

class App extends Component {
  render(){
  	const { tasks } = this.props; 
    return (
    	<div>
    		<InputTask />
    		<ul>
	      		{
	    			tasks.map((item) => {
	    				return <TodoList key={item.id} title={item.title} />
	    			})				
	      		}
      		</ul>
    	</div>
    )
  }
}

export { App, store };
