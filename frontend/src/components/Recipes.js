import React from 'react';
import Recipe from './Recipe';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './GlobalStyles';

const Recipes = ({ recipes, recipeTitle, setRecipeTitle }) => {
	const variants = {
		hidden  : { opacity: 0, y: 200, transition: { duration: 0.4 } },
		visible : { opacity: 1, y: 0, transition: { duration: 0.8 } }
	};
	return (
		<Container className="container">
			<div className="row">
				<div className="col-md-12">
					<RecipeHeading>{recipeTitle} Recipes</RecipeHeading>
					<Description>Use the search bar above to find amazing recipes!</Description>
					<AnimatePresence>
						<RecipeList
							className="recipes"
							variants={variants}
							initial="hidden"
							animate="visible"
							exit="hidden"
							key={recipeTitle}
						>
							{recipes &&
								recipes.map((recipe, index) => {
									//console.log(recipe);
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
											ingredients={recipe.recipe.ingredients}
										/>
									);
								})}
						</RecipeList>
					</AnimatePresence>
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
    margin-bottom: 10px;
`;

const Description = styled(motion.p)`
	text-align: center;
    color: gray;
	margin-bottom: 28px;
`;

export default Recipes;
