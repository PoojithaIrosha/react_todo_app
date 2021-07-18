import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from '@material-ui/core';
import React from 'react';
import './Todo.css';

function Todo(props) {
	return (
		<List className="todo__list">
			<ListItem>
				<ListItemAvatar></ListItemAvatar>
				<ListItemText
					primary={props.text}
					secondary="Dummy deadline ⏰"
				></ListItemText>
			</ListItem>
		</List>
	);
}

export default Todo;
