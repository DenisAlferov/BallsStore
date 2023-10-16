import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 40px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.palette.primary.background};
`;