import React, { Component } from 'react';

class LoginForm extends React.Component{
	render(){
		return (
			<div>
				<h1>Login</h1>
				<label for="username">Username: </label>
				<input type="text" name="username" id="username"/>
				<br/>
				<br/>
				<label for="password">Password: </label>
				<input type="password" name="password" id="password"/>
				<br/>
				<br/>
				<input type="submit" value="Submit"/>
			</div>
		)
	}
}

export default LoginForm;