import React from 'react';
import { BookContainer, FavoriteBookContainer, SliderTitle, Title } from './styles';
import { IBook } from '../../types';
import FavoriteBookItem from '../../client/components/FavoriteBookItem/FavoriteBookItem';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../store/AllBooks/AllBooksSelector';
import { NavLink } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { FavoriteBorder, KeyboardBackspace } from '@mui/icons-material';
import MainSlider from '../../client/components/Slider/Slider';
import BookItem from '../../client/components/BookItem/BookItem';
import { StyledP } from '../Cart/styles';

const FavoriteBooks = () => {
	const favoriteBooksArr = useSelector(allBooksSelectors.getAllFavoriteSelector);
	const allBooks = useSelector(allBooksSelectors.getAllBooksSelector);

	return (
		<FavoriteBookContainer>
			<NavLink to="/">
				<IconButton>
					<KeyboardBackspace />
				</IconButton>
			</NavLink>
			<Title>Favorites</Title>
			{favoriteBooksArr.length ? (
				<BookContainer>
					{favoriteBooksArr &&
						favoriteBooksArr.map((book: IBook) => (
							<FavoriteBookItem
								title={book.title}
								subtitle={book.subtitle}
								isbn13={book.isbn13}
								price={book.price}
								image={book.image}
								url={book.url}
								key={book.isbn13 + book.image}
							/>
						))}
				</BookContainer>
			) : (
				<StyledP>
					{' '}
					Please, add book to Favorites. You need to click the heart{' '}
					<FavoriteBorder color="action" fontSize="inherit" /> on the book page.
				</StyledP>
			)}
			<SliderTitle>Popular Books</SliderTitle>
			<MainSlider title="Similar Books">
				{allBooks.map((book) => (
					<BookItem
						title={book.title}
						subtitle={book.subtitle}
						isbn13={book.isbn13}
						price={book.price}
						image={book.image}
						url={book.url}
						key={book.isbn13 + book.price}
					/>
				))}
			</MainSlider>
		</FavoriteBookContainer>
	);
};

export default FavoriteBooks;