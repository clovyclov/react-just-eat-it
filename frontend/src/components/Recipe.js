import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { AppState } from '../App';

const Recipe = ({ label, image, source, calories, dishType, mealType, ingredients }) => {
	const stateList = useContext(AppState);
	//console.log(stateList);
	const seeRecipeDetails = () => {
		stateList.setCurrentRecipe({
			label,
			image,
			source,
			calories,
			dishType,
			mealType,
			ingredients
		});
		stateList.setRecipeActive(true);
		console.log('Recipe Clicked', stateList.currentRecipe);
	};

	return (
		<RecipeDiv className="recipe">
			{image && <img src={image} alt={label} />}
			<h2>{label}</h2>
			<p className="calories">Calories: {Math.round(calories)}</p>
			<button className="see-recipe" onClick={seeRecipeDetails}>
				See Recipe
			</button>
		</RecipeDiv>
	);
};

const RecipeDiv = styled(motion.div)`
    background-color: white;
    border-radius: 28px;
    padding: 20px;
    margin-bottom: 20px;
	text-align: center;
	transition: 0.2s;
	&:hover {
		box-shadow: 0 6px 6px 0 #00000015;
	}

	img {
		border-radius: 50%;
		width: 100px;
	}
	h2 {
		font-size: 1.3rem;
		color:#0D99A8;
		margin-top:18px;
		margin-bottom: 12px;
	}
	.calories {
		color: #A2A2A2;
		font-size: 0.9rem;
	}
	.see-recipe {
		background-color: #D95C4E;
		border-radius: 16px;
		width: 100%;
		color: white;
		padding: 16px;
		font-size:1.5rem;
		font-weight: bold;
		border: none;
	}
`;

export default Recipe;
