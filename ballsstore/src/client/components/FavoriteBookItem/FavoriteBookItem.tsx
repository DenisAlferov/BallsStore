import React from 'react';
import {	Price, StyledImg, StyledInfo, StyledItem, StyledTitle, Image, PriceContainer, PriceDiv,
	FavoriteBookContainer, StyledFavBookInfo } from './styles';
import { IBook } from '../../../types';
import { FavoriteBorder } from '@mui/icons-material';
import { useActions } from '../../../store/hooks/useActions';
import { NavLink } from 'react-router-dom';
import { BasicRating } from '../BookItem/Rating';

const FavoriteBookItem = (book: IBook) => {
	const { deleteFromFavourite, getSelectedBookAsync } = useActions();
	const deleteFavoriteBook = () => {
		deleteFromFavourite(book.isbn13);
	};
	const getSelectedBook = () => {
		getSelectedBookAsync(book.isbn13);
	};

	return (
		<StyledItem onClick={getSelectedBook}>
			<FavoriteBookContainer>
				<StyledImg>
					<Image src={book.image} />
				</StyledImg>
				<StyledFavBookInfo>
					<NavLink to={`/book/${book.isbn13}`}>
						<StyledTitle>{book.title}</StyledTitle>
					</NavLink>
					<StyledInfo>
						<PriceContainer>
							<PriceDiv>Price</PriceDiv>
							<BasicRating/>
							<Price>{book.price}</Price>
						</PriceContainer>
					</StyledInfo>
				</StyledFavBookInfo>
			</FavoriteBookContainer>
			<FavoriteBorder color="error" onClick={deleteFavoriteBook} />
		</StyledItem>
	);
};

export default FavoriteBookItem;