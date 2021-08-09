import axios from 'axios';
import { useState, useEffect, createContext } from 'react';
import { base_url } from './api';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import GlobalStyles from './components/GlobalStyles';
import RecipeDetails from './components/RecipeDetails';

export const AppState = createContext();
function App() {
	const [ searchTerm, setSearchTerm ] = useState('');
	const [ recipeTitle, setRecipeTitle ] = useState('');
	const [ currentRecipe, setCurrentRecipe ] = useState({});
	const [ recipeActive, setRecipeActive ] = useState(false);
	const [ recipes, setRecipes ] = useState([]);

	const stateValues = {
		searchTerm,
		setSearchTerm,
		recipeTitle,
		setRecipeTitle,
		currentRecipe,
		setCurrentRecipe,
		recipeActive,
		setRecipeActive
	};

	//useEffect(() => {}, [ searchTerm ]);
	//useEffect(() => {}, [ currentRecipe ]);
	useEffect(() => {
		if (searchTerm === '') {
			axios
				.get('/recipes', {
					params : {
						q : 'food'
					}
				})
				.then((data) => {
					setRecipes(data.data.hits);
				});
		}
	}, []);

	return (
		<AppState.Provider value={stateValues}>
			<div className="App">
				<GlobalStyles />
				<Header
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					setRecipes={setRecipes}
					setRecipeTitle={setRecipeTitle}
				/>
				<Recipes recipes={recipes} recipeTitle={recipeTitle} setRecipeTitle={setRecipeTitle} />
				<RecipeDetails />
			</div>
		</AppState.Provider>
	);
}

export default App;
