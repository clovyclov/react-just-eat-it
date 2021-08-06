import axios from 'axios';
import { useState, useEffect } from 'react';
import { base_url } from './api';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import GlobalStyles from './components/GlobalStyles';

function App() {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ recipeTitle, setRecipeTitle ] = useState('');
	useEffect(
		() => {
			console.log(searchTerm);
		},
		[ searchTerm ]
	);
	useEffect(() => {
		if (searchTerm == '') {
			axios
				.get('/recipes', {
					params : {
						q : 'chicken'
					}
				})
				.then((data) => {
					setRecipes(data.data.hits);
				});
		}
	}, []);

	const [ recipes, setRecipes ] = useState([]);

	return (
		<div className="App">
			<GlobalStyles />
			<Header
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				setRecipes={setRecipes}
				setRecipeTitle={setRecipeTitle}
			/>
			<Recipes recipes={recipes} recipeTitle={recipeTitle} setRecipeTitle={setRecipeTitle} />
		</div>
	);
}

export default App;
