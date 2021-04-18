import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
class LoginForm extends Form {
	state = {
		data: { username: '', password: '', name: '', age: '', cdc: '', cnic: '', city: '', country: '' },
		errors: {}
	};
	schema = {
		username: Joi.string().email().required().label('Username'),
		password: Joi.string().required().min(5).label('Password'),
		name: Joi.string().required().label('Name'),
		cdc: Joi.string().required().label('Credit/Debit card number'),
		cnic: Joi.string().required().label('CNIC number'),
		age: Joi.string().required().label('Age'),
		city: Joi.string().required().label('City'),
		country: Joi.string().required().label('Country')
	};

	doSubmit = async () => {
		const {username, password, name, cdc, city, country} = this.state.data
		let response = await fetch(`http://localhost:5000/api/register?user=${username}&pass=${password}&name=${name}&cdc=${cdc}&city=${city}&country=${country}`,{
			method: 'POST'
		})
		if(response.status === 400){
			alert('Something went wrong please re-enter your details')
		}
		else{
			alert('User registered')
		}
	};

	render() {
		return (
			<div>
				<h1>Register</h1>
				<form onSubmit={this.handleSubmit}>
					{this.renderInput('username', 'Username')}
					{this.renderInput('password', 'Password', 'password')}
					{this.renderInput('name', 'Name')}
					{this.renderInput('cdc', 'Credit/Debit card number')}
					{this.renderInput('cnic', 'CNIC number')}
					{this.renderInput('age', 'Age')}
					{this.renderInput('city', 'City')}
					{this.renderInput('country', 'Country')}
					{this.renderButton('Register')}
				</form>
			</div>
		);
	}
}

export default LoginForm;
