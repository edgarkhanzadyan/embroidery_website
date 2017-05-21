import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import App from './main';
import { AppContainer } from 'react-hot-loader'

render(
	<AppContainer>
		<App/>
	</AppContainer>,
	document.getElementById('root'));

if(module.hot) {
    module.hot.accept('./main', () => {
        const NewApp = require('./main').default;
        render(
				<AppContainer>
					<NewApp/>
				</AppContainer>,
				document.getElementById('root'));
    });
}