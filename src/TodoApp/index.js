import React, { Component } from 'react';
import TodoList from './TodoList';

// const boundHandlers = (thisRef, setKey, handlers) =>
// Object.entries(handlers)
// .map(([key, handler]) => [key, handler.bind(thisRef, setKey)])
// .reduce((handlers, [key, handler]) => {
// 	handlers[key] = handler;
// 	return handlers
// }, {})

import './todo.css';

class TodoApp extends Component {
	render() {
		return (
			<TodoList
				setKey="today"
				todosLabel="ToDo ToDay"
			/>
		);
	}
}

export default TodoApp;
