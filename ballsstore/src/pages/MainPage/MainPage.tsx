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
import { useTypedSelector } from '../../store/hooks/useTypeSelector';
import { IBook } from '../../types';



const MainPage = () => {
   const books = useTypedSelector((state) => state.books.allBooks)
   const favoriteBooks = useTypedSelector((state) => state.books.allBooks.filter((book) => book.isFavourite))


   const { getBooksAsync } = useActions();

   useEffect(() => {
    getBooksAsync();
   }, []);
       
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