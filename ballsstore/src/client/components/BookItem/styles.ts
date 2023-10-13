import styled from 'styled-components';

export const getRandomStart = (min:number, max:number) => {
   return Math.floor(Math.random() * (max - min)) + min;
};

export const backgroundColorSS = () => {
   const myColor = 'rgb('+getRandomStart(0,255)+', '+getRandomStart(0,255)+', '+getRandomStart(0,255)+', '+0.5+')';
   return myColor
};

export const StyledItem = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-self: stretch;
	background-color: ${props => props.theme.palette.primary.main};
	color: ${props => props.theme.palette.btn.main};

	& a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;

export const StyledImg = styled.div`
	display: block;
	width: 100%;
	background-color: ${backgroundColorSS};

	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 950px) {
		width: 90%;
	}
`;

export const Image = styled.img`
display: block;
`;

export const StyledTitle = styled.h2`
	width: 90%;
	color: ${props => props.theme.palette.text.main};
	font-family: ''Bebas Neue', sans-serif';
	text-transform: uppercase;
	padding: 10px 0;
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;
	height: 100px;

	@media (max-width: 950px) {
		font-size: 18px;
	}
`;

export const StyledInfo = styled.div`
	width: 100%;

	@media (max-width: 950px) {
		width: 90%;
	}
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px ;
`;

export const Price = styled.div`
   color: ${props => props.theme.palette.text.main};
	font-family: 'Bebas Neue', sans-serif;
	font-size: 24px;
	font-style: normal;
	font-weight: 700;
	line-height: 32px;

	@media (max-width: 950px) {
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: 24px;
	}
`;

export const PriceDiv = styled.div`color: black;`;