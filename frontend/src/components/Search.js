import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import profile from './../img/profile.png';
import axios from 'axios';

const Search = ({ searchTerm, setSearchTerm, setRecipes, setRecipeTitle }) => {
	const updateSearchTerm = (e) => {
		setSearchTerm(e.target.value);
	};
	const handleSearch = () => {
		axios
			.get('/recipes', {
				params : {
					q : searchTerm
				}
			})
			.then((data) => {
				setRecipes(data.data.hits);
				setRecipeTitle(searchTerm);
			});
	};
	return (
		<HeaderContainer>
			<FormContainer className="search-container">
				<Form onSubmit={(e) => e.preventDefault()}>
					<input
						type="text"
						placeholder="Search Recipes..."
						className="search"
						value={searchTerm}
						onChange={updateSearchTerm}
					/>
					<button onClick={handleSearch}>Search</button>
				</Form>
			</FormContainer>

			<div className="profile">
				<img src={profile} alt="Profile Picture" />
			</div>
		</HeaderContainer>
	);
};

const HeaderContainer = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
`;
const Form = styled.form`
	width: 100%;
	display: flex;
	align-content: center;
	justify-content: center;
`;
const FormContainer = styled(motion.div)`
    border: 1px solid #CFCFCF;
    border-radius: 20px;
    text-align: center;
    min-width: 350px;
    margin-right: 20px;
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 5px;
    padding-left: 20px;
    input {
        border: none;
        background-color: transparent;
        color: #566D94;
        &:focus {
            border: none;
            outline: none;
        }
    }
    button {
        font-size: 0.9rem;
        border-radius: 20px;
        width: 100px;
        background: #0D99A8;
        color: white;
        border: none;
        font-weight: bold;
    }
`;

export default Search;
