import styled from 'styled-components';

export const CartContainer = styled.div`
	max-width: 1120px;
	min-height: 100vh;
	margin: 0 auto;
	padding: 100px 10px;
	background-color: ${(props) => props.theme.palette.primary.background};
	color: ${props => props.theme.palette.text.main};
`;

export const BookContainer = styled.div`
	display: relative;
	display: flex;
	flex-direction: column;
	gap: 15px;
	color: ${props => props.theme.palette.text.main};
`;

export const ThanksPopUp = styled.div`
	height: 150px;
	width: 350px;
	position: absolute;
	top: calc(50% - 70px);
	left: calc(50% - 170px);
	border: 2px solid grey;

`;

export const Title = styled.h2`
	font-family: 'Bebas Neue', sans-serif;
	text-transform: uppercase;
	font-size: 50px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	padding: 10px 0 20px;
	color: ${props => props.theme.palette.text.main};

	@media (max-width: 750px) {
		font-size: 40px;
		padding: 10px 0 10px;
	}

	@media (max-width: 600px) {
		font-size: 34px;
	}
`;

export const TotalWrapper = styled.div`
	width: 30%;
	margin-left: auto;
	border-top: 1px solid #d9d9d9;
	padding-top: 10px;

	@media (max-width: 600px) {
		width: 100%;
		margin-left: 0;
	}
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${props => props.theme.palette.text.main};
`;

export const InfoName = styled.div`

	color: ${props => props.theme.palette.text.main};
	font-family: 'Bebas Neue', sans-serif;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const InfoValue = styled.div`
	font-family: 'Bebas Neue', sans-serif;
	font-size: 20px;
	font-style: normal;
	color: ${props => props.theme.palette.text.main};
	font-weight: 400;
	line-height: 32px;
`;

export const TotalDiv = styled.div`
	display: flex;
	justify-content: space-between;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 30px;
	font-style: normal;
	font-weight: 700;
	color: ${props => props.theme.palette.text.main};
	line-height: 60px;

	@media (max-width: 750px) {
		font-size: 26px;
		line-height: 50px;
	}
`;

export const StyledButton = styled.button`
	display: inline-block;
	margin: 10px auto 0;
	width: 100%;
	height: 40px;
	background-color: black;
	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 20px;
	font-style: normal;
	padding: 5px 0;
	color: ${props => props.theme.palette.btn.main};

	&:hover {
		background-color: grey;
	}
`;

export const StyledP = styled.p`
	display: flex;
	justify-content: center;
	font-size: 28px;
	padding: 15px;
	margin-bottom: 25px;
	color: ${props => props.theme.palette.text.main};

	@media (max-width: 650px) {
		font-size: 24px;
		line-height: 40px;
	}
`;
