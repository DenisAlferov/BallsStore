import styled from 'styled-components';
import { FavoriteOutlined } from '@mui/icons-material';
import { TabPanel } from '@mui/lab';
import { backgroundColorSS } from '../../client/components/BookItem/styles';

export const SelectedBookContainer = styled.div`
	max-width: 1120px;
	padding: 100px 30px;
	margin: 0 auto;
	background-color: ${props => props.theme.palette.primary.main};
	color: ${props => props.theme.palette.text.main};
`;

export const Title = styled.h2`
	text-transform: uppercase;
	color: ${props => props.theme.palette.text.main};
	font-family: 'Bebas Neue', sans-serif;
	font-size: 46px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;

	@media (max-width: 900px) {
		font-size: 40px;
		line-height: 58px;
	}
	@media (max-width: 800px) {
		font-size: 30px;
		line-height: 50px;
	}

	@media (max-width: 600px) {
		font-size: 24px;
		line-height: 36px;
	}
`;

export const BookInfoContainer = styled.div`
	display: flex;
	color: ${props => props.theme.palette.text.main};
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

export const ImgContainer = styled.div`
	position: relative;
	width: 45%;
	background-color: ${backgroundColorSS};
	text-align: center;
	align-items: center;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const FavoriteRoundedContainer = styled(FavoriteOutlined)`
    position: absolute;
    right: 5px;
    top: 5px;

     &:hover{
        color: red;
        transform: scale(1.1)
    }`;

export const InfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	color: ${props => props.theme.palette.text.main};
	width: 35%;

	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${props => props.theme.palette.text.main};
`;

export const InfoName = styled.div`
	color: ${props => props.theme.palette.text.main};
	font-family: 'Helios', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const InfoValue = styled.div`
	color: ${props => props.theme.palette.text.main};
	font-family: 'Helios', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;
`;

export const Price = styled.div`
	color: ${props => props.theme.palette.text.main};
	font-family: 'Bebas Neue', sans-serif;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px;

	@media (max-width: 900px) {
		font-size: 30px;
	}
`;

export const StyledTab = styled(TabPanel)`
	color: ${props => props.theme.palette.text.main};
	font-family: 'Helios', sans-serif;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: 32px;

	@media (max-width: 380px) {
		font-size: 14px;
	}
`;

export const SocialContainer = styled.div`
	width: 100px;
	display: flex;
	justify-content: space-between;
`;

export const StyledButtonCart = styled.button`
	display: block;
	margin-top: 20px;
	width: 100%;
	color: ${props => props.theme.palette.btn.main};
	background: black;
	padding: 16px 40px;
	text-transform: uppercase;
	font-family: 'Bebas Neue', sans-serif;
	font-size: 18px;
	font-style: normal;
	font-weight: 700;
	line-height: 24px;
	letter-spacing: 0.9px;

	&:hover {
		background: #5b5a62;
	}

	@media (max-width: 700px) {
		font-size: 14px;
	}
`;

export const SliderTitle = styled.div`
	margin-top: 20px;
	color: ${props => props.theme.palette.text.main};
	font-family: 'Bebas Neue', sans-serif;
	font-size: 40px;
	font-style: normal;
	font-weight: 700;
	line-height: 60px;
`;

export const StyledA = styled.a`
	color: ${props => props.theme.palette.text.main};
	&:hover{
		background-color: gray;
		border-radius: 5px;
	}
`;
