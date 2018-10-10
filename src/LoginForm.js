import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateForm, submitForm} from './reducer'

class LoginForm extends React.Component{

	onChange(e){
		this.props.update(e.target.name, e.target.value)
	}

	onSubmit(){
		this.props.submit()
	}

	render(){
		return (
			<div>
				<h1>Login</h1>
				<label for="username">Username: </label>
				<input type="text" name="username" id="username" onChange={this.onChange.bind(this)}/>
				<br/>
				<br/>
				<label for="password">Password: </label>
				<input type="password" name="password" id="password" onChange={this.onChange.bind(this)}/>
				<br/>
				<br/>
				<input type="submit" value="Submit" onClick={this.onSubmit.bind(this)}/>
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return {
		...state
	}
}

const mapDispatchToProps = (dispatch)=>{
	return {
		update: (key,value)=>{
			dispatch(updateForm(key,value))
		},
		submit: ()=>{
			dispatch(submitForm())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);