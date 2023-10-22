import styled from 'styled-components';
import { backgroundColorSS } from '../BookItem/styles';

export const StyledItem = styled.div`
	width: 100%;
	display: flex;
	color: ${props => props.theme.palette.text.main};
	justify-content: space-between;
`;

export const FavoriteBookContainer = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 30px;

	@media (max-width: 1000px) {
		width: 90%;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		width: 100%;
	}
`;

export const StyledImg = styled.div`
	max-width: 300px;
	background-color: ${backgroundColorSS};
	height: 280px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 600px) {
		margin: 0 auto;
	}
`;
export const Image = styled.img`
	display: block;
	height: 250px;
`;

export const StyledFavBookInfo = styled.div`
	max-width: 670px;
	width: 700px;
`;

export const StyledTitle = styled.h2`
	color: ${props => props.theme.palette.text.main};
	font-family: 'Bebas Neue', sans-serif;
	text-transform: uppercase;
	padding: 10px 0;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	@media (max-width: 850px) {
		font-size: 20px;
		line-height: 28px;
	}
`;

export const StyledInfo = styled.div`
	width: 100%;
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 0;
	color: ${props => props.theme.palette.text.main};
`;

export const Price = styled.div`
	color: ${props => props.theme.palette.text.main};
	font-family: 'Bebas Neue', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
`;

export const PriceDiv = styled.div`
	font-family: 'Bebas Neue', sans-serif;
	font-size: 24px;
	color: ${props => props.theme.palette.text.main};
`;