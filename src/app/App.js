import React, { Component } from 'react';
import store from '../reducers/reducer';

// console.log(  )

class App extends Component {
  render(){
    return (
    	<div>
      		<h1> 
      			<button onClick={()=>{
      				store.dispatch({
      					type: 'DECREMENT',
      				});
      			}}> - </button>
      			{ this.props.counter }
      			<button onClick={()=>{
      				store.dispatch({
      					type: 'INCREMENT',
      				});
      			}}> + </button>
		  </h1>
    	</div>
    )
  }
}

export default App;
