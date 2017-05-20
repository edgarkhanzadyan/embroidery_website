import React, { Component } from 'react';
import { render } from 'react-dom';
import style from './style.css';
class App extends Component {
	render(){
		return(
			<div>
				<p className={style.some}>hi</p>
			</div>
		)
	}
}
render(<App />, document.getElementById('root'))