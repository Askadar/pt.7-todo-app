import React, { Component } from 'react';
import { List, Record } from 'immutable';

import Todo from './Todo';
import Header from './TodoHeader';
import AddTodoField from './AddTodoField';

const TodoRecord = Record({
	text: 'Todo is to do',
	done: false
})

class TodoList extends Component {
	state = {
		todos: List([
			TodoRecord({text: 'Why you forgot to add me text?'}),

		]),
		newTodoText: '',
		editingTodo: null,
		editingTodoText: '',
		deletingTodo: null,
	}
	render(){
		const handlers = {
			onDoneClick: (index, done) => {
				const todoSet = this.state.todos;
				const newTodoSet = todoSet.set(
					index, todoSet.get(index).set('done', done)
				);
				return this.setState({todos: newTodoSet});
			},
			onTodoAdd: (text = '') => {
				if (text === '') return false;
				const todos = this.state.todos;
				this.setState({todos: todos.push(TodoRecord({text}))});
				return true;
			},
			onTodoDelete: (deleting) => {
				if (!isNaN(deleting) && this.state.deletingTodo === deleting){
					handlers.onTodoDeleted(true);
					this.setState({deletingTodo: null});
				}
				this.setState({deletingTodo: isNaN(deleting) ? null : deleting})
			},
			onTodoDeleteCancel: (index) => {
				handlers.onTodoDelete(null);
			},
			onTodoDeleted: (fallback) => {
				if (!fallback) return;
				const todos = this.state.todos;
				let newTodoSet = todos.remove(this.state.deletingTodo);
				return this.setState({todos: newTodoSet});
			},
			onTodoEdit: (index, text) => {
				console.log(this, this.state.editingTodo);
				this.setState({
					editingTodo: text ? index : null,
					editingTodoText: text
				});
			},
			onTodoEdited: (index, text) => {
				if (text === '') return false;
				const todos = this.state.todos;
				this.setState({
					todos: todos.set(
						index, todos.get(index).set('text', text)
					),
					editingTodo: null,
					editingTodoText: ''
				});
			},
			oneditingTextChange: (index, text) => {
				this.setState({editingTodoText: text});
			},
		}
		const { onTodoAdd, ...otherHandlers } = handlers;
		const {todos, editingTodo, editingTodoText, deletingTodo, } = this.state;
		const { todosLabel } = this.props;
		return (
			<div className="todos">
				<Header>{todosLabel}</Header>
				<link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet" />
				{
					todos.map((todo, i) =>
						<Todo
							key={i}
							index={i}
							deleting={!isNaN(deletingTodo) && deletingTodo === i}
							editing={!isNaN(editingTodo) && editingTodo === i}
							editingText={!isNaN(editingTodo) && editingTodo === i ? editingTodoText : ''}
							{...(todo.toJS())}
							{...otherHandlers}
						/>
					)
				}
				<AddTodoField visible onTodoAdd={onTodoAdd} />
			</div>
		)
	}
}

export default TodoList
