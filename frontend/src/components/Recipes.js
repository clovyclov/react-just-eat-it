import React from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Container } from './GlobalStyles';

const Recipes = ({ recipes, recipeTitle, setRecipeTitle }) => {
	return (
		<Container className="container">
			<div className="row">
				<div className="col-md-12">
					<RecipeHeading>{recipeTitle} Recipes</RecipeHeading>
					<RecipeList className="recipes">
						{recipes &&
							recipes.map((recipe, index) => {
								return (
									<Recipe
										key={index}
										label={recipe.recipe.label}
										image={recipe.recipe.image}
										calories={recipe.recipe.calories}
										dishType={recipe.recipe.dishType}
										mealType={recipe.recipe.mealType}
										totalTime={recipe.recipe.totalTime}
										source={recipe.recipe.source}
									/>
								);
							})}
					</RecipeList>
				</div>
			</div>
		</Container>
	);
};

const RecipeList = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
`;

const RecipeHeading = styled(motion.h2)`
	color: #566D94;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
	margin-top: 30px;
    margin-bottom: 28px;
`;

export default Recipes;
