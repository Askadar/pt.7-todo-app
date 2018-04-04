import React from 'react';

import {CheckMark} from './UI';

class AddTodoField extends React.Component {
	state = {
		focused: false,
		newTodoText: '',
	}
	render(){
		const { onTodoAdd } = this.props;
		const { newTodoText } = this.state;
		return (
			<div className="todo-add">
				<label className={
					`input-field--wrap${this.state.focused ? ' focused' : ''}`
				}>
					<input
						type="text"
						value={newTodoText}
						onChange={
							e => this.setState({newTodoText: e.target.value})
						}
						onFocus={() => this.setState({focused: true})}
						onBlur={() => this.setState({focused: false})}
						className="input-field todo-add--field"
						placeholder="Swim 3 miles"/>
				</label>
				<button
					className="input-button todo-add--button"
					onClick={
						() => onTodoAdd(newTodoText) && this.setState({newTodoText: ''})
					}>
					<CheckMark/>
				</button>
			</div>
		);
	}
}

export default AddTodoField
