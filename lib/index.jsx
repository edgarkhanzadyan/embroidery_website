import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import Layout from './main';
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom';

render(
	<AppContainer>
		<Router>
			<Layout/>
		</Router>
	</AppContainer>,
	document.getElementById('root'));

if(module.hot) {
    module.hot.accept('./main', () => {
        const NewLayout = require('./main').default;
        render(
				<AppContainer>
					<Router>
						<NewLayout/>
					</Router>
				</AppContainer>,
				document.getElementById('root'));
    });
}