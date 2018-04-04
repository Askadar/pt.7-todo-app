import React from 'react';

import {CheckMarkToggle, Cross, Pencil} from './UI';

const Todo = ({
	index, text, done, deleting,
	editing, editingText, oneditingTextChange, onTodoEdit, onTodoEdited,
	onDoneClick, onTodoDelete, onTodoDeleteCancel,
}) =>
<div className="todo">
	<label className={`todo-label${done?' done' : ''}`}>
			{
				editing ? <form className="input-field--wrap" onSubmit={
					(e) => e.preventDefault() || onTodoEdited(index, editingText)
				}><input
					value={editingText}
					onChange={
						e => oneditingTextChange(index, e.target.value)
					}
					className="input-field todo-edit"
					type="text"
				/></form> :
				[
					<span key="checkbox-wrap" className="todo-done">
						<input type="checkbox" onChange={
							(e => onDoneClick(index, e.target.checked))
						}/>
						<CheckMarkToggle done={done}/>
					</span>,
					<span
						key="text-wrap"
						className="todo-text"
						onDoubleClick={() => onTodoEdit(index, text)}
						>{text}</span>
				]
			}

			<button
				className={
					`input-button todo-edit--button${editing ? ' editing' : ''}`
				}
				onClick={
					() => editing ?
					onTodoEdited(index, editingText) :
					onTodoEdit(index, text)
				}>
				<Pencil/>
			</button>
			<button
				className={
					`input-button todo-remove--button${deleting ? ' deleting' : ''}`
				}
				onClick={() => onTodoDelete(index)}
				onMouseLeave={() => onTodoDeleteCancel(index)}
				>
				<Cross/>
			</button>
	</label>
</div>


export default Todo
