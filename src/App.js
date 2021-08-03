import axios from 'axios';
import { useState, useEffect } from 'react';
import { base_url } from './api';
import './App.css';
import Header from './components/Header';

function App() {
	useEffect(() => {
		axios.get(`${base_url}q=chicken`).then((data) => console.log(data)).catch((err) => console.log(err.message));
	}, []);

	const [
		recipes,
		setRecipes
	] = useState({});

	return (
		<div className="App">
			<Header />
		</div>
	);
}

export default App;
