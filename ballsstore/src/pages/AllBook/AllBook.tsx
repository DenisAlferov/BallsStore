import React, { useEffect } from 'react';
import { AllBookContainer, BookContainer, StyledPagination, Title } from './styles';
import BookItem from '../../client/components/BookItem/BookItem';
import { useActions } from '../../store/hooks/useActions';
import { IBook } from '../../types';
import { useTypedSelector } from '../../store/hooks/useTypedSelector';
import SubscribeInput from '../../client/components/SubscribeInput/SubscribeInput';
import { StyledP } from '../Cart/styles';
import InputPass from '../../client/components/InputPass/InputPass';

const AllBook = () => {
	const AllBooks = useTypedSelector((state) => state.allBooks.allBooks);
	const SearchBooks = useTypedSelector((state) => state.allBooks.searchBook.books);
	const total = useTypedSelector((state) => state.allBooks.searchBook.total);
	const value = useTypedSelector((state) => state.searchValue.value);
	const count = Math.ceil(Number(total) / 10);
	const { getAllBooks, getSearchBooksAsync } = useActions();

	useEffect(() => {
		getAllBooks();
	}, []);

	const handleChangePage = (event: any, pageNum: number) => {
		if (value) {
			getSearchBooksAsync(value, pageNum);
		}
	};

	return (
		<AllBookContainer>
			{/* <InputPass/> */}
			{value === null ? (
				<div>
					<Title>New Releases Books</Title>
					<BookContainer>
						{AllBooks &&
							AllBooks.map((book: IBook) => (
								<BookItem
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
				</div>
			) : (
				<div>
					<Title> "{value}" Search results</Title>
					<StyledP>Found {total} books</StyledP>
					<BookContainer>
						{SearchBooks &&
							SearchBooks.map((book: IBook) => (
								<BookItem
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
					<StyledPagination count={count} onChange={handleChangePage} />
				</div>
			)}
			<SubscribeInput />
		</AllBookContainer>
	);
};

export default AllBook;