import React from 'react';
import ReactDOM from 'react-dom';
import { App, store } from './app/App';

const mainRender = () => {
	ReactDOM.render(
			<App tasks={ store.getState().todoList }/>,
			document.getElementById('root')
	);	
};

store.subscribe(()=>{
	console.log( store.getState() );
	mainRender();
});

mainRender();


