import axios from 'axios';
import { useState, useEffect } from 'react';
import { base_url } from './api';
import './App.css';
import Header from './components/Header';

function App() {
	useEffect(() => {
		axios.get('/recipes').then((data) => {
			setRecipes(data.data.hits);
		});
	}, []);

	const [ recipes, setRecipes ] = useState([]);

	console.log(recipes);
	return (
		<div className="App">
			<Header />
			<h1>Recipe List</h1>
			{recipes && recipes.map((recipe) => <div>{recipe.recipe.label}</div>)}
		</div>
	);
}

export default App;
