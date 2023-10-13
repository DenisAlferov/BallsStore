import React, { useEffect, useState } from 'react';
import { IBook } from '../../types';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import { KeyboardArrowDown, KeyboardArrowUp, KeyboardBackspace, MoreHorizOutlined } from '@mui/icons-material';
import { Box, IconButton, Tab } from '@mui/material';
import {	BookInfoContainer, FavoriteRoundedContainer, ImgContainer, Info, InfoContainer, InfoName, InfoValue,
	Price, SelectedBookContainer, SliderTitle, SocialContainer, StyledA, StyledButtonCart, StyledTab, Title } from './style';
import { TabContext, TabList } from '@mui/lab';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import SubscribeInput from '../../client/components/SubscribeInput/SubscribeInput';
import { NavLink } from 'react-router-dom';
import { useActions } from '../../store/hooks/useActions';
import { useSelector } from 'react-redux';
import { allBooksSelectors } from '../../store/AllBooks/AllBooksSelector';
import MainSlider from '../../client/components/Slider/Slider';
import BookItem from '../../client/components/BookItem/BookItem';
import { BasicRating } from '../../client/components/BookItem/Rating';

const SelectedBook = () => {
	const [ book, setBook ] = useState<IBook>();
	const [ more, setMore ] = useState(false);
	const [ value, SetValue ] = useState('1');
	const stateBook = useTypedSelector((state) => state.selectedBook.selectedBook);
	const { clearSelectedBook, addToFavourite, deleteFromFavourite, addBookToCart } = useActions();
	const favoritebookArr = useSelector(allBooksSelectors.getAllFavoriteSelector);
	const cartbookArr = useSelector(allBooksSelectors.getCartBooksSelector);
	const allBookArr = useSelector(allBooksSelectors.getAllBooksSelector);
	const favoriteBook = favoritebookArr.find((item: IBook) => item.isbn13 === book?.isbn13);
	const cartBook = cartbookArr.find((item: IBook) => item.isbn13 === book?.isbn13);


	useEffect(() => {
		if (stateBook) {
			setBook(stateBook);
		}
	});
	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		SetValue(newValue);
	};
	const deleteSelectedBook = () => {
		clearSelectedBook();
	};
	const addtoFav = () => {
		addToFavourite(book!);
	};
	const delFromFav = () => {
		if (book) {
			deleteFromFavourite(book.isbn13);
		}
	};
	const addBooktoCart = () => {
		if (cartBook) {
			return;
		}
		if (book) {
			addBookToCart(book);
		}
	};
	const handleBtnClick = () => {
		setMore((prevState) => {
			return !prevState;
		});
	};

	return (
		<div>
			{book &&
			book.rating && (
				<SelectedBookContainer>
					<NavLink to="/" onClick={deleteSelectedBook}>
						<IconButton>
							<KeyboardBackspace />
						</IconButton>
					</NavLink>
					<Title>{book.title}</Title>
					<BookInfoContainer>
						<ImgContainer>
							<FavoriteRoundedContainer
								onClick={favoriteBook ? delFromFav : addtoFav}
								color={favoriteBook ? 'error' : 'action'}
							/>
							<img src={book.image} />
						</ImgContainer>
						<InfoContainer>
							<Info>
								<Price>{book.price}</Price>
								<BasicRating/>
							</Info>
							<Info>
								<InfoName>Authors</InfoName>
								<InfoValue>{book.authors}</InfoValue>
							</Info>
							<Info>
								<InfoName>Publisher</InfoName>
								<InfoValue>{book.publisher}</InfoValue>
							</Info>
							{more && (
								<div>
									<Info>
										<InfoName>Pages</InfoName>
										<InfoValue>{book.pages}</InfoValue>
									</Info>
									<Info>
										<InfoName>Year</InfoName>
										<InfoValue>{book.year}</InfoValue>
									</Info>
								</div>
							)}
							{more ? (
								<div>
									<span>Hide details</span>
									<IconButton onClick={handleBtnClick}>
										<KeyboardArrowUp />{' '}
									</IconButton>
								</div>
							) : (
								<div>
									<span>More details</span>
									<IconButton onClick={handleBtnClick}>
										<KeyboardArrowDown />
									</IconButton>
								</div>
							)}
							<StyledButtonCart onClick={addBooktoCart}>Add to cart</StyledButtonCart>
						</InfoContainer>
					</BookInfoContainer>
					<Box>
						<TabContext value={value}>
							<Box>
								<TabList onChange={handleChange}>
									<Tab label="Description" value="1" />
									<Tab label="Authors" value="2" />
									<Tab label="Subtitle" value="3" />
								</TabList>
							</Box>
							<StyledTab value="1">{book.desc}</StyledTab>
							<StyledTab value="2">
								This book was written by {book.authors}. In {book.year} it was published by{' '}
								{book.publisher} publishing house
							</StyledTab>
							<StyledTab value="3">Subtitle: {book.subtitle}</StyledTab>
						</TabContext>
					</Box>
					<SocialContainer>
						<StyledA href="https://1000.menu/cooking/37261-udon-s-kuricei-i-ovoschami">
							<TwitterIcon />
						</StyledA>
						<StyledA href="https://fontawesome.com/">
							<FacebookIcon />
						</StyledA>
						<StyledA href="https://www.kufar.by/item/171356948">
							<MoreHorizOutlined />
						</StyledA>
					</SocialContainer>
					<SubscribeInput />
					<SliderTitle>Similar Books</SliderTitle>
					<MainSlider title="Similar Books">
						{allBookArr.map((book) => (
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
				</SelectedBookContainer>
			)}
		</div>
	);
};

export default SelectedBook;