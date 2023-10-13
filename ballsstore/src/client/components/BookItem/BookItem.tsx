import React from 'react';
import {	Price, StyledImg, StyledInfo, StyledItem, StyledTitle, Image, PriceContainer, PriceDiv } from './styles';
import { IBook } from '../../../types';
import { useActions } from '../../../store/hooks/useActions';
import { NavLink } from 'react-router-dom';
import { BasicRating } from './Rating';

const BookItem = (book: IBook) => {
	const { getSelectedBookAsync } = useActions();
	const getSelectedBook = () => {
		getSelectedBookAsync(book.isbn13);
	};

	return (
		<StyledItem onClick={() => getSelectedBook()}>
			<NavLink to={`/book/${book.isbn13}`}>
				<StyledImg>
					<Image src={book.image} />
				</StyledImg>
				<StyledTitle>{book.title}</StyledTitle>
				<StyledInfo>

					<PriceContainer>
						<PriceDiv><BasicRating/></PriceDiv>
						<Price>{book.price}</Price>
					</PriceContainer>
				</StyledInfo>
			</NavLink>
		</StyledItem>
	);
};

export default BookItem;