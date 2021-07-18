import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
	const [todos, setTodos] = useState([]);

	// When the app loads, we need to listen to the database and fetch new todos as they get added/removed
	useEffect(() => {
		// this code here...fires when the app loads
		db.collection('todos')
			.orderBy('timestamp', 'desc')
			.onSnapshot(snapshot => {
				setTodos(snapshot.docs.map(doc => doc.data().todo));
			});
	}, []);
	const [input, setInput] = useState('');

	const addTodo = event => {
		// This will fire off when we click the button
		event.preventDefault(); // will stop REFRESH

		db.collection('todos').add({
			todo: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setTodos([...todos, input]);
		setInput(''); // clear up the input after clicking add todo button
	};

	return (
		<div className="App">
			<h1>💥 Poojitha Irosha 🚀!</h1>
			<form>
				<FormControl>
					<InputLabel>✅ Write a Todo</InputLabel>
					<Input
						value={input}
						onChange={event => setInput(event.target.value)}
					/>
				</FormControl>

				<Button
					type="submit"
					onClick={addTodo}
					variant="contained"
					color="primary"
					disabled={!input}
				>
					Add Todo
				</Button>
			</form>

			<ul>
				{/* Loop through the list and add to the list element */}
				{todos.map(todo => (
					<Todo text={todo} />
				))}
			</ul>
		</div>
	);
}

export default App;
