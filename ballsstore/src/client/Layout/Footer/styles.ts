import styled from 'styled-components';

export const StyledFooter = styled('footer')`
	position: fixed;
	bottom: 0;
	border-top: 1px solid #d9d9d9;
	background-color: ${props => props.theme.palette.primary.main};
	color: ${props => props.theme.palette.text.main};
	display: flex;
	justify-content: space-around;
	align-items: center;
	max-width: 1200px;
	width: 100%;
	height: 60px;
	margin: 0 auto;
`;


export const StyledP = styled('p')`
 	color: ${props => props.theme.palette.text.main};
	font-size: 18px;
	font-family: 'Bebas Neue', sans-serif;
`;
