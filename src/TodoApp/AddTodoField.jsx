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
		const addTodo = (e) => e.preventDefault() || onTodoAdd(newTodoText) && this.setState({newTodoText: ''});
		return (
			<form className="todo-add" onSubmit={addTodo}>
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
					onClick={addTodo}>
					<CheckMark/>
				</button>
			</form>
		);
	}
}

export default AddTodoField
