import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import store from './reducers/reducer';

const render = () => {
	ReactDOM.render(
  		<App counter={ store.getState().counter }/>,
  		document.getElementById('root')
	);	
}

store.subscribe(()=>{
	render();
});

render();