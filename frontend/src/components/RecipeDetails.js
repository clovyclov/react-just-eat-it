import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { AppState } from '../App';

const RecipeDetails = () => {
	const stateList = useContext(AppState);

	// if (stateList.currentRecipe != null) {
	// }
	const { image, label, calories, ingredients } = stateList.currentRecipe;
	const variants = {
		hidden : { opacity: 0, y: 300, transition: { duration: 0.9 } },
		show   : { opacity: 1, y: 0, transition: { duration: 0.9 } }
	};
	return (
		<div>
			{stateList.recipeActive && (
				<DetailContainer
					className="recipe-details"
					variants={variants}
					initial="hidden"
					animate="show"
					exit="hidden"
				>
					{stateList.currentRecipe && (
						<div className="current-recipe-list">
							<TitleContainer>
								<TitleContainerInner>
									<Image src={image} alt={label} />
									<Title>{label}</Title>
								</TitleContainerInner>
								<Close onClick={() => stateList.setRecipeActive(false)}>Close</Close>
							</TitleContainer>
							{ingredients && (
								<div>
									<b>Ingredients</b>
									<List>{ingredients.map((ingredient) => <li>{ingredient.text}</li>)}</List>
								</div>
							)}
						</div>
					)}
				</DetailContainer>
			)}
		</div>
	);
};

const DetailContainer = styled(motion.div)`
    position: fixed;
    display: flex;
    margin: auto;
    width: 100%;
    background: white;
    flex-direction: column;
    text-align: center;
    border-radius: 12px;
    box-shadow: 0 10px 20px -4px rgb(10 153 168 / 35%);
    min-height: 280px;
    padding: 28px;
    bottom: 0;
    width: 100vw;
    max-width: 100%;
`;

const Close = styled(motion.button)`
    border: none;
    width: 100px;
    border-radius: 4px;
    padding: 10px;
    margin-left: auto;
    max-height: 50px;
`;

const List = styled(motion.ul)`
    list-style-type: none;
    column-count: 3;
    padding: 0;
    margin: 0;
    max-width: 100%;
    padding: 20px;
    border: 1px solid #ccc;
    text-align: center;
`;

const TitleContainer = styled(motion.div)`
    display: flex;
    align-items: center;
`;

const TitleContainerInner = styled(motion.div)`
    display: flex;
    align-items: center;
`;

const Image = styled(motion.img)`
    width: 80px;
    border-radius: 50%;
`;

const Title = styled(motion.h2)`
    margin: 0 10px;
`;

export default RecipeDetails;
