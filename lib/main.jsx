import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import { Switch } from 'react-router';
import { Route, NavLink } from 'react-router-dom';
const Text = styled.p`
	font-size: 50px;
`;
export default
class App extends Component {
	render(){
		const news = () => {
			return(
				<NavLink to={"/profile"}>
					<p>PROFILE</p>
				</NavLink>
			);
		}
		const profile = () => {
			return(
				<NavLink to={"/"}>
					<p>NEWS</p>
				</NavLink>
			);
		}
		return(
			<div>
				<Text>Hi HMR!</Text>
				<Switch>
          <Route exact path={"/"}        render={news}/>
          <Route path={'/profile'}       render={profile}/>
        </Switch>
			</div>
		)
	}
};