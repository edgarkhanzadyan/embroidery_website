import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
const Text = styled.p`
	font-size: 50px;
`;
export default
class App extends Component {
	render(){
		return(
			<div>
				<Text>Hi HMR!</Text>
			</div>
		)
	}
};