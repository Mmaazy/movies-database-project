import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './common/form';
import Sidebar from './sidebar';

class LoginForm extends Form {
	state = {
		data: {
			tags: '',
			participants: '',
			name: '',
			business_Owners: '',
			experts: '',
			systems: '',
			due_date_range: '',
			cycle_time: '',
			work_time: '',
			wait_time: '',
			task_type: '',
			color: '',
			cost: '',
			suppliers: '',
			inputs: '',
			outputs: '',
			category: '',
			value: ''
		},
		errors: {}
	};
	schema = {
		tags: Joi.string().required().label('Tags'),
		participants: Joi.string().required().label('Participants'),
		name: Joi.string().required().min(3).label('name'),
		business_Owners: Joi.string().required().label('Busniess Owners'),
		experts: Joi.string().required().label('Experts'),
		systems: Joi.string().required().label('Systems'),
		due_date_range: Joi.string().required().label('Due Date Range'),
		cycle_time_min: Joi.string().required().label('Cycle Time Min'),
		cycle_time_max: Joi.string().required().label('Cycle Time Max'),
		work_time_max: Joi.string().required().label('Work Time Max'),
		work_time_min: Joi.string().required().label('Work Time Min'),
		wait_time_max: Joi.string().required().label('Work Time Max'),
		wait_time_min: Joi.string().required().label('Work Time Min'),
		task_type: Joi.string().required().label('Task Type'),
		color: Joi.string().required().label('Color'),
		suppliers: Joi.string().required().label('Suppliers'),
		inputs: Joi.string().required().label('Inputs'),
		outputs: Joi.string().required().label('Outputs'),
		category: Joi.string().required().label('Category'),
		value: Joi.string().required().label('Value'),
		cost_min: Joi.string().required().label('Cost Min'),
		cost_max: Joi.string().required().label('Cost Max')
	};

	doSubmit = () => {
		console.log('Submitted');
	};

	render() {
		const _styleObj = {
			marginTop: '-15em'
		};
		return (
			<React.Fragment>
				<div className="form">
					<h1>Form 1</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="row">
							<div className="col-6">{this.renderInput('tags', 'Tags')}</div>
							<div className="col-6">{this.renderInput('participants', 'Participants', 'text')}</div>
							<div className="col-6">
								{this.renderInput('business_Owners', 'Business Owners', 'text')}
							</div>
							<div className="col-6">{this.renderInput('experts', 'Experts', 'text')}</div>
							<div className="col-6">{this.renderInput('systems', 'Systems', 'text')}</div>
							<div className="col-6">{this.renderInput('due_date_range', 'Due Date Range', 'date')}</div>
							<div className="col-3">{this.renderInput('cycle_time_min', 'Cyclye Time Min', 'date')}</div>
							<div className="col-3">{this.renderInput('cycle_time_max', 'Cycle Time Max', 'date')}</div>
							<div className="col-3">{this.renderInput('work_time_min', 'Work Time Min', 'date')}</div>
							<div className="col-3">{this.renderInput('work_time_max', 'Work Time Max', 'date')}</div>
							<div className="col-3">{this.renderInput('wait_time_min', 'Wait Time Min', 'date')}</div>
							<div className="col-3">{this.renderInput('wait_time_max', 'Wait Time Max', 'date')}</div>
							<div className="col-6">{this.renderInput('task_type', 'Task Type', 'text')}</div>
							<div className="col-6">{this.renderInput('color', 'Color', 'text')}</div>
							<div className="col-3">{this.renderInput('cost_min', 'Cost Min', 'number')}</div>
							<div className="col-3">{this.renderInput('cost_max', 'Cost Max', 'number')}</div>
							<div className="col-6">{this.renderInput('suppliers', 'Suppliers', 'text')}</div>
							<div className="col-6">{this.renderInput('inputs', 'Inputs', 'text')}</div>
							<div className="col-6">{this.renderInput('outputs', 'Outputs', 'text')}</div>
							<div className="col-6">{this.renderInput('category', 'Risk Category', 'text')}</div>
							<div className="col-6">{this.renderInput('value', 'Value Add', 'text')}</div>
						</div>
						{this.renderButton('Submit Form One')}
					</form>
				</div>
			</React.Fragment>
		);
	}
}

export default LoginForm;
