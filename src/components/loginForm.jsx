import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import com from '../assets/images/comp.png'
import '../assets/css/loginform.css'

class LoginForm extends Form {
	state = {
		data: { username: '', password: '' },
		errors: {}
	};
	schema = {
		username: Joi.string().required().label('Username'),
		password: Joi.string().required().label('Password')
	};

	doSubmit = async () => {
		const { username, password, history} = this.state.data
		let response = await fetch(`http://localhost:5000/api/login?user=${username}&pass=${password}`, {
			method: 'POST'
		})
		if(response.status == '400' ){
			alert('Invalid login details')
		}
		else{
			this.props.history.push('/watchMovies')			
		}
		console.log(response)
	};

	/*handleChange = (e) => {
		this.setState({ data: { [e.target.username]: e.target.value } });
	};*/
	render() {
		return (
			<div class="firstcontainer">
				<header>
				<h1>Login</h1>
				<div><img className="compimg" src={com}/></div>
				
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderButton('Login')}
				</form>
				</header>
			</div>
		);
	}
}

export default LoginForm;
