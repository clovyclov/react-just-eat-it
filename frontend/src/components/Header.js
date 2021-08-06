import React from 'react';
import logo from '../img/logo.png';
import profile from '../img/profile.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Search from './Search';

const Header = ({ searchTerm, setSearchTerm, setRecipes, setRecipeTitle }) => {
	return (
		<HeaderDiv className="header">
			<div className="container p-4">
				<div className="row">
					<div className="col-md-6">
						<img src={logo} alt="Logo" />
					</div>
					<div className="col-md-6">
						<Search
							searchTerm={searchTerm}
							setSearchTerm={setSearchTerm}
							setRecipes={setRecipes}
							setRecipeTitle={setRecipeTitle}
						/>
					</div>
				</div>
			</div>
		</HeaderDiv>
	);
};

const HeaderDiv = styled(motion.div)`
	background-color: white;
	box-shadow: 0 4px 6px 0 #00000017;
	border-bottom-right-radius: 75px;

	.profile {
		display: flex;
		justify-content: flex-end;

		img {
			cursor: pointer;
		}
	}
`;

export default Header;
