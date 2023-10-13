import styled from 'styled-components';

export const BodyWrapper = styled('section')`
background-color: ${props => props.theme.palette.primary.main};
color: ${props => props.theme.palette.text.main};
`

export const StyledLayout = styled.div`
	max-width: 1200px;
	padding: 0 15px;
	margin: 0 auto;
	background-color: ${props => props.theme.palette.primary.main};
`;
