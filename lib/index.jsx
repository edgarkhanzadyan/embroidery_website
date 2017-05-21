import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
const Text = styled.p`
	font-size: 50px;
`
class App extends Component {
	render(){
		return(
			<div>
				<Text>hi</Text>
			</div>
		)
	}
}
render(<App />, document.getElementById('root'))