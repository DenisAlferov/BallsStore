import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	font-size: 200px;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.palette.primary.background};
`;
