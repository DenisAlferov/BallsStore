import React, { useEffect, useState } from 'react';
import BookItem, {ResponseTypes } from '../../client/components/BookItem/BookItem';
import Title from '../../client/components/Title/Title';
import { ContentWrapper, Pagination, StyledNext, StyledPagination, StyledPrev } from '../../client/components/Layout/styles';
import Subscribe from '../../client/components/Subscribe/Subscribe';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useActions } from '../../store/hooks/useActiions';
import { Dispatch } from "redux"; 
import { booksAction  } from '../../store/Actions/booksActions';
import { useTypeSelector } from '../../store/hooks/useTypeSelector';
import { IBook } from '../../types';



const MainPage = () => {
   const books = useTypeSelector((state) => state.books.allBooks)
   const favoriteBooks = useTypeSelector((state) => state.books.allBooks.filter((book) => book.isFavourite))

   const getBooks = async (): Promise<ResponseTypes> => {
      return await (await fetch('https://api.itbook.store/1.0/new')).json();
   };
   const getBooksAsync = () => {
         return (dispatch: Dispatch) => {
         getBooks().then((results) => dispatch(booksAction.setBooks(results.books)))} 
   }  
   useEffect(() => {
         getBooksAsync() 
        }, [])
       
   return (
      <div>

<Title/>

<ContentWrapper>

   
   {books && books.map((book: IBook) => <BookItem 
       title={book.title}              
       subtitle={book.subtitle}
       isbn13={book.isbn13}
       price={book.price}
       image={book.image}
       url={book.url}
   key={book.isbn13 + book.url}/>)}

</ContentWrapper>
<StyledPagination> 
   <StyledPrev>
      <ArrowBackIosNewIcon/> 
      Prev
   </StyledPrev>
   <Pagination>1 2 3 ... 16</Pagination>
   <StyledNext>
      Next
      <ArrowForwardIosIcon/> 
   </StyledNext>
</StyledPagination>
<Subscribe/>
         
      </div>
   );
};

export default MainPage;  