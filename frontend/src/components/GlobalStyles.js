import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyles = createGlobalStyle`
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
body {
	background-color: #edf0f5;
	font-family: 'Montserrat', sans-serif;
	margin-top: 120px;
}
`;

export const Container = styled(motion.div)`
    margin: 40px auto;
`;

export default GlobalStyles;
